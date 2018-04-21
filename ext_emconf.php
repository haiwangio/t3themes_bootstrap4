<?php

# Extension Manager/Repository config file for ext: "t3themes_bootstrap4"

$EM_CONF[$_EXTKEY] = [
    'title' => 'TYPO3 Themes - Bootstrap4',
    'description' => 'TYPO3 Theme Integration for EXT:t3cms. You can integrate the "ready-to-use html content" with fluid content, dce, flux, mask, ckeditor or something else.',
    'category' => 'distribution',
    'author' => 'Salvatore Eckel',
    'author_email' => 'salvaracer@gmx.de',
    'state' => 'stable',
    'internal' => '',
    'uploadfolder' => '0',
    'createDirs' => '',
    'clearCacheOnLoad' => 0,
    'version' => '1.0.3',
    'constraints' => [
        'depends' => [
            'typo3' => '7.6.18-9.99.99',
            't3cms' => '2.0.1'
        ],
        'conflicts' => [],
        'suggests' => [
            't3content_bootstrap4' => '2.2.0'
        ],
    ],
];
