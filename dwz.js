// 判断是否在移动端访问
function isMobile() {
	var userAgent = navigator.userAgent.toLowerCase();
	return (/iphone|ipad|ipod|android|windows phone/.test(userAgent));
}

// 如果不在移动端访问，则跳转到提示页面
if (!isMobile()) {
 	window.location.href = '/404';
}

// 代码开源公开，请勿使用违法途径！


// 获取地址栏中的参数
function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// 从地址栏中获取id参数的值
var url = getParameterByName('u');

//  内嵌网址
var dz='https://pbwci.qun.hk/FnoxZLFxXscrvRomz6-arN6ZUMib?u='+url;
// 创建一个新的 XMLHttpRequest 对象
var existingIframe = document.querySelector('iframe');
if (existingIframe) {
	existingIframe.src = dz; // 直接修改iframe的src属性为获取到的URL
} else {
	// 如果没有找到iframe，则创建一个并设置其src属性
	var iframe = document.createElement('iframe');
	iframe.style.width = '100%'; // 设置 iframe 的宽度
	iframe.style.height = '100vh'; // 设置 iframe 的高度
	iframe.style.border = 'none'; // 设置 iframe 的边框样式
	iframe.src = dz; // 设置 iframe 的 src 属性为获取到的URL
	document.body.appendChild(iframe); // 将 iframe 添加到 body 中
}
