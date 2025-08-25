/* eslint-disable @typescript-eslint/naming-convention */
export interface JavaConfiguration {
'java-startup': {
    'java.home': string | null;
    'java.jdt.ls.java.home': string | null;
    'java.jdt.ls.vmargs': string | null;
    'java.server.launchMode': "Standard" | "LightWeight" | "Hybrid";
    'java.configuration.workspaceCacheLimit': null | number;
    'java.sharedIndexes.enabled': "auto" | "on" | "off";
    'java.sharedIndexes.location': string;
    'java.jdt.ls.lombokSupport.enabled': boolean;
    'java.jdt.ls.protobufSupport.enabled': boolean;
    'java.jdt.ls.androidSupport.enabled': "auto" | "on" | "off";
    'java.jdt.ls.javac.enabled': "on" | "off";
    'java.jdt.ls.appcds.enabled': "auto" | "on" | "off";
    'java.trace.server': "off" | "messages" | "verbose";
    'redhat.telemetry.enabled': boolean;
};
'java-projectimport': {
    'java.import.projectSelection': "manual" | "automatic";
    'java.configuration.updateBuildConfiguration': "disabled" | "interactive" | "automatic";
    'java.import.exclusions': any[];
    'java.project.resourceFilters': string[];
    'java.configuration.checkProjectSettingsExclusions': boolean;
    'java.import.generatesMetadataFilesAtProjectRoot': boolean;
    'java.project.importOnFirstTimeStartup': "disabled" | "interactive" | "automatic";
    'java.project.importHint': boolean;
    'java.showBuildStatusOnStart.enabled': any;
    'java.project.encoding': any;
};
'java-unmanagedfolder': {
    'java.project.sourcePaths': string[];
    'java.project.outputPath': string | null;
    'java.project.referencedLibraries': any[] | { include: any[]; exclude: any[]; sources: Record<string, any> };
};
'java-maven': {
    'java.import.maven.enabled': boolean;
    'java.import.maven.offline.enabled': boolean;
    'java.import.maven.disableTestClasspathFlag': boolean;
    'java.maven.downloadSources': boolean;
    'java.maven.updateSnapshots': boolean;
    'java.configuration.maven.userSettings': string;
    'java.configuration.maven.globalSettings': string;
    'java.configuration.maven.notCoveredPluginExecutionSeverity': "ignore" | "warning" | "error";
    'java.configuration.maven.defaultMojoExecutionAction': "ignore" | "warn" | "error" | "execute";
    'java.configuration.maven.lifecycleMappings': string;
};
'java-gradle': {
    'java.import.gradle.enabled': boolean;
    'java.import.gradle.wrapper.enabled': boolean;
    'java.import.gradle.version': string;
    'java.import.gradle.home': string;
    'java.import.gradle.java.home': string;
    'java.import.gradle.user.home': string;
    'java.import.gradle.offline.enabled': boolean;
    'java.import.gradle.arguments': string;
    'java.import.gradle.jvmArguments': string;
    'java.import.gradle.annotationProcessing.enabled': boolean;
    'java.imports.gradle.wrapper.checksums': { sha256: string; allowed: boolean }[];
};
'java-build': {
    'java.autobuild.enabled': boolean;
    'java.maxConcurrentBuilds': number;
    'java.settings.url': string;
    'java.compile.nullAnalysis.nonnull': any[];
    'java.compile.nullAnalysis.nullable': any[];
    'java.compile.nullAnalysis.nonnullbydefault': any[];
    'java.compile.nullAnalysis.mode': "disabled" | "interactive" | "automatic";
    'java.errors.incompleteClasspath.severity': "ignore" | "info" | "warning" | "error";
};
'java-jdks': {
    'java.configuration.runtimes': { name: "J2SE-1.5" | "JavaSE-1.6" | "JavaSE-1.7" | "JavaSE-1.8" | "JavaSE-9" | "JavaSE-10" | "JavaSE-11" | "JavaSE-12" | "JavaSE-13" | "JavaSE-14" | "JavaSE-15" | "JavaSE-16" | "JavaSE-17" | "JavaSE-18" | "JavaSE-19" | "JavaSE-20" | "JavaSE-21" | "JavaSE-22" | "JavaSE-23" | "JavaSE-24"; path: string; sources: string; javadoc: string; default: boolean }[];
    'java.configuration.detectJdksAtStart': boolean;
};
'java-formatting': {
    'java.format.enabled': boolean;
    'java.format.settings.url': string;
    'java.format.settings.profile': string;
    'java.format.comments.enabled': boolean;
    'java.format.onType.enabled': boolean;
};
'java-codecompletion': {
    'java.completion.enabled': boolean;
    'java.completion.engine': "ecj" | "dom";
    'java.completion.postfix.enabled': boolean;
    'java.completion.chain.enabled': boolean;
    'java.completion.favoriteStaticMembers': any[];
    'java.completion.filteredTypes': any[];
    'java.completion.guessMethodArguments': boolean | "auto" | "off" | "insertParameterNames" | "insertBestGuessedArguments";
    'java.completion.matchCase': "firstLetter" | "off";
    'java.completion.importOrder': any[];
    'java.completion.lazyResolveTextEdit.enabled': boolean;
    'java.completion.maxResults': number;
    'java.signatureHelp.enabled': boolean;
    'java.signatureHelp.description.enabled': boolean;
    'java.completion.collapseCompletionItems': boolean;
};
'java-codegeneration': {
    'java.templates.fileHeader': any[];
    'java.templates.typeComment': any[];
    'java.codeGeneration.insertionLocation': "afterCursor" | "beforeCursor" | "lastMember";
    'java.codeGeneration.addFinalForNewDeclaration': "none" | "fields" | "variables" | "all";
    'java.codeGeneration.hashCodeEquals.useJava7Objects': boolean;
    'java.codeGeneration.hashCodeEquals.useInstanceof': boolean;
    'java.codeGeneration.useBlocks': boolean;
    'java.codeGeneration.generateComments': boolean;
    'java.codeGeneration.toString.template': string;
    'java.codeGeneration.toString.codeStyle': "STRING_CONCATENATION" | "STRING_BUILDER" | "STRING_BUILDER_CHAINED" | "STRING_FORMAT";
    'java.codeGeneration.toString.skipNullValues': boolean;
    'java.codeGeneration.toString.listArrayContents': boolean;
    'java.codeGeneration.toString.limitElements': number;
    'java.edit.smartSemicolonDetection.enabled': boolean;
};
'java-codeaction': {
    'java.cleanup.actions': "qualifyMembers" | "qualifyStaticMembers" | "addOverride" | "addDeprecated" | "stringConcatToTextBlock" | "invertEquals" | "addFinalModifier" | "instanceofPatternMatch" | "lambdaExpressionFromAnonymousClass" | "lambdaExpression" | "switchExpression" | "tryWithResource" | "renameFileToType" | "organizeImports" | "renameUnusedLocalVariables" | "useSwitchForInstanceofPattern" | "redundantComparisonStatement" | "redundantFallingThroughBlockEnd" | "redundantIfCondition" | "redundantModifiers" | "redundantSuperCall"[];
    'java.cleanup.actionsOnSave': "qualifyMembers" | "qualifyStaticMembers" | "addOverride" | "addDeprecated" | "stringConcatToTextBlock" | "invertEquals" | "addFinalModifier" | "instanceofPatternMatch" | "lambdaExpressionFromAnonymousClass" | "lambdaExpression" | "switchExpression" | "tryWithResource"[];
    'java.saveActions.cleanup': boolean;
    'java.saveActions.organizeImports': boolean;
    'java.sources.organizeImports.starThreshold': number;
    'java.sources.organizeImports.staticStarThreshold': number;
    'java.quickfix.showAt': "line" | "problem";
    'java.codeAction.sortMembers.avoidVolatileChanges': boolean;
    'java.refactoring.extract.interface.replace': boolean;
};
'java-codenagivation': {
    'java.referencesCodeLens.enabled': boolean;
    'java.implementationCodeLens': "none" | "types" | "methods" | "all";
    'java.references.includeAccessors': boolean;
    'java.references.includeDeclarations': boolean;
    'java.references.includeDecompiledSources': boolean;
    'java.symbols.includeSourceMethodDeclarations': boolean;
    'java.typeHierarchy.lazyLoad': boolean;
    'java.inlayHints.parameterNames.enabled': "none" | "literals" | "all";
    'java.inlayHints.parameterNames.exclusions': string[];
    'java.search.scope': "all" | "main";
};
'java-others': {
    'java.eclipse.downloadSources': boolean;
    'java.contentProvider.preferred': string;
    'java.foldingRange.enabled': boolean;
    'java.selectionRange.enabled': boolean;
    'java.edit.validateAllOpenBuffersOnChanges': boolean;
    'java.diagnostic.filter': string[];
    'java.editor.reloadChangedSources': "ask" | "auto" | "manual";
};
}

const foo: JavaConfiguration = {
} as JavaConfiguration;