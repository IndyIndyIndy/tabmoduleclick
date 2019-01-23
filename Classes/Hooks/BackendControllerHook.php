<?php
namespace ChristianEssl\Tabmoduleclick\Hooks;

/***
 *
 * This file is part of the "TabModuleClick" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 *  (c) 2019 Christian Eßl <indy.essl@gmail.com>, https://christianessl.at
 *
 ***/

use TYPO3\CMS\Backend\Controller\BackendController;
use TYPO3\CMS\Core\Page\PageRenderer;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Utility\DebuggerUtility;

/**
 * Adds our required javascript to the backend
 */
class BackendControllerHook
{
    /**
     * @param array $hookConfiguration
     * @param BackendController $parent
     */
    public function addJavaScript(array $hookConfiguration, BackendController $parent) : void
    {
        $pageRenderer = GeneralUtility::makeInstance(PageRenderer::class);
        $pageRenderer->loadRequireJsModule('TYPO3/CMS/Tabmoduleclick/TabModuleClick', 'function(TabModuleClick) {
			TabModuleClick.init();
		}');
    }
}