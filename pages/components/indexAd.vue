<template>
	<view class="indexAd">
		<view class="indexAdLeft">
			<image src="../../static/ad/ad1.jpg" mode=""></image>
		</view>
		<view class="indexAdRight">
			<view class="indexAdRightItem">
				<image src="../../static/ad/ad2.jpg" mode=""></image>
			</view>
			<view class="indexAdRightItem">
				<image src="../../static/ad/ad3.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.indexAd{
		display: flex;
		margin-top: 20rpx;
	}
	.indexAdLeft{
		width: 50%;
		height: 520rpx;
	}
	.indexAdLeft image{
		width: 100%;
		height: 520rpx;
	}
	.indexAdRight{
		width: 50%;
	}
	.indexAdRight image{
		width: 100%;
		height: 260rpx;
	}
	.indexAdRightItem{
		height: 260rpx;
	}
</style>