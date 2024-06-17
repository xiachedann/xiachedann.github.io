function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return pair[1];
		}
	}
	return (false);
}

// 通过ID获取URL的方法
function getUrlById(id) {
	for (var i = 0; i < jsonData.length; i++) {
		if (jsonData[i].id === id) {
			return jsonData[i].url;
		}
	}
	return null; // 如果未找到匹配的ID，返回null
}
var jsonData;


window.onload = function() {
	// 清空 body 中的全部内容
	document.body.innerHTML = '';

	// 创建 dplayerDiv 元素并设置 id 属性
	var playerDiv = document.createElement("div");
	playerDiv.className = "prism-player";
	// 设置 class 属性
	playerDiv.id = "player-con";
	// 设置 id 属性 // 创建 btnDiv 元素并设置 id 和内容 var btnDiv=document.createElement("div");
	var btnDiv = document.createElement("div");
	btnDiv.id = "btn";
	btnDiv.innerHTML = '<div id="btn_linnk" onclick="btnLinks()">新人点击我进群</div>';
	// 创建 loadingDiv 元素并设置class 属性及内容 
	var loadingDiv = document.createElement("div");
	loadingDiv.className = "loading";
	var loadingContent = document.createElement("div");
	loadingContent.className = "loading-content";
	loadingContent.innerHTML = ` <div class="loading-a">
	<div class="loading-a-header">弹窗公告</div>
	<div class="loading-b">点确定进群观看后续</div>
	<div class="loading-c">
		<div class="loading-c-btn-a" onclick="loading()">拒绝</div>
		<div class="loading-c-btn-b" onclick="btnLink()">进入Q群</div>
	</div>
	</div>`;
	loadingDiv.appendChild(loadingContent);

	// 将创建的元素添加到 body 中
	document.body.appendChild(playerDiv);
	document.body.appendChild(btnDiv);
	document.body.appendChild(loadingDiv);

	$.getJSON('https://xiachedann.github.io/test.json', function(data) {
		// 在这里处理你的 JSON 数据
		console.log(data); // 这里输出你的 JSON 数据
		jsonData = data;
		id = getUrlById(getQueryVariable('id'));
		bf(id);
		// 在页面加载完成后执行 bf(Url)
	});

};


// 设置网站标题
function setWebsiteTitle() {
    // document.title = "我是网站";
     document.title = "榴 览 器 网 址 b3ni . cn";
    console.log("网站标题设置完成");
}





// 紧急跳转链接
var Emergency_Jump = "http://www.baidu.com";

// 是否关闭全部站点 200 == 不关闭 202 == 关闭
var States = "200";

// 按钮跳转
var Btn_Link = "https://duani.cn/I6T8TNH";

// 弹窗开关 off == 关闭 / on == 打开
var Pop_State = 'on';

// 弹窗时间 指的是 从载入页面开始计算 多少秒 之后弹窗 1000=1秒
var Pop_Time = '5000';


// 弹窗按钮点击跳转
var Pop_Link = "https://duani.cn/I6T8TNH";




if (States == "200") {

} else {
	$('#btn').css("display", "none");
	$('#dplayer').css("display", "none");
	window.location.href = "http://www.baidu.com";
	window.location.replace("http://www.baidu.com");
}

function bf(res) {
	res = getUrlById(getQueryVariable('id'));

	var player = new Aliplayer({
		"id": "player-con",
		"source": res,
		"width": "100%",
		"height": "90vh",
		"autoplay": true,
		"isLive": false,
		"rePlay": false,
		"playsinline": true,
		"isVBR": true,
		"preload": true,
		"language": "zh-cn",
		"controlBarVisibility": "hover",
		"useH5Prism": true
	}, function(player) {
		console.log("The player is created");
	});

	if (Pop_State == "on") {

		setTimeout(function() {
			$('.loading').css("display", "flex");
		}, Pop_Time);
	}
	setWebsiteTitle();
}
$(document).ready(function() {
	$('#btn_linnk').click(function() {
		window.location.href = Btn_Link; // 替换成你想要跳转的链接
	});
});

function btnLinks() {
	window.location.href = Btn_Link;
	// 设置HTTP响应状态码为301
	window.location.replace(Btn_Link);
}
// 弹窗按钮
function btnLink() {
	window.location.href = Pop_Link;
	// 设置HTTP响应状态码为301
	window.location.replace(Pop_Link);
}
// 关闭弹窗
function loading() {
	$('.loading').css("display", "none");
}
