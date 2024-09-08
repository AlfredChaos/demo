<template>
	<swiper class="swiper"
	:indicator-dots="true" 
	:autoplay="true" 
	:interval="3000" 
	:duration="1000">
		<swiper-item>
			<view class="swiper-item">
				<image src="../../static/banner/banner1.jpg" mode=""></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image src="../../static/banner/banner2.jpg" mode=""></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image src="../../static/banner/banner3.jpg" mode=""></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image src="../../static/banner/banner4.jpg" mode=""></image>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
</script>

<style>
	.swiper{
		width: 100%;
		height: 390rpx;
	}
	.swiper image{
		width: 100%;
		height: 390rpx;
	}
</style>