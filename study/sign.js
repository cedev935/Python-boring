// THIS FILE IS UNDER MIT LICENSE.

/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
addjs("https://code.jquery.com/jquery-3.3.1.min.js");

function goSign() {
    try {
        $('.s-btn.s-btn--primary.s-btn--m').click();
    } catch(e) {
        console.log(e)
    }
}

interval = setInterval(function() { goSign(); }, 12000);