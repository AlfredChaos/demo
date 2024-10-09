import App from './App'
import store from './store'
import check from './check/index.js'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
// Vue.prototype.imgUrl = "http://192.168.5.9:80/mall/public/uploads/"
// Vue.prototype.check = check;
App.mpType = 'app'
const app = new Vue({
	store,
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  // 设置全局变量
  // mumu模拟器
  // app.config.globalProperties.$imgUrl = "http://192.168.5.9:80/mall/public/uploads/"
  // 微信小程序
  app.config.globalProperties.$apiUrl = "http://www.mall.com/api/"
  app.config.globalProperties.$imgUrl = "http://www.mall.com/uploads/"
  app.config.globalProperties.check = check
  return {
    app
  }
}
// #endif