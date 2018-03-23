#<INCLUDE_TYPOSCRIPT: source="DIR:EXT:t3themes_bootstrap4/Configuration/TypoScript/Setup/" extensions="ts,txt,typoscript">

#### PAGE
page = PAGE
page {
    typeNum = 0
    #shortcutIcon = {$website.shortcutIcon}
    10 = FLUIDTEMPLATE
    10 {
        templateName = TEXT
        templateName.stdWrap.cObject = CASE
        templateName.stdWrap.cObject {
            key.data = pagelayout

            pagets__bootstrap4clean = TEXT
            pagets__bootstrap4clean.value = Default

            default = TEXT
            default.value = Default
        }

        templateRootPaths.0 = EXT:t3themes_bootstrap4/Resources/Private/Templates/Page/
        partialRootPaths.0 = EXT:t3themes_bootstrap4/Resources/Private/Partials/Page/
        layoutRootPaths.0 = EXT:t3themes_bootstrap4/Resources/Private/Layouts/Page/

        ### DATA PREPROCESSING
        dataProcessing {
            10 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
            10 {
                levels = 2
                includeSpacer = 1
                as = mainnavigation
            }
            20 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
            20 {
                entryLevel = 1
                levels = 2
                expandAll = 0
                includeSpacer = 1
                as = subnavigation
            }
        }

        ### VARIABLES
        variables {
            pageTitle = TEXT
            pageTitle.data = page:title
            rootPage = TEXT
            rootPage.data = leveluid:0
        }
    }
    meta {
        viewport = width=device-width, initial-scale=1, shrink-to-fit=no
        keywords.data = DB:pages:1:keywords 
        keywords.override.field = keywords 
        description.data = DB:pages:1:description 
        description.override.field = description 
        abstract.data = DB:pages:1:abstract 
        abstract.override.field = abstract 
        author.data = DB:pages:1:author 
        author.override.field = author
        web_author.data = DB:pages:1:author 
        web_author.override.field = author
    }

    #includeCSSLibs {}
    includeCSS {
        bootstrap = EXT:t3themes_bootstrap4/Resources/Public/vendor/bootstrap/css/bootstrap.min.css
        fontawesome = EXT:t3themes_bootstrap4/Resources/Public/vendor/font-awesome/css/font-awesome.min.css
        simplelineicons = EXT:t3themes_bootstrap4/Resources/Public/vendor/simple-line-icons/css/simple-line-icons.css
        theme_landingpage = EXT:t3themes_bootstrap4/Resources/Public/css/landing-page.min.css
        theme_styles = EXT:t3themes_bootstrap4/Resources/Public/css/styles.css
    }
    #includeJSLibs {}
    includeJSFooterlibs {
        jquery = EXT:t3themes_bootstrap4/Resources/Public/vendor/jquery/jquery.min.js
        jquery.forceOnTop = 1
        bootstrap_bundle = EXT:t3themes_bootstrap4/Resources/Public/vendor/bootstrap/js/bootstrap.bundle.min.js
        init_js = EXT:t3themes_bootstrap4/Resources/Public/js/init.js
    }
    #jsFooterInline {}
    headerData {
		12 = TEXT
		12.value = <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">
    }
}

[userFunc = TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('t3cms')]
page.10.dataProcessing.30 = SalvatoreEckel\T3cms\DataProcessing\T3themesConfProcessor
page.10.dataProcessing.30.fieldName = t3themes_conf
page.10.dataProcessing.30.as = t3themesConf
page.10.dataProcessing.30.rootpageId = TEXT
page.10.dataProcessing.30.rootpageId {
    insertData = 1
    data = leveluid : 0
}
[global]
