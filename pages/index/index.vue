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
			<view class="shopList">
				<view class="shopListItem">
					<image src="../../static/commodity/p1.png" class="shopImg" mode=""></image>
					<view class="shopTitle">
						魅族 16s Pro
					</view>
					<view class="shopActive">
						<view class="shopActiveLab">
							免息
						</view>
						<view class="shopActiveText">
							4800W AI三摄 屏幕下方屏幕下方
						</view>
					</view>
					<view class="shopPrice">
						¥2699.00
					</view>
				</view>
			</view>
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
	.shopListItem{
		width: 370rpx;
		height: 540rpx;
		background: white;
		overflow: hidden;
	}
	.shopListItem .shopImg{
		height: 316rpx;
		width: 316rpx;
		display: block;
		margin: 40rpx auto 0 ;
	}
	.shopListItem .shopTitle{
		line-height: 50rpx;
		height: 50rpx;
		font-size: 28rpx;
		text-align: center;
	}
	.shopListItem .shopActive{
		height: 40rpx;
		width: 346rpx;
		margin: 0 auto;
		border: 1rpx solid #d9000b;
		display: flex;
	}
	.shopActiveLab{
		width: 70rpx;
		background: #d9000b;
		font-size: 24rpx;
		color: white;
		text-align: center;
		line-height: 42rpx;
	}
	.shopActiveText{
		width: 276rpx;
		font-size: 24rpx;
		color: #d9000b;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: 42rpx;
	}
	.shopPrice{
		font-size: 28rpx;
		color: #d9000b;
		line-height: 80rpx;
		text-align: center;
	}
</style>
