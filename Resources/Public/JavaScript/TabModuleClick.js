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
        key: 'tx_tabmoduleclick_openmodule'
    };

    /**
     * Initialize the scripts
     */
    TabModuleClick.init = function () {
        var self = this;
        self.placeURLParameters();
        $(document).ready(function () {
            self.handleSubModuleClick();
        });
    };

    /**
     * Replace the '#' url parameters of the module links with an actual link + a get param with the submodule id
     */
    TabModuleClick.placeURLParameters = function () {
        var self = this;

        $('.modulemenu-item').each(function () {
            var id = $(this).attr('id');
            var href = self.extendModuleMenuURL(document.location.href, id);
            $(this).find('>a').attr('href', href);
        });
    };

    /**
     * Extend a single url with a get param with the submodule id
     *
     * @param {string} url
     * @param {string} id
     * @return string
     */
    TabModuleClick.extendModuleMenuURL = function (url, id) {
        var self = this;
        var urlParts = self.getURLParts(url);

        var i = 0;
        url = self.getBaseURL(url);
        for (var key in urlParts) {
            var value = urlParts[key];
            if (key !== self.key) {
                if (i === 0) {
                    url += '?'+key+'='+value;
                } else {
                    url += '&'+key+'='+value;
                }
                i++;
            }
        }

        url += '&'+self.key+'='+encodeURIComponent(id);
        return url;
    };

    /**
     * Check if the called url has the submodule get parameter - if yes, open the submodule
     */
    TabModuleClick.handleSubModuleClick = function () {
        var self = this;
        var urlParts = self.getURLParts(document.location.href);

        for (var key in urlParts) {
            var value = urlParts[key];
            if (key === self.key) {
                self.openSubModule(value);
                break;
            }
        }
    };

    /**
     * Trigger a submodule click
     *
     * @param {string} id
     */
    TabModuleClick.openSubModule = function (id) {
        setTimeout(function () {
            $('#'+id).trigger('click');
        }, 500);
    };

    /**
     * Get the baseurl of the backend
     *
     * @param {string} url
     * @return string
     */
    TabModuleClick.getBaseURL = function (url) {
        return url.split('?')[0];
    };

    /**
     * Get the url parameters as an key/value object
     *
     * @param {string} url
     * @return object
     */
    TabModuleClick.getURLParts = function (url) {
        var parameters = url.slice(url.indexOf('?') + 1).split('&');
        var urlParts = {};

        parameters.map(parameter => {
            var [key, value] = parameter.split('=');
            urlParts[key] = value;
        });

        return urlParts;
    };

    return TabModuleClick;
});