<?php
defined('TYPO3_MODE') || die();

$extensionKey = 't3themes_bootstrap4';

/***************
 * Register PageTS
 */

// BackendLayouts
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    $extensionKey,
    'Configuration/TSconfig/Mod/WebLayout/BackendLayouts.txt',
    'T3themes Bootstrap 4 Theme for EXT:t3cms - Backend Layouts'
);

// Customize RTE
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    $extensionKey,
    'Configuration/TSconfig/RTE.txt',
    'T3themes Bootstrap 4 Theme for EXT:t3cms - CKEditor Configuration'
);
