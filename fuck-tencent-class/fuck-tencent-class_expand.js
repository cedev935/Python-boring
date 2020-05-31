// ==UserScript==
// @name        fuck-tencent-class_expand
// @namespace   Violentmonkey Scripts
// @match       *://*.ke.qq.com/*
// @grant       none
// @version     1.0
// @author      -
// @description 2020/2/9 上午10:28:50
// ==/UserScript==

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

var random_script = document.createElement('script');
random_script.src = 'https://randojs.com/1.0.0.js';
random_script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(random_script);

var hotkey_script = document.createElement('script');
hotkey_script.src = 'https://unpkg.com/hotkeys-js@3.7.6/dist/hotkeys.js';
hotkey_script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(hotkey_script);

var hotkey = false;

function fn (){
	hotkeys('ctrl+z', function(){hotkey = true;alert("已经暂时关闭自动选择")});
	hotkeys('ctrl+x', function(){hotkey = false;alert("已经重新开启自动选择")});
	hotkeys('ctrl+b', function(){if (hotkey == false){alert("当前自动选择模式已开启")} else if (hotkey == true) {alert("当前自动选择模式已关闭")} else {alert("自动选择脚本出错！")}});
}

var myTimeoutId = setTimeout(fn, 5000);

function goSign() {
    try {
        $('.s-btn.s-btn--primary.s-btn--m').click();
        setTimeout(function () {
          var focus = document.hasFocus();
          if (focus == false || hotkey == false) {
            var datiElements = document.getElementsByClassName("head-text");
            for (var i = 0; i < datiElements.length; i++) {
	            if (datiElements[i].innerHTML.indexOf("单选题") !== -1) {
		            var number = document.getElementsByClassName("s-f-rc-item").length;
		            var random = Math.floor(Math.random()*number);
		            document.getElementsByClassName("s-f-rc-item")[random].click();
	            }
	            else if(datiElements[i].innerHTML.indexOf("多选题") !== -1) {
		            var number = document.getElementsByClassName("s-f-rc-item").length;
		            var random = randoSequence(0,number-1);
		            var random_1 = random[0];
		            var random_2 = random[1];
		            document.getElementsByClassName("s-f-rc-item")[random_1].click();
		            document.getElementsByClassName("s-f-rc-item")[random_2].click();
	            }
	            else {
		            $('.s-f-rc-item').click();
	            }
            }
          }
        },1000)
    } catch(e) {
        console.log(e)
    }
}

interval = setInterval(function() { goSign(); }, 12000);
