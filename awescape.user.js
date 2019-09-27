// ==UserScript==
// @name         AWS Menu Keybind
// @namespace    mewt
// @version      0.1
// @description  Allows toggling the AWS web interface menu with the escape key.
// @author       Luke Roberts <luke@mewt.eu>
// @match        https://console.aws.amazon.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(event) {
       if (event.key === 'Escape') {
           let menu = document.querySelector('#servicesMenuContent');
           if ('block' === menu.style.display) {
               menu.style.display = 'none';
               return;
           }
           menu.style.display = 'block';
           document.querySelector('#awsc-services-search-autocomplete').focus()
       }
    });
})();
