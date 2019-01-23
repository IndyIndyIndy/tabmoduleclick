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

/**
 * Goes through all module links and replaces the '#' in href with the actual link + an extra parameter "tx_tabmoduleclick"
 * That way we can avoid having to open new tabs via javascript
 */
define(["require", "exports", "jquery"], function(e, t, $) {
    "use strict";

    var TabModuleClick = {

    };

    TabModuleClick.init = function() {
        var self = this;

        $('.modulemenu-item-link').each(function () {
           var href = $(this).data('link');
           href += '&tx_tabmoduleclick=1'
           $(this).attr('href', href);
        });
    };

    return TabModuleClick;
});