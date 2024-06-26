/* eslint-disable @typescript-eslint/naming-convention */
import type * as monaco from 'monaco-editor-core';

export const theme: monaco.editor.IStandaloneThemeData = {
  inherit: false,
  base: 'vs-dark',
  colors: {
    'activityBarBadge.background': '#007acc',
    'editor.background': '#1e1e1e',
    'editor.foreground': '#d4d4d4',
    'editor.inactiveSelectionBackground': '#3a3d41',
    'editor.selectionHighlightBackground': '#add6ff26',
    'editorIndentGuide.activeBackground': '#707070',
    'editorIndentGuide.background': '#404040',
    'input.placeholderForeground': '#a6a6a6',
    'list.activeSelectionIconForeground': '#ffffff',
    'list.dropBackground': '#383b3d',
    'menu.background': '#252526',
    'menu.foreground': '#cccccc',
    'ports.iconRunningProcessForeground': '#369432',
    'sideBarSectionHeader.background': '#00000000',
    'sideBarSectionHeader.border': '#cccccc33',
    'sideBarTitle.foreground': '#bbbbbb',
    'statusBarItem.remoteBackground': '#16825d',
    'statusBarItem.remoteForeground': '#ffffff',
    'tab.lastPinnedBorder': '#cccccc33',
  },
  rules: [
    {
      foreground: '#D4D4D4',
      token: 'meta.embedded',
    },
    {
      foreground: '#D4D4D4',
      token: 'source.groovy.embedded',
    },
    {
      fontStyle: 'italic',
      token: 'emphasis',
    },
    {
      fontStyle: 'bold',
      token: 'strong',
    },
    {
      foreground: '#000080',
      token: 'header',
    },
    {
      foreground: '#6A9955',
      token: 'comment',
    },
    {
      foreground: '#569CD6',
      token: 'constant.language',
    },
    {
      foreground: '#B5CEA8',
      token: 'constant.numeric',
    },
    {
      foreground: '#B5CEA8',
      token: 'variable.other.enummember',
    },
    {
      foreground: '#B5CEA8',
      token: 'keyword.operator.plus.exponent',
    },
    {
      foreground: '#B5CEA8',
      token: 'keyword.operator.minus.exponent',
    },
    {
      foreground: '#646695',
      token: 'constant.regexp',
    },
    {
      foreground: '#569CD6',
      token: 'entity.name.tag',
    },
    {
      foreground: '#D7BA7D',
      token: 'entity.name.tag.css',
    },
    {
      foreground: '#9CDCFE',
      token: 'entity.other.attribute-name',
    },
    {
      foreground: '#D7BA7D',
      token: 'entity.other.attribute-name.class.css',
    },
    {
      foreground: '#D7BA7D',
      token: 'entity.other.attribute-name.class.mixin.css',
    },
    {
      foreground: '#D7BA7D',
      token: 'entity.other.attribute-name.id.css',
    },
    {
      foreground: '#D7BA7D',
      token: 'entity.other.attribute-name.parent-selector.css',
    },
    {
      foreground: '#D7BA7D',
      token: 'entity.other.attribute-name.pseudo-class.css',
    },
    {
      foreground: '#D7BA7D',
      token: 'entity.other.attribute-name.pseudo-element.css',
    },
    {
      foreground: '#D7BA7D',
      token: 'source.css.less entity.other.attribute-name.id',
    },
    {
      foreground: '#D7BA7D',
      token: 'entity.other.attribute-name.scss',
    },
    {
      foreground: '#F44747',
      token: 'invalid',
    },
    {
      fontStyle: 'underline',
      token: 'markup.underline',
    },
    {
      foreground: '#569CD6',
      fontStyle: 'bold',
      token: 'markup.bold',
    },
    {
      foreground: '#569CD6',
      fontStyle: 'bold',
      token: 'markup.heading',
    },
    {
      fontStyle: 'italic',
      token: 'markup.italic',
    },
    {
      fontStyle: 'strikethrough',
      token: 'markup.strikethrough',
    },
    {
      foreground: '#B5CEA8',
      token: 'markup.inserted',
    },
    {
      foreground: '#CE9178',
      token: 'markup.deleted',
    },
    {
      foreground: '#569CD6',
      token: 'markup.changed',
    },
    {
      foreground: '#6A9955',
      token: 'punctuation.definition.quote.begin.markdown',
    },
    {
      foreground: '#6796E6',
      token: 'punctuation.definition.list.begin.markdown',
    },
    {
      foreground: '#CE9178',
      token: 'markup.inline.raw',
    },
    {
      foreground: '#808080',
      token: 'punctuation.definition.tag',
    },
    {
      foreground: '#569CD6',
      token: 'meta.preprocessor',
    },
    {
      foreground: '#569CD6',
      token: 'entity.name.function.preprocessor',
    },
    {
      foreground: '#CE9178',
      token: 'meta.preprocessor.string',
    },
    {
      foreground: '#B5CEA8',
      token: 'meta.preprocessor.numeric',
    },
    {
      foreground: '#9CDCFE',
      token: 'meta.structure.dictionary.key.python',
    },
    {
      foreground: '#569CD6',
      token: 'meta.diff.header',
    },
    {
      foreground: '#569CD6',
      token: 'storage',
    },
    {
      foreground: '#569CD6',
      token: 'storage.type',
    },
    {
      foreground: '#569CD6',
      token: 'storage.modifier',
    },
    {
      foreground: '#569CD6',
      token: 'keyword.operator.noexcept',
    },
    {
      foreground: '#CE9178',
      token: 'string',
    },
    {
      foreground: '#CE9178',
      token: 'meta.embedded.assembly',
    },
    {
      foreground: '#CE9178',
      token: 'string.tag',
    },
    {
      foreground: '#CE9178',
      token: 'string.value',
    },
    {
      foreground: '#D16969',
      token: 'string.regexp',
    },
    {
      foreground: '#569CD6',
      token: 'punctuation.definition.template-expression.begin',
    },
    {
      foreground: '#569CD6',
      token: 'punctuation.definition.template-expression.end',
    },
    {
      foreground: '#569CD6',
      token: 'punctuation.section.embedded',
    },
    {
      foreground: '#D4D4D4',
      token: 'meta.template.expression',
    },
    {
      foreground: '#9CDCFE',
      token: 'support.type.vendored.property-name',
    },
    {
      foreground: '#9CDCFE',
      token: 'support.type.property-name',
    },
    {
      foreground: '#9CDCFE',
      token: 'variable.css',
    },
    {
      foreground: '#9CDCFE',
      token: 'variable.scss',
    },
    {
      foreground: '#9CDCFE',
      token: 'variable.other.less',
    },
    {
      foreground: '#9CDCFE',
      token: 'source.coffee.embedded',
    },
    {
      foreground: '#569CD6',
      token: 'keyword',
    },
    {
      foreground: '#569CD6',
      token: 'keyword.control',
    },
    {
      foreground: '#D4D4D4',
      token: 'keyword.operator',
    },
    {
      foreground: '#569CD6',
      token: 'keyword.operator.new',
    },
    {
      foreground: '#569CD6',
      token: 'keyword.operator.expression',
    },
    {
      foreground: '#569CD6',
      token: 'keyword.operator.cast',
    },
    {
      foreground: '#569CD6',
      token: 'keyword.operator.sizeof',
    },
    {
      foreground: '#569CD6',
      token: 'keyword.operator.alignof',
    },
    {
      foreground: '#569CD6',
      token: 'keyword.operator.typeid',
    },
    {
      foreground: '#569CD6',
      token: 'keyword.operator.alignas',
    },
    {
      foreground: '#569CD6',
      token: 'keyword.operator.instanceof',
    },
    {
      foreground: '#569CD6',
      token: 'keyword.operator.logical.python',
    },
    {
      foreground: '#569CD6',
      token: 'keyword.operator.wordlike',
    },
    {
      foreground: '#B5CEA8',
      token: 'keyword.other.unit',
    },
    {
      foreground: '#569CD6',
      token: 'punctuation.section.embedded.begin.php',
    },
    {
      foreground: '#569CD6',
      token: 'punctuation.section.embedded.end.php',
    },
    {
      foreground: '#9CDCFE',
      token: 'support.function.git-rebase',
    },
    {
      foreground: '#B5CEA8',
      token: 'constant.sha.git-rebase',
    },
    {
      foreground: '#D4D4D4',
      token: 'storage.modifier.import.java',
    },
    {
      foreground: '#D4D4D4',
      token: 'variable.language.wildcard.java',
    },
    {
      foreground: '#D4D4D4',
      token: 'storage.modifier.package.java',
    },
    {
      foreground: '#569CD6',
      token: 'variable.language',
    },
    {
      foreground: '#DCDCAA',
      token: 'entity.name.function',
    },
    {
      foreground: '#DCDCAA',
      token: 'support.function',
    },
    {
      foreground: '#DCDCAA',
      token: 'support.constant.handlebars',
    },
    {
      foreground: '#DCDCAA',
      token: 'source.powershell variable.other.member',
    },
    {
      foreground: '#DCDCAA',
      token: 'entity.name.operator.custom-literal',
    },
    {
      foreground: '#4EC9B0',
      token: 'support.class',
    },
    {
      foreground: '#4EC9B0',
      token: 'support.type',
    },
    {
      foreground: '#4EC9B0',
      token: 'entity.name.type',
    },
    {
      foreground: '#4EC9B0',
      token: 'entity.name.namespace',
    },
    {
      foreground: '#4EC9B0',
      token: 'entity.other.attribute',
    },
    {
      foreground: '#4EC9B0',
      token: 'entity.name.scope-resolution',
    },
    {
      foreground: '#4EC9B0',
      token: 'entity.name.class',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.numeric.go',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.byte.go',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.boolean.go',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.string.go',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.uintptr.go',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.error.go',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.rune.go',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.cs',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.generic.cs',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.modifier.cs',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.variable.cs',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.annotation.java',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.generic.java',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.java',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.object.array.java',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.primitive.array.java',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.primitive.java',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.token.java',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.groovy',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.annotation.groovy',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.parameters.groovy',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.generic.groovy',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.object.array.groovy',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.primitive.array.groovy',
    },
    {
      foreground: '#4EC9B0',
      token: 'storage.type.primitive.groovy',
    },
    {
      foreground: '#4EC9B0',
      token: 'meta.type.cast.expr',
    },
    {
      foreground: '#4EC9B0',
      token: 'meta.type.new.expr',
    },
    {
      foreground: '#4EC9B0',
      token: 'support.constant.math',
    },
    {
      foreground: '#4EC9B0',
      token: 'support.constant.dom',
    },
    {
      foreground: '#4EC9B0',
      token: 'support.constant.json',
    },
    {
      foreground: '#4EC9B0',
      token: 'entity.other.inherited-class',
    },
    {
      foreground: '#C586C0',
      token: 'keyword.control',
    },
    {
      foreground: '#C586C0',
      token: 'source.cpp keyword.operator.new',
    },
    {
      foreground: '#C586C0',
      token: 'keyword.operator.delete',
    },
    {
      foreground: '#C586C0',
      token: 'keyword.other.using',
    },
    {
      foreground: '#C586C0',
      token: 'keyword.other.operator',
    },
    {
      foreground: '#C586C0',
      token: 'entity.name.operator',
    },
    {
      foreground: '#9CDCFE',
      token: 'variable',
    },
    {
      foreground: '#9CDCFE',
      token: 'meta.definition.variable.name',
    },
    {
      foreground: '#9CDCFE',
      token: 'support.variable',
    },
    {
      foreground: '#9CDCFE',
      token: 'entity.name.variable',
    },
    {
      foreground: '#9CDCFE',
      token: 'constant.other.placeholder',
    },
    {
      foreground: '#4FC1FF',
      token: 'variable.other.constant',
    },
    {
      foreground: '#4FC1FF',
      token: 'variable.other.enummember',
    },
    {
      foreground: '#9CDCFE',
      token: 'meta.object-literal.key',
    },
    {
      foreground: '#CE9178',
      token: 'support.constant.property-value',
    },
    {
      foreground: '#CE9178',
      token: 'support.constant.font-name',
    },
    {
      foreground: '#CE9178',
      token: 'support.constant.media-type',
    },
    {
      foreground: '#CE9178',
      token: 'support.constant.media',
    },
    {
      foreground: '#CE9178',
      token: 'constant.other.color.rgb-value',
    },
    {
      foreground: '#CE9178',
      token: 'constant.other.rgb-value',
    },
    {
      foreground: '#CE9178',
      token: 'support.constant.color',
    },
    {
      foreground: '#CE9178',
      token: 'punctuation.definition.group.regexp',
    },
    {
      foreground: '#CE9178',
      token: 'punctuation.definition.group.assertion.regexp',
    },
    {
      foreground: '#CE9178',
      token: 'punctuation.definition.character-class.regexp',
    },
    {
      foreground: '#CE9178',
      token: 'punctuation.character.set.begin.regexp',
    },
    {
      foreground: '#CE9178',
      token: 'punctuation.character.set.end.regexp',
    },
    {
      foreground: '#CE9178',
      token: 'keyword.operator.negation.regexp',
    },
    {
      foreground: '#CE9178',
      token: 'support.other.parenthesis.regexp',
    },
    {
      foreground: '#D16969',
      token: 'constant.character.character-class.regexp',
    },
    {
      foreground: '#D16969',
      token: 'constant.other.character-class.set.regexp',
    },
    {
      foreground: '#D16969',
      token: 'constant.other.character-class.regexp',
    },
    {
      foreground: '#D16969',
      token: 'constant.character.set.regexp',
    },
    {
      foreground: '#DCDCAA',
      token: 'keyword.operator.or.regexp',
    },
    {
      foreground: '#DCDCAA',
      token: 'keyword.control.anchor.regexp',
    },
    {
      foreground: '#D7BA7D',
      token: 'keyword.operator.quantifier.regexp',
    },
    {
      foreground: '#569CD6',
      token: 'constant.character',
    },
    {
      foreground: '#D7BA7D',
      token: 'constant.character.escape',
    },
    {
      foreground: '#C8C8C8',
      token: 'entity.name.label',
    },
    {
      foreground: '#6796E6',
      token: 'token.info-token',
    },
    {
      foreground: '#CD9731',
      token: 'token.warn-token',
    },
    {
      foreground: '#F44747',
      token: 'token.error-token',
    },
    {
      foreground: '#B267E6',
      token: 'token.debug-token',
    },
  ],
  encodedTokensColors: [],
};

export const lightTheme: monaco.editor.IStandaloneThemeData = {
  "inherit": false,
    "base": "vs",
    "colors": {
    "activityBar.activeBorder": "#f9826c",
      "activityBar.background": "#ffffff",
      "activityBar.border": "#e1e4e8",
      "activityBar.foreground": "#2f363d",
      "activityBar.inactiveForeground": "#959da5",
      "activityBarBadge.background": "#2188ff",
      "activityBarBadge.foreground": "#ffffff",
      "badge.background": "#dbedff",
      "badge.foreground": "#005cc5",
      "breadcrumb.activeSelectionForeground": "#586069",
      "breadcrumb.focusForeground": "#2f363d",
      "breadcrumb.foreground": "#6a737d",
      "breadcrumbPicker.background": "#fafbfc",
      "button.background": "#159739",
      "button.foreground": "#ffffff",
      "button.hoverBackground": "#138934",
      "checkbox.background": "#fafbfc",
      "checkbox.border": "#d1d5da",
      "debugToolBar.background": "#ffffff",
      "descriptionForeground": "#6a737d",
      "diffEditor.insertedTextBackground": "#34d05822",
      "diffEditor.removedTextBackground": "#d73a4922",
      "dropdown.background": "#fafbfc",
      "dropdown.border": "#e1e4e8",
      "dropdown.foreground": "#2f363d",
      "dropdown.listBackground": "#ffffff",
      "editor.background": "#ffffff",
      "editor.findMatchBackground": "#ffdf5d",
      "editor.findMatchHighlightBackground": "#ffdf5d66",
      "editor.focusedStackFrameHighlightBackground": "#fff5b1",
      "editor.foldBackground": "#fafbfc",
      "editor.foreground": "#24292e",
      "editor.inactiveSelectionBackground": "#0366d611",
      "editor.lineHighlightBackground": "#f6f8fa",
      "editor.selectionBackground": "#0366d625",
      "editor.selectionHighlightBackground": "#34d05840",
      "editor.selectionHighlightBorder": "#34d05800",
      "editor.stackFrameHighlightBackground": "#fffbdd",
      "editor.wordHighlightBackground": "#34d05800",
      "editor.wordHighlightBorder": "#24943e99",
      "editor.wordHighlightStrongBackground": "#34d05800",
      "editor.wordHighlightStrongBorder": "#24943e50",
      "editorBracketMatch.background": "#34d05840",
      "editorBracketMatch.border": "#34d05800",
      "editorCursor.foreground": "#044289",
      "editorGroup.border": "#e1e4e8",
      "editorGroupHeader.tabsBackground": "#f6f8fa",
      "editorGroupHeader.tabsBorder": "#e1e4e8",
      "editorGutter.addedBackground": "#28a745",
      "editorGutter.deletedBackground": "#d73a49",
      "editorGutter.modifiedBackground": "#2188ff",
      "editorIndentGuide.activeBackground": "#d7dbe0",
      "editorIndentGuide.background": "#eff2f6",
      "editorLineNumber.activeForeground": "#24292e",
      "editorLineNumber.foreground": "#1b1f234d",
      "editorOverviewRuler.border": "#ffffff",
      "editorWhitespace.foreground": "#d1d5da",
      "editorWidget.background": "#f6f8fa",
      "errorForeground": "#cb2431",
      "focusBorder": "#2188ff",
      "foreground": "#444d56",
      "gitDecoration.addedResourceForeground": "#28a745",
      "gitDecoration.conflictingResourceForeground": "#e36209",
      "gitDecoration.deletedResourceForeground": "#d73a49",
      "gitDecoration.ignoredResourceForeground": "#959da5",
      "gitDecoration.modifiedResourceForeground": "#005cc5",
      "gitDecoration.submoduleResourceForeground": "#959da5",
      "gitDecoration.untrackedResourceForeground": "#28a745",
      "input.background": "#fafbfc",
      "input.border": "#e1e4e8",
      "input.foreground": "#2f363d",
      "input.placeholderForeground": "#959da5",
      "list.activeSelectionBackground": "#e2e5e9",
      "list.activeSelectionForeground": "#2f363d",
      "list.focusBackground": "#cce5ff",
      "list.hoverBackground": "#ebf0f4",
      "list.hoverForeground": "#2f363d",
      "list.inactiveFocusBackground": "#dbedff",
      "list.inactiveSelectionBackground": "#e8eaed",
      "list.inactiveSelectionForeground": "#2f363d",
      "notificationCenterHeader.background": "#e1e4e8",
      "notificationCenterHeader.foreground": "#6a737d",
      "notifications.background": "#fafbfc",
      "notifications.border": "#e1e4e8",
      "notifications.foreground": "#2f363d",
      "notificationsErrorIcon.foreground": "#d73a49",
      "notificationsInfoIcon.foreground": "#005cc5",
      "notificationsWarningIcon.foreground": "#e36209",
      "panel.background": "#f6f8fa",
      "panel.border": "#e1e4e8",
      "panelInput.border": "#e1e4e8",
      "panelTitle.activeBorder": "#f9826c",
      "panelTitle.activeForeground": "#2f363d",
      "panelTitle.inactiveForeground": "#6a737d",
      "pickerGroup.border": "#e1e4e8",
      "pickerGroup.foreground": "#2f363d",
      "progressBar.background": "#2188ff",
      "quickInput.background": "#fafbfc",
      "quickInput.foreground": "#2f363d",
      "scrollbar.shadow": "#6a737d33",
      "scrollbarSlider.activeBackground": "#959da588",
      "scrollbarSlider.background": "#959da533",
      "scrollbarSlider.hoverBackground": "#959da544",
      "settings.headerForeground": "#2f363d",
      "settings.modifiedItemIndicator": "#2188ff",
      "sideBar.background": "#f6f8fa",
      "sideBar.border": "#e1e4e8",
      "sideBar.foreground": "#586069",
      "sideBarSectionHeader.background": "#f6f8fa",
      "sideBarSectionHeader.border": "#e1e4e8",
      "sideBarSectionHeader.foreground": "#2f363d",
      "sideBarTitle.foreground": "#2f363d",
      "statusBar.background": "#ffffff",
      "statusBar.border": "#e1e4e8",
      "statusBar.debuggingBackground": "#f9826c",
      "statusBar.debuggingForeground": "#ffffff",
      "statusBar.foreground": "#586069",
      "statusBar.noFolderBackground": "#ffffff",
      "statusBarItem.prominentBackground": "#e8eaed",
      "tab.activeBackground": "#ffffff",
      "tab.activeBorder": "#ffffff",
      "tab.activeBorderTop": "#f9826c",
      "tab.activeForeground": "#2f363d",
      "tab.border": "#e1e4e8",
      "tab.hoverBackground": "#ffffff",
      "tab.inactiveBackground": "#f6f8fa",
      "tab.inactiveForeground": "#6a737d",
      "tab.unfocusedActiveBorder": "#ffffff",
      "tab.unfocusedActiveBorderTop": "#e1e4e8",
      "tab.unfocusedHoverBackground": "#ffffff",
      "terminal.foreground": "#586069",
      "textBlockQuote.background": "#fafbfc",
      "textBlockQuote.border": "#e1e4e8",
      "textCodeBlock.background": "#f6f8fa",
      "textLink.activeForeground": "#005cc5",
      "textLink.foreground": "#0366d6",
      "textPreformat.foreground": "#586069",
      "textSeparator.foreground": "#d1d5da",

  },
  "rules": [
    { "foreground": "#6A737D", "token": "comment" },
    { "foreground": "#6A737D", "token": "punctuation.definition.comment" },
    { "foreground": "#6A737D", "token": "string.comment" },
    { "foreground": "#005CC5", "token": "constant" },
    { "foreground": "#005CC5", "token": "entity.name.constant" },
    { "foreground": "#005CC5", "token": "variable.other.constant" },
    { "foreground": "#005CC5", "token": "variable.language" },
    { "foreground": "#6F42C1", "token": "entity" },
    { "foreground": "#6F42C1", "token": "entity.name" },
    { "foreground": "#24292E", "token": "variable.parameter.function" },
    { "foreground": "#22863A", "token": "entity.name.tag" },
    { "foreground": "#D73A49", "token": "keyword" },
    { "foreground": "#D73A49", "token": "storage" },
    { "foreground": "#D73A49", "token": "storage.type" },
    { "foreground": "#24292E", "token": "storage.modifier.package" },
    { "foreground": "#24292E", "token": "storage.modifier.import" },
    { "foreground": "#24292E", "token": "storage.type.java" },
    { "foreground": "#032F62", "token": "string" },
    { "foreground": "#032F62", "token": "punctuation.definition.string" },
    {
      "foreground": "#032F62",
      "token": "string punctuation.section.embedded source"
    },
    { "foreground": "#005CC5", "token": "support" },
    { "foreground": "#005CC5", "token": "meta.property-name" },
    { "foreground": "#E36209", "token": "variable" },
    { "foreground": "#24292E", "token": "variable.other" },
    {
      "foreground": "#B31D28",
      "fontStyle": "italic",
      "token": "invalid.broken"
    },
    {
      "foreground": "#B31D28",
      "fontStyle": "italic",
      "token": "invalid.deprecated"
    },
    {
      "foreground": "#B31D28",
      "fontStyle": "italic",
      "token": "invalid.illegal"
    },
    {
      "foreground": "#B31D28",
      "fontStyle": "italic",
      "token": "invalid.unimplemented"
    },
    {
      "foreground": "#FAFBFC",
      "background": "#D73A49",
      "fontStyle": "italic underline",
      "token": "carriage-return"
    },
    { "foreground": "#B31D28", "token": "message.error" },
    { "foreground": "#24292E", "token": "string source" },
    { "foreground": "#005CC5", "token": "string variable" },
    { "foreground": "#032F62", "token": "source.regexp" },
    { "foreground": "#032F62", "token": "string.regexp" },
    { "foreground": "#032F62", "token": "string.regexp.character-class" },
    {
      "foreground": "#032F62",
      "token": "string.regexp constant.character.escape"
    },
    {
      "foreground": "#032F62",
      "token": "string.regexp source.ruby.embedded"
    },
    {
      "foreground": "#032F62",
      "token": "string.regexp string.regexp.arbitrary-repitition"
    },
    {
      "foreground": "#22863A",
      "fontStyle": "bold",
      "token": "string.regexp constant.character.escape"
    },
    { "foreground": "#005CC5", "token": "support.constant" },
    { "foreground": "#005CC5", "token": "support.variable" },
    { "foreground": "#005CC5", "token": "meta.module-reference" },
    {
      "foreground": "#E36209",
      "token": "punctuation.definition.list.begin.markdown"
    },
    {
      "foreground": "#005CC5",
      "fontStyle": "bold",
      "token": "markup.heading"
    },
    {
      "foreground": "#005CC5",
      "fontStyle": "bold",
      "token": "markup.heading entity.name"
    },
    { "foreground": "#22863A", "token": "markup.quote" },
    {
      "foreground": "#24292E",
      "fontStyle": "italic",
      "token": "markup.italic"
    },
    { "foreground": "#24292E", "fontStyle": "bold", "token": "markup.bold" },
    { "foreground": "#005CC5", "token": "markup.raw" },
    {
      "foreground": "#B31D28",
      "background": "#FFEEF0",
      "token": "markup.deleted"
    },
    {
      "foreground": "#B31D28",
      "background": "#FFEEF0",
      "token": "meta.diff.header.from-file"
    },
    {
      "foreground": "#B31D28",
      "background": "#FFEEF0",
      "token": "punctuation.definition.deleted"
    },
    {
      "foreground": "#22863A",
      "background": "#F0FFF4",
      "token": "markup.inserted"
    },
    {
      "foreground": "#22863A",
      "background": "#F0FFF4",
      "token": "meta.diff.header.to-file"
    },
    {
      "foreground": "#22863A",
      "background": "#F0FFF4",
      "token": "punctuation.definition.inserted"
    },
    {
      "foreground": "#E36209",
      "background": "#FFEBDA",
      "token": "markup.changed"
    },
    {
      "foreground": "#E36209",
      "background": "#FFEBDA",
      "token": "punctuation.definition.changed"
    },
    {
      "foreground": "#F6F8FA",
      "background": "#005CC5",
      "token": "markup.ignored"
    },
    {
      "foreground": "#F6F8FA",
      "background": "#005CC5",
      "token": "markup.untracked"
    },
    {
      "foreground": "#6F42C1",
      "fontStyle": "bold",
      "token": "meta.diff.range"
    },
    { "foreground": "#005CC5", "token": "meta.diff.header" },
    {
      "foreground": "#005CC5",
      "fontStyle": "bold",
      "token": "meta.separator"
    },
    { "foreground": "#005CC5", "token": "meta.output" },
    { "foreground": "#586069", "token": "brackethighlighter.tag" },
    { "foreground": "#586069", "token": "brackethighlighter.curly" },
    { "foreground": "#586069", "token": "brackethighlighter.round" },
    { "foreground": "#586069", "token": "brackethighlighter.square" },
    { "foreground": "#586069", "token": "brackethighlighter.angle" },
    { "foreground": "#586069", "token": "brackethighlighter.quote" },
    { "foreground": "#B31D28", "token": "brackethighlighter.unmatched" },
    {
      "foreground": "#032F62",
      "fontStyle": "underline",
      "token": "constant.other.reference.link"
    },
    {
      "foreground": "#032F62",
      "fontStyle": "underline",
      "token": "string.other.link"
    },
    { "foreground": "#316BCD", "token": "token.info-token" },
    { "foreground": "#CD9731", "token": "token.warn-token" },
    { "foreground": "#CD3131", "token": "token.error-token" },
    { "foreground": "#800080", "token": "token.debug-token" }
  ],
    "encodedTokensColors": []
};