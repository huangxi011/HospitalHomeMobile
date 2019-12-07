import Vue from 'vue'
import App from './App'
import cuCustom from './colorui/components/cu-custom.vue'
import SB from './colorui/components/myStatusBar.vue'
import bottomNavBar from './colorui/components/bottomNavBar.vue'
Vue.component('cu-custom', cuCustom)
Vue.component('statusBar', SB)
Vue.component('bottom-navbar', bottomNavBar)

Vue.config.productionTip = false
let app = require("@/config");
require("./init");
App.mpType = 'app'

uni.post("/api/config/GetBasicConfig", {}, msg => {
	if (msg.success) {
		app.webInfo = msg.info;
		app.titlePerfix = " - " + app.webInfo.title;
		app.userInfo = msg.userInfo;
		let ps = app.userInfo.permissons;
		app.checkPermission = (p) => {
			return ps && ps.indexOf(p) >= 0;
		}
	}

	const vm = new Vue({
	    ...App
	})
	vm.$mount()
})
