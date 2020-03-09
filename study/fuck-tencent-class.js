// THIS FILE IS UNDER MIT LICENSE.

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
// WARNING: Automatic selection of answer card options
//        $('.s-f-rc-item').click();
//        setTimeout(function () {
//            $('.s-btn.s-btn--primary.s-btn--m').click();
//        },2000)
        $('.s-btn.s-btn--primary.s-btn--m').click();
    } catch(e) {
        console.log(e)
    }
}

interval = setInterval(function() { goSign(); }, 12000);
