import { crmscriptLanguagePlugin, CrmscriptCode } from './languagePlugin.js';
import { create as createEmmetService } from 'volar-service-emmet';
import { create as createHtmlService } from 'volar-service-html';
import { create as createCssService } from 'volar-service-css';
import { create as createTypeScriptServices } from 'volar-service-typescript';
import { createServer, createConnection, createTypeScriptProjectProviderFactory, Diagnostic, VirtualCode, loadTsdkByPath } from '@volar/language-server/node.js';
import { create as createCrmscriptService } from "./crmscriptLanguageService.js";

const connection = createConnection();
const server = createServer(connection);

connection.listen();

connection.onInitialize(params => {
	const tsdk = loadTsdkByPath(params.initializationOptions.typescript.tsdk, params.locale);
	return server.initialize(
		params,
		createTypeScriptProjectProviderFactory(tsdk.typescript, tsdk.diagnosticMessages),
		{
			getLanguagePlugins() {
				return [crmscriptLanguagePlugin];
			},
			getServicePlugins() {
				return [
					createHtmlService(),
					createCssService(),
					createEmmetService(),
					...createTypeScriptServices(tsdk.typescript, {}),
					{
						create(context) {
							return {
								provideDiagnostics(document) {
									const virtualCode = context.documents.getVirtualCodeByUri(document.uri)[0] as VirtualCode | CrmscriptCode | undefined;
									if (!virtualCode || !('htmlDocument' in virtualCode)) {
										return;
									}
									const styleNodes = virtualCode.htmlDocument.roots.filter(root => root.tag === 'style');
									if (styleNodes.length <= 1) {
										return;
									}
									const errors: Diagnostic[] = [];
									for (let i = 1; i < styleNodes.length; i++) {
										errors.push({
											severity: 2,
											range: {
												start: document.positionAt(styleNodes[i].start),
												end: document.positionAt(styleNodes[i].end),
											},
											source: 'crmscript',
											message: 'Only one style tag is allowed.',
										});
									}
									return errors;
								},
							};
						},
					},
					createCrmscriptService,
				];
			},
		},
	);
});

connection.onInitialized(server.initialized);

connection.onShutdown(server.shutdown);