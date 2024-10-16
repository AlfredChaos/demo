// #ifndef VUE3
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		attrValue: [], //detailAttr valueIndex [0,0]
		attrText: '请选择商品规格尺寸',
		isLogin: 0
	},
	mutations: {
		setAttr(state, data){
			state.attrValue = data.attrValue
			state.attrText = data.attrText
		},
		defaultAttr(state){
			state.attrValue = []
			state.attrText = "请选择商品规格尺寸"
		},
		login(state){
			state.isLogin = 1;
		},
		logout(state){
			state.isLogin = 0;
			uni.setStorageSync('token', '');
		}
	}
})
// #endif

// #ifdef VUE3
import { createStore } from 'vuex'
const store = createStore({
	state: {
		attrValue: [], //detailAttr valueIndex [0,0]
		attrText: '请选择商品规格尺寸',
		isLogin: 0
	},
	mutations: {
		setAttr(state, data){
			state.attrValue = data.attrValue
			state.attrText = data.attrText
		},
		defaultAttr(state){
			state.attrValue = []
			state.attrText = "请选择商品规格尺寸"
		},
		login(state){
			state.isLogin = 1;
		},
		logout(state){
			state.isLogin = 0;
			uni.setStorageSync('token', '')
		}
	}
})
// #endif

export default store