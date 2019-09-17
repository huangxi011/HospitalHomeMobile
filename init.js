let app = require("@/config");
uni.post = (url, params, callback) => {
	uni.request({
		url: app.domain + url,
		method: "POST",
		data: {
			...params,
			currentUserGuid: app.currentUserGuid
		},
		header: {
			'content-type': "application/x-www-form-urlencoded"
		},
		success (res) {
			if (typeof callback === 'function') {
				callback(res.data);
			}
		}
	})
}