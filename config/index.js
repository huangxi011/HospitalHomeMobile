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
	appSetting.currentUserGuid = getQueryVariable("currentUserGuid") || "";
	if (!appSetting.currentUserGuid) {
		appSetting.currentUserGuid = uni.getStorageSync("currentUserGuid");
	}
}
catch{}
module.exports = appSetting;