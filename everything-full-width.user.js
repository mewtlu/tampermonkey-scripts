// ==UserScript==
// @name         Everything Full Width
// @namespace    mewt.eu
// @version      0.1
// @description  Makes everything full width
// @author       You
// @include      *://github.com/*
// @include      *://gitlab.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Github
    let lgContainers = document.querySelector('.container-lg');
    if (lgContainers) {
        lgContainers.style.width = '100%';
        lgContainers.style['max-width'] = '100%';
    }

    // Gitlab
    let limitedContainers = document.getElementsByClassName('container-limited');
    for (let e = 0; e < limitedContainers.length; e++) {
        limitedContainers[e].style['max-width'] = '100%'
    }
})();
