	// 检测屏幕宽度
	if (window.innerWidth > 768) { // 假设大于 768px 的宽度为电脑端
		window.location.href = 'https://gongyi.qq.com/';
	}

	// 获取当前页面的 URL 参数
	const queryParams = new URLSearchParams(window.location.search);

	// 构建新的目标 URL
	let targetUrl = 'https://example.com/newpage';

	// 将当前页面的所有参数添加到目标 URL 中
	if (queryParams.toString() !== '') {
		targetUrl += '?' + queryParams.toString();
	}

	window.location.replace(targetUrl);
