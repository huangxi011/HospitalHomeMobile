import Vue from 'vue'
import App from './App'
import cuCustom from './colorui/components/cu-custom.vue'
import SB from './colorui/components/myStatusBar.vue'
import bottomNavBar from './colorui/components/bottomNavBar.vue'
Vue.component('cu-custom',cuCustom)
Vue.component('statusBar',SB)
Vue.component('bottom-navbar',bottomNavBar)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
