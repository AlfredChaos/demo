<template>
	<view class="service">
		<view class="serviceItem">
			<image src="../../static/service/icon1.png"></image>
			魅族官网直供
		</view>
		<view class="serviceItem">
			<image src="../../static/service/icon2.png"></image>
			满80免运费
		</view>
		<view class="serviceItem">
			<image src="../../static/service/icon3.png"></image>
			7天无理由退货
		</view>
	</view>
	<view class="shopNav">
		<view class="shopNavItem">
			<image src="../../static/shopNav/recommend1.png"></image>
			<text>魅族 16S PRO</text>
		</view>
		<view class="shopNavItem">
			<image src="../../static/shopNav/recommend2.png"></image>
			<text>魅族 16S PRO</text>
		</view>
		<view class="shopNavItem">
			<image src="../../static/shopNav/recommend3.jpg"></image>
			<text>魅族 16S PRO</text>
		</view>
		<view class="shopNavItem">
			<image src="../../static/shopNav/recommend4.jpg"></image>
			<text>魅族 16S PRO</text>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.service {
		display: flex;
		height: 70rpx;
		background: #f7f7f7;
		/* 垂直居中 */
		align-items: center;
		justify-content: space-between;;
	}
	.serviceItem {
		font-size: 24rpx;
		color: #a3a3a3;
		line-height: 70rpx;
		display: flex;
		align-items: center;
		margin-left: 20rpx;
		margin-right: 20rpx;
	}
	.serviceItem image{
		width: 35rpx;
		height: 35rpx;
		margin-right: 10rpx;
	}
	.shopNav {
		height: 225rpx;
		display: flex;
		justify-content: center;
		background: white;
	}
	.shopNavItem{
		margin-left: 10rpx;
		margin-right: 10rpx;
	}
	.shopNavItem image{
		width: 100rpx;
		height: 100rpx;
		margin-top: 30rpx;
	}
	.shopNavItem text{
		display: block;
		font-size: 24rpx;
		color: #000000;
		line-height: 100rpx;
	}
</style>