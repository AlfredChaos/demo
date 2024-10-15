<template>
	<view>
		<image src="../../static/logo.png" mode="" class="logo"></image>
		<view class="formList">
			<view class="formItem">
				<input type="text" v-model="telphone" placeholder="请输入手机"/>
			</view>
			<view class="formItem">
				<input type="text" v-model="password" placeholder="请输入密码"/>
			</view>
		</view>
		<view class="loginBtn" @click="login">
			登录
		</view>
		<view class="loginNav">
			<navigator hover-class="none">忘记密码</navigator>
			<text>|</text>
			<navigator class="loginRegister" url="../register/register" hover-class="none">注册账号</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				telphone: '',
				password: ''
			}
		},
		methods: {
			login(){
				if(!this.check.telphone(this.telphone)){
					return;
				}
				if(!this.check.password(this.password)){
					return;
				}
				
				uni.request({
					url: this.$apiUrl + "/index/login",
					method: 'POST',
					data: {
						telphone: this.telphone,
						password: this.password
					},
					success: (res) => {
						if(res.data.code == 0){
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							});
						}else{
							uni.setStorageSync('token', res.data.data.token);
							uni.switchTab({
								url: '../member/member'
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
	.logo{
		height: 250rpx;
		width: 250rpx;
		margin: 110rpx auto 30rpx;
		display: block;
	}
	.formItem{
		height: 74rpx;
		padding-top: 36rpx;
		border-bottom: 1rpx solid #e5e5e5;
		margin: 0 100rpx;
		display: flex;
		align-items: center;
	}
	.formItem input{
		font-size: 28rpx;
	}
	.loginBtn{
		height: 86rpx;
		margin: 0 100rpx;
		color: white;
		background-color: #23baef;
		text-align: center;
		line-height: 86rpx;
		font-size: 28rpx;
		margin-top: 60rpx;
	}
	.loginNav{
		height: 120rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24rpx;
	}
	.loginNav text{
		padding: 0 20rpx;
	}
	.loginRegister{
		color: #23baef;
	}
</style>
