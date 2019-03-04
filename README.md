# TYPO3 CMS Extension "tabmoduleclick"
Open modules in TYPO3 backend in a new browser tab (middle mouse button) and get directed to the intended submodule.

[![Latest Stable Version](https://poser.pugx.org/christianessl/tabmoduleclick/v/stable)](https://packagist.org/packages/christianessl/tabmoduleclick)
[![Total Downloads](https://poser.pugx.org/christianessl/tabmoduleclick/downloads)](https://packagist.org/packages/christianessl/tabmoduleclick)
[![Latest Unstable Version](https://poser.pugx.org/christianessl/tabmoduleclick/v/unstable)](https://packagist.org/packages/christianessl/tabmoduleclick)
[![License](https://poser.pugx.org/christianessl/tabmoduleclick/license)](https://packagist.org/packages/christianessl/tabmoduleclick)

## What does it do?

If you are like me, you are constantly opening new web pages with the middle mouse button in your browser.
But if you are trying to the middle mouse button to open a new submodule in the TYPO3 Backend (like for instance the Page, List, Info modules), the new tab will not have the submodule open as you maybe expected, but will just show you the configured home page of the TYPO3 backend.
This is because clicks in the module menu are only handled via javascript and using the middle mouse button is not intended by design.

This extension fixes this behaviour and makes working with the TYPO3 backend for middle mouse button users a lot more comfortable.

## Requirements

Currently supports TYPO3 8.7 and 9.5 LTS

## Installation

### Installation with composer

`composer require christianessl/tabmoduleclick`. 
Install the extension in the Extension module.

Clear caches and reload the backend for all changes to take effect.

### Installation with TER

Open the TYPO3 Extension Manager, search for `tabmoduleclick` and install the extension.

Clear caches and reload the backend for all changes to take effect.
