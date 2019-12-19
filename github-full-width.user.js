// ==UserScript==
// @name         Github Full Width
// @namespace    mewt.eu
// @version      0.1
// @description  Makes Github full width
// @author       You
// @match        *://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector('.container-lg').style.width = '100%';
    document.querySelector('.container-lg').style['max-width'] = '100%';
})();
