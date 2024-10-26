<template>
	<view class="pay">
		<view class="payOrder">
			<view class="payNumber">
				订单号:123142314325
			</view>
			<view class="payPrice">
				<text>￥</text>200.00
			</view>
			<view class="payTime">
				最迟支付时间:2020-10-20 14:20:10
			</view>
		</view>
		<view class="payType">
			
		</view>
	</view>
</template>

<script>
</script>

<style>
	.payType{
		width: 650rpx;
		margin: 58rpx auto;
	}
	.payNumber{
		font-size: 24rpx;
		color: #999999;
		text-align: center;
		padding-top: 54rpx;
	}
	.payPrice{
		font-size: 70rpx;
		color: black;
		height: 120rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	.payPrice text{
		font-size: 28rpx;
	}
	.payTime{
		font-size: 24rpx;
		color: #999999;
		line-height: 56rpx;
		text-align: center;
	}
</style>