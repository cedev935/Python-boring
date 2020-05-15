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

// If you want to choose the answer randomly, remove "//".

// Load randojs to choice answer randomly.

//var random_script = document.createElement('script');
//random_script.src = 'https://randojs.com/1.0.0.js';
//random_script.type = 'text/javascript';
//document.getElementsByTagName('head')[0].appendChild(random_script);

function goSign() {
    try {
        $('.s-btn.s-btn--primary.s-btn--m').click();
// If you'd like to use auto choice answer function, remove "//".

// WARNING: WILL CHOICE ANSWER **RANDOMLY** WHEN TEACHER POST AN ANSWER CARD.
//        setTimeout(function () {
//            var datiElements = document.getElementsByClassName("head-text");
//            for(var e of datiElements){if(e.innerHTML.indexOf("单选题") !== -1){ // Thanks to @xianfei
//	            var number = document.getElementsByClassName("s-f-rc-item").length
//	            var random = Math.floor(Math.random()*number);
//	            document.getElementsByClassName("s-f-rc-item")[random].click();
//	            }
//            }
//            for(var e of datiElements){if(e.innerHTML.indexOf("多选题") !== -1){
//	            var number = document.getElementsByClassName("s-f-rc-item").length
//	            var random = randoSequence(0,number);
//	            var random_1 = random[0]
//	            var random_2 = random[1]
//	            document.getElementsByClassName("s-f-rc-item")[random_1].click();
//	            document.getElementsByClassName("s-f-rc-item")[random_2].click();
//	            }
//            }
//        },1000)
    } catch(e) {
        console.log(e)
    }
}

interval = setInterval(function() { goSign(); }, 12000);
