// ==UserScript==
// @name         remove youtube shorts
// @namespace    http://tampermonkey.net/
// @version      2025-07-03
// @description  removes the short section from youtube
// @author       Schmari
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function remove_short_section() {
        const elements = document.querySelectorAll('div#dismissible.style-scope.ytd-rich-shelf-renderer');
        elements.forEach(element => { element.remove(); });
    }

    remove_short_section();

    const observer = new MutationObserver(remove_short_section);
    observer.observe(document.body, { childList: true, subtree: true });
})();
