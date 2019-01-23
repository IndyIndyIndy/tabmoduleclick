<?php

/***************************************************************
 * Extension Manager/Repository config file for ext: "tabmoduleclick"
 ***************************************************************/

$EM_CONF[$_EXTKEY] = [
    'title' => 'Tabmoduleclick',
    'description' => 'Open modules in TYPO3 backend in a new browser tab (middle mouse button) and get directed to the intended submodule.',
    'category' => 'misc',
    'author' => 'Christian Eßl',
    'author_email' => 'indy.essl@gmail.com',
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 0,
    'version' => '1.0.1',
    'constraints' => [
        'depends' => [
            'typo3' => '8.7.0-9.5.99',
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
];
