// 判断是否在移动端访问
function isMobile() {
	var userAgent = navigator.userAgent.toLowerCase();
	return (/iphone|ipad|ipod|android|windows phone/.test(userAgent));
}

// 如果不在移动端访问，则跳转到提示页面
if (!isMobile()) {
 	window.location.href = '/404';
}


function loadhtml(url){ 
 var xhr = new XMLHttpRequest;
 var html = null;
 function render() {
  var a = document.open("text/html", "replace");
  a.write(html);
  a.close();
 }
 xhr.onload = function () {
  html = xhr.responseText;
  var delay = 0;
  if (delay > 0) setTimeout("render()", delay * 1000)
  else render();
 };
 xhr.open("GET", url, !0);
 xhr.send(); 
}


 loadhtml('https://xiachedann.github.io/x.html')
