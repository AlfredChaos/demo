<template>
	<view>
		<swiper class="detailSwiper" indicator-active-color="#0bc9fd" 
		indicator-color="#b3b3b3" :indicator-dots="true" 
		:autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/detail/dimg1.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/detail/dimg2.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/detail/dimg3.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/detail/dimg4.jpg" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="shopInfo">
			<view class="shopTitle">
				<label>新品</label>苹果（Apple）ipad2019新款第7代10.2英寸2018款9.7英寸air2更新版平板电脑 金色19款10.2英寸 32G WLAN版-标配
			</view>
			<view class="shopSummary">
				【11.11提前购，神券疯狂抢】平板抢券立减120元！下单抽万元豪礼~套餐晒图送蓝牙耳机~，每日0点、10点、15点、20点限量发券*点击抢券~
			</view>
			<view class="shopPriceSale">
				<view class="shopPrice"><text>￥</text>599.00</view>
				<view class="shopSale">月销量：5000件</view>
			</view>
			<view class="shopAssure">
				<view class="shopAssureItem">
					<i class="iconfont">&#xe60d;</i>全场包邮
				</view>
				<view class="shopAssureItem">
					<i class="iconfont">&#xe60d;</i>7天无理由退货（激活后不支持）
				</view>
				<view class="shopAssureMore">
					<i class="iconfont">&#xe60d;</i>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.detailSwiper{
		width: 100%;
		height: 525rpx;
	}
	.detailSwiper image{
		width: 470rpx;
		height: 470rpx;
		display: block;
		margin: 0 auto;
	}
</style>
