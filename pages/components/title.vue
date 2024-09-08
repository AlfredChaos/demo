<template>
	<view class="floorTitle">
		<view class="title">
			{{ name }}
		</view>
		<view class="line"></view>
	</view>
</template>

<script>
	export default{
		props: ['name']
	}
</script>

<style>
	.floorTitle{
		height: 180rpx;
	}
	.floorTitle .title{
		line-height: 90rpx;
		font-size: 36rpx;
		color: #000000;
		font-weight: bold;
		text-align: center;
		padding-top: 50rpx;
	}
	.floorTitle .line{
		width: 44rpx;
		height: 6rpx;
		background: #07baf2;
		margin: 0 auto;
	}
</style>