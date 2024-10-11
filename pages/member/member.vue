<template>
	<view>
		<view class="memberTop">
			<image src="../../static/member-tx.png" class="avatar" mode=""></image>
			<view class="userInfo">
				<view class="loginRegister" style="display: none;">登录/注册</view>
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
	.memberTop{
		height: 336rpx;
		background: url(../../static/member-top.png) no-repeat;
		background-size: 100% 336rpx;
		position: relative;
	}
	.avatar{
		width: 110rpx;
		height: 110rpx;
		position: absolute;
		top: 165rpx;
		left: 30rpx;
		border-radius: 50%;
	}
	.loginRegister{
		width: 160rpx;
		height: 45rpx;
		color: white;
		border: 1rpx solid white;
		font-size: 28rpx;
		text-align: center;
		line-height: 45rpx;
		position: absolute;
		top: 190rpx;
		left: 160rpx;
	}
</style>
