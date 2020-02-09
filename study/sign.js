// THIS FILE IS UNDER MIT LICENSE.

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
