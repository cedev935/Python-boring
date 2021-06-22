// ==UserScript==
// @name         fix-youtube-rollscrollbar
// @version      0.1
// @description  fix youtube rollscrollbar when fullscreen
// @author       cprn (modify by redapple0204)
// @match        https://*.youtube.com/*
// @match        http://*.youtube.com/*
// ==/UserScript==

var css = document.createElement("style");
css.innerHTML="ytd-app { overflow: overlay  !important; }";
document.head.appendChild(css);
