<template>
	<view class="service">
		<view class="serviceItem" v-for="(item,index) in active" :key="index">
			<image :src="this.$imgUrl+item.image" mode=""></image>
			<text>{{item.title}}</text>
		</view>
	</view>
	<view class="shopNav">
		<view class="shopNavItem" v-for="(item,index) in icon" :key="index">
			<navigator url="#" hover-class="none">
				<image :src="this.$imgUrl+item.image" mode=""></image>
				<text>{{item.title}}</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default{
		props: ["active", "icon"]
	}
</script>

<style>
	.service {
		display: flex;
		height: 70rpx;
		background: #f7f7f7;
		/* 垂直居中 */
		align-items: center;
		justify-content: space-between;
	}
	.serviceItem {
		font-size: 24rpx;
		color: #a3a3a3;
		line-height: 70rpx;
		display: flex;
		align-items: center;
		margin-left: 15rpx;
		margin-right: 20rpx;
	}
	.serviceItem image{
		width: 35rpx;
		height: 35rpx;
		margin-right: 7rpx;
	}
	.serviceItem text{
		white-space: nowrap
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
		display: block;
		margin: 30rpx auto 0;
	}
	.shopNavItem text{
		display: block;
		font-size: 24rpx;
		color: #000000;
		line-height: 100rpx;
	}
</style>