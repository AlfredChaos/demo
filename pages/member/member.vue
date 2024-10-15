<template>
	<view>
		<view class="memberTop">
			<image src="../../static/member/member-tx.png" class="avatar" mode=""></image>
			<view class="userInfo">
				<view class="loginRegister" v-if="code==0">登录/注册</view>
				<view class="loginInfo" v-else>
					<text class="username">英特网络</text>
					<text class="nickname">www.internal.com</text>
				</view>
			</view>
			<view class="ewm">
				<image src="../../static/member/ewm.png" mode=""></image>
			</view>
			<view class="memberIcon">
				<i class="iconfont">&#xe612;</i>
				<i class="iconfont">&#xe614;</i>
			</view>
		</view>
		<view class="orderStatus">
			<view class="orderItem">
				<image src="../../static/member/member-icon1.png" mode=""></image>
				<text>待付款</text>
			</view>
			<view class="orderItem">
				<image src="../../static/member/member-icon2.png" mode=""></image>
				<text>待收货</text>
			</view>
			<view class="orderItem">
				<image src="../../static/member/member-icon3.png" mode=""></image>
				<text>待评价</text>
			</view>
			<view class="orderItem">
				<image src="../../static/member/member-icon4.png" mode=""></image>
				<text>全部订单</text>
			</view>
		</view>
		<view class="splitLine"></view>
		<view class="menuList">
			<view class="menuItem">
				<image src="../../static/member/member-menu1.png" mode=""></image>
				<text>收货地址</text>
			</view>
			<view class="menuItem">
				<image src="../../static/member/member-menu2.png" mode=""></image>
				<text>在线客服</text>
			</view>
			<view class="menuItem">
				<image src="../../static/member/member-menu3.png" mode=""></image>
				<text>邀请有礼</text>
			</view>
			<view class="menuItem">
				<image src="../../static/member/member-menu4.png" mode=""></image>
				<text>关于我们</text>
			</view>
		</view>
		<view class="logout">
			退出登录
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code: ''
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getData(){
				uni.request({
					url: this.$apiUrl + '/member/index',
					method: 'POST',
					header: {
						'token': uni.getStorageSync('token'),
					},
					success(res)=>{
						if(res.data.code == 0){
							this.code = 0
						}
					}
				})
			}
		}
	}
</script>

<style>
	.memberTop{
		height: 336rpx;
		background: url(../../static/member/member-top.png) no-repeat;
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
	.loginInfo{
		position: absolute;
		top: 180rpx;
		left: 160rpx;
	}
	.loginInfo text.username{
		line-height: 42rpx;
		height: 42rpx;
		font-size: 28rpx;
		color: white;
		display: block;
	}
	.loginInfo text.nickname{
		line-height: 38rpx;
		height: 38rpx;
		font-size: 24rpx;
		color: white;
	}
	.ewm{
		height: 35rpx;
		width: 35rpx;
		position: absolute;
		top: 200rpx;
		right: 30rpx;
	}
	.ewm image{
		width: 35rpx;
		height: 35rpx;
	}
	.memberIcon{
		position: absolute;
		top: 50rpx;
		right: 30rpx;
		color: white;
	}
	.memberIcon i{
		margin-left: 35rpx;
	}
	.orderStatus{
		display: flex;
	}
	.orderItem{
		width: 25%;
	}
	.orderItem image{
		width: 70rpx;
		height: 56rpx;
		display: block;
		margin: 20rpx auto 0;
	}
	.orderItem text{
		display: block;
		line-height: 80rpx;
		font-size: 28rpx;
		text-align: center;
		padding-bottom: 10rpx;
	}
	.splitLine{
		height: 20rpx;
		width: 100%;
		background: #f5f5f5;
	}
	.menuItem{
		height: 90rpx;
		margin: 0 30rpx;
		border-top: 1rpx solid #e5e5e5;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		background: url(../../static/member/more.png) no-repeat;
		background-size: 26rpx 26rpx;
		background-position: right center;
	}
	.menuItem:nth-of-type(1){
		border-top: none;
	}
	.menuItem image{
		width: 30rpx;
		height: 30rpx;
		margin-right: 25rpx;
	}
	.logout{
		margin: 30rpx;
		height: 85rpx;
		border: 1rpx solid #e5e5e5;
		font-size: 28rpx;
		text-align: center;
		line-height: 85rpx;
	}
</style>
