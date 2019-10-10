// ==UserScript==
// @name         ShitLab
// @namespace    mewt.eu
// @version      0.1
// @description  Remove stupid inner container width on Gitlab
// @author       Luke Roberts <luke@mewt.eu>
// @match        *gitlab*.*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let $ = $ || undefined;
    if (!$) {
        return console.error('Couldn\'t find jQuery, exiting.');
    }

    $('.container-limited, .detail-page-description').css('max-width', 'none')
})();
