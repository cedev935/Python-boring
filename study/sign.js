// THIS FILE IS UNDER MIT LICENSE.


// -----!!!WARNING!!!-----
// 'Tencent Class' **CAN NOW DETECT** WHEATHER THE STUDENT'S WEB BROWSER IS AT THE CLASS TAB!
// USE AT YOUR OWN RISK!

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
