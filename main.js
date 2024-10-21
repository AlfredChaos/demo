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
  app.config.globalProperties.check = check;
  app.config.globalProperties.$request = function(url, data=''){
	  return new Promise((reslove, reject)=>{
		  uni.request({
		  	url: url,
		  	method: 'POST',
		  	header: {
		  		'token': uni.getStorageSync('token')
		  	},
			data: data,
		  	success:(res)=>{
		  		// 未登录
		  		if(res.data.code == 0){
		  			reslove({"code": 0, "msg": "登录失效，重新登录"})
		  			// this.code = 0
		  		}
		  		// 获取用户信息成功
		  		if(res.data.code == 1){
		  			reslove(res.data)
		  		}
		  		// token过期,刷新token
		  		if(res.data.code == 2){
		  			uni.setStorageSync('token');
		  			uni.request({
		  				url: url,
		  				method: 'POST',
		  				header: {
		  					'token': uni.getStorageSync('token'),
		  				},
		  				success: (res) => {
		  					reslove(res.data)
		  				}
		  			})
		  		}
		  		// token失效,重新登录
		  		if(res.data.code == 3){
		  			reslove({"code": 0, "msg": "登录失效或未登录"});
		  			uni.setStorageSync("token", '')
		  		}
		  		// token有效,但没有相关用户
		  		if(res.data.code == 4){
		  			reslove({"code": 0, "msg": "登录失效或未登录"});
		  			uni.setStorageSync("token", '')
		  		}
		  	}
		  })
	  })
  }
  return {
    app
  }
}
// #endif