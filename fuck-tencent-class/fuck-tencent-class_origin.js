// THIS FILE IS UNDER MIT LICENSE.

// ==UserScript==
// @name        fuck-tencent-class_origin
// @namespace   Violentmonkey Scripts
// @match       *://*.ke.qq.com/*
// @grant       none
// @version     1.0
// @author      -
// @description 2020/2/9 上午10:28:50
// ==/UserScript==

// Spoof Tencent Class's shit detection!

Object.defineProperty(document, 'visibilityState', {
    configurable: false,
    writable: false,
    value: 'visible',
});

Object.defineProperty(document, 'hidden', {
    configurable: false,
    writable: false,
    value: false,
});

window.addEventListener('visibilitychange', function handle(e) {
    e.stopImmediatePropagation();
    e.preventDefault();
}, true);

// Force include jQuery.
var jQscript = document.createElement('script');
jQscript.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
jQscript.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(jQscript);


function goSign() {
    try {
        $('.s-btn.s-btn--primary.s-btn--m').click();
    } catch(e) {
        console.log(e)
    }
}

interval = setInterval(function() { goSign(); }, 12000);
