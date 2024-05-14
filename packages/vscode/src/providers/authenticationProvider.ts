//import * as vscode from 'vscode';
import { commands, authentication, AuthenticationProvider, AuthenticationProviderAuthenticationSessionsChangeEvent, AuthenticationSession, Disposable, env, EventEmitter, ExtensionContext, ProgressLocation, Uri, UriHandler, window } from "vscode";
import { v4 as uuid } from 'uuid';
import { authenticate } from '../services/authenticationService';
import { TokenSet } from 'openid-client';
import { SuperOfficeAuthenticationSession, UserClaims } from '../types';
import { getSuoFile, writeSuoFile } from '../workspace/fileSystemHandler';
import { treeViewDataProvider } from '../extension';
import { getTenantStateAsync } from '../services/systemService';

export const AUTH_TYPE = `superoffice`;
const AUTH_NAME = `SuperOffice`;
const SESSIONS_SECRET_KEY = `${AUTH_TYPE}.sessions`;
let contextIdentifier: string | null = null;

export let currentSession: SuperOfficeAuthenticationSession | null = null;

export class SuperofficeAuthenticationProvider implements AuthenticationProvider, Disposable {
    private _sessionChangeEmitter = new EventEmitter<AuthenticationProviderAuthenticationSessionsChangeEvent>();
    private _disposable: Disposable;

    constructor(private readonly context: ExtensionContext) {
        this._disposable = Disposable.from(
            authentication.registerAuthenticationProvider(AUTH_TYPE, AUTH_NAME, this, { supportsMultipleAccounts: false })
        );
    }


    get onDidChangeSessions() {
        return this._sessionChangeEmitter.event;
    }

    /**
     * Get the existing sessions
     * @param scopes 
     * @returns 
     */
    public async getSessions(_scopes?: string[]): Promise<readonly SuperOfficeAuthenticationSession[]> {
        const allSessions = await this.context.secrets.get(SESSIONS_SECRET_KEY);

        if (allSessions) {
            const sessionArray = JSON.parse(allSessions) as SuperOfficeAuthenticationSession[];

            try {
                const suoFile = await getSuoFile();
                const session = sessionArray.find(obj => obj.contextIdentifier === suoFile.contextIdentifier);

                if (session) {
                    // Check if session has expired
                    if (session.expiresAt! < Date.now()) {
                        console.log("Session expired");
                        this.removeSession(session.id);
                        return [];
                    }
                    this.setLoggedIn(session);
                    window.showInformationMessage(`Session still valid for tenant: ${session.contextIdentifier}`);
                    return [session];
                }
            } catch (error) {
                console.log(error);
                return [];
            }
        }
        return [];
    }


    /**
     * Create a new auth session
     * @param scopes 
     * @returns 
     */
    public async createSession(_scopes: string[]): Promise<SuperOfficeAuthenticationSession> {
        try {
            const environment = await this.selectEnvironment();

            // //Run Authorization Code Flow with PKCE
            const tokenSet = await authenticate(environment) as TokenSet;

            if (!tokenSet.access_token) {
                throw new Error('Access token is missing from the authentication response.');
            }

            // //Get Claims and tenant Status
            const claims: UserClaims = tokenSet.claims() as UserClaims;
            contextIdentifier = `${claims['http://schemes.superoffice.net/identity/ctx']}`;

            const state = await getTenantStateAsync(environment, contextIdentifier);
            if(!state.IsRunning){
                throw new Error('The tenant is not running');
            }

            const session: SuperOfficeAuthenticationSession = {
                id: uuid(),
                contextIdentifier: contextIdentifier,
                accessToken: tokenSet.access_token,
                refreshToken: tokenSet.refresh_token,
                webApiUri: state.Api,
                expiresAt: Date.now() + 3600 * 1000,
                claims: claims,
                account: {
                    label: contextIdentifier,
                    id: contextIdentifier
                },
                scopes: []
            };

            await this.context.secrets.store(SESSIONS_SECRET_KEY, JSON.stringify([session]));
            await writeSuoFile(JSON.stringify({ contextIdentifier: contextIdentifier }));

            this._sessionChangeEmitter.fire({ added: [session], removed: [], changed: [] });

            this.setLoggedIn(session);

            return session;
        } catch (e) {
            window.showErrorMessage(`Sign in failed: ${e}`);
            throw e;
        }
    }

    /**
   * Remove an existing session
   * @param sessionId 
   */
    public async removeSession(sessionId: string): Promise<void> {
        const allSessions = await this.context.secrets.get(SESSIONS_SECRET_KEY);
        if (allSessions) {
            const sessions = JSON.parse(allSessions) as SuperOfficeAuthenticationSession[];
            const sessionIdx = sessions.findIndex(s => s.id === sessionId);
            const session = sessions[sessionIdx];
            sessions.splice(sessionIdx, 1);

            await this.context.secrets.store(SESSIONS_SECRET_KEY, JSON.stringify(sessions));

            if (session) {
                this._sessionChangeEmitter.fire({ added: [], removed: [session], changed: [] });
            }
            this.setLoggedOut();
        }
    }

    async selectEnvironment(): Promise<string> {
        const environment = await window.showQuickPick(['sod', 'online'], {
            placeHolder: 'Select an environment',
            canPickMany: false
        });

        if (!environment) {
            throw new Error('Environment selection was canceled by the user.');
        }

        return environment;
    }

    // This method is used to update the login status and refresh the tree
    public setLoggedIn(session: SuperOfficeAuthenticationSession): void {
        currentSession = session;
        //Needed to help the package.json figure out if you are logged inn or not
        commands.executeCommand('setContext', 'authenticated', currentSession ?? false);
        treeViewDataProvider.refresh();
    }

    // This method is used to update the login status and refresh the tree
    public setLoggedOut(): void {
        currentSession = null;
        //Needed to help the package.json figure out if you are logged inn or not
        commands.executeCommand('setContext', 'authenticated', false);
        treeViewDataProvider.refresh();
    }

    /**
     * Dispose the registered services
     */
    public async dispose() {
        this._disposable.dispose();
    }
}