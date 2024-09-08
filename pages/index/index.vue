<template>
	<view class="content">
		
		<!-- 顶部导航 -->
		<topNavigation></topNavigation>
		<!-- 首页轮播 -->
		<indexSwiper></indexSwiper>
		<!-- 商品服务和商品导航 -->
		<indexService></indexService>
		<!-- 首页广告 -->
		<indexAd></indexAd>
		<view class="floor">
			<titleVue name="智能手机"></titleVue>
			<image src="../../static/ad/cate1Ad.jpg"  class="adImage" mode=""></image>
		</view>
		
		
	</view>
</template>

<script>
	import topNavigation from '../components/topNavigation.vue'
	import indexSwiper from '../components/indexSwiper.vue'
	import indexService from '../components/indexService.vue'
	import indexAd from '../components/indexAd.vue'
	import titleVue from '../components/title.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components: {
			topNavigation,
			indexSwiper,
			indexService,
			indexAd,
			titleVue
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	page{
		background: #f4f4f4;
	}
	.adImage{
		height: 344rpx;
		width: 100%;
	}
	
</style>
