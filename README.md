# TYPO3 CMS Extension "tabmoduleclick"
Open modules in TYPO3 backend in a new browser tab (middle mouse button) and get directed to the intended submodule.

If you are like me, you are constantly opening new web pages with the middle mouse button in your browser.
But if you are trying to the middle mouse button to open a new submodule in the TYPO3 Backend (like for instance the Page, List, Info modules), the new tab will not have the submodule open as you maybe expected, but will just show you the configured home page of the TYPO3 backend.
This is because clicks in the module menu are only handled via javascript and using the middle mouse button is not intended by design.

This extension fixes this behaviour and makes working with the TYPO3 backend for middle mouse button users a lot more comfortable.

@TODO:
- setTimeout() is an ugly solution
- ext_icon
- test in different environments
- packagist
- ter