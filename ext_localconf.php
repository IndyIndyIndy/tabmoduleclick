<?php

defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function ($extKey) {
        $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['typo3/backend.php']['constructPostProcess'][] =
            \ChristianEssl\Tabmoduleclick\Hooks\BackendControllerHook::class . '->addJavaScript';
    },
    $_EXTKEY
);