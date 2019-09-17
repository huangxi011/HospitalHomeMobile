let appSetting={
	currentUserGuid: "",
	userInfo: {
		permissions: []
	},
	checkPermission () { return false; },
	dashboard: "../index",
	domain:  "http://hh.ricebird.cn" ,
}
try{
	function getQueryVariable(variable) {
		if (!window && !window.location && !window.location.search) {
			return false;
		}
		var query = window.location.search.substring(1);
		var vars = query.split("&");
		for (var i=0;i<vars.length;i++) {
			var pair = vars[i].split("=");
			if(pair[0] == variable){return pair[1];}
		}
		return false;
	}
	
	appSetting.currentUserGuid = getQueryVariable("currentUserGuid") || "";
	if (!appSetting.currentUserGuid) {
		appSetting.currentUserGuid = uni.getStorageSync("currentUserGuid");
	}
}
catch{}
module.exports = appSetting;