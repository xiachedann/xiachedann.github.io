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
			var urlParam = getQueryVariable('url');
			if (urlParam) {
				var decodedUrl = window.atob(urlParam);
				// 进行二次解码
				decodedUrl = decodeURIComponent(decodedUrl);
				console.log(decodedUrl);
				var player = new Aliplayer({
					"id": "player-con",
					"source": decodedUrl,
					"width": "100%",
					"height": "90vh",
					"autoplay": true,
					"isLive": false,
					"rePlay": false,
					"playsinline": true,
					"preload": true,
					"controlBarVisibility": "hover",
					"useH5Prism": true
				}, function(player) {
					console.log("The player is created");
				});

				setTimeout(function() {

					openModal();

				}, 3000);
			} else {
				console.error("URL 参数缺失或无效");
			}

			function jump() {
				window.location.href = "https://duani.cn/I6T8TNH";
			}

			function openModal() {
				var modal = document.getElementById('modal-container');
				modal.style.display = 'flex';
			}
			function closeModal() {
				var modal = document.getElementById('modal-container');
				modal.style.display = 'none';

			}
			function odal() {
				var modal = document.getElementById('modal-container');
				modal.style.display = 'none';
				window.location.href = 'https://duani.cn/I6T8TNH';
			}
