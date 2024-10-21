<template>
	<view class="">
		<view class="username">
			<view class="itemTitle">
				收货人:
			</view>
			<input type="text" value="" placeholder="收货人姓名"/>
		</view>
		<view class="addressItem">
			<view class="itemTitle">
				
			</view>
			<text>先生</text>
			<text>女士</text>
		</view>
		<view class="addressItem">
			<view class="itemTitle">
				电话号码:
			</view>
			<input type="text" value="" placeholder="收货人的联系电话"/>
		</view>
		<view class="addressItem">
			<view class="itemTitle">
				收获地址:
			</view>
			<!-- <input type="text" value="" placeholder="请选择收货地址"/> -->
			<view class="content">
				<pickerAddress class="city" @change="change">{{city}}</pickerAddress>
			</view>
		</view>
		<view class="addressBox">
			<view class="itemTitle">
				详细地址:
			</view>
			<textarea value="" placeholder="请输入详细地址"></textarea>
		</view>
		<view class="defaultItem">
			<view class="itemTitle">
				默认地址:
			</view>
			<switch checked="true" color="#0bbbef"; style="transform:scale(0.8);"></switch>
		</view>
		<view class="saveAddress">
			保存收货地址
		</view>
	</view>
</template>

<script>
	import pickerAddress from '../../components/pickerAddress/pickerAddress.vue'
	export default{
		components:{
			pickerAddress
		},
		data() {
			return {
				city: '请选择收货地址',
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			change(data) {
				this.city = data.data.join('')
			}
		}
	}
</script>

<style>
	.username{
		padding: 0 30rpx;
		display: flex;
		line-height: 90rpx;
		align-items: center;
	}
	.itemTitle{
		width: 140rpx;
		font-size: 28rpx;
	}
	.username input{
		border-bottom: 1rpx solid #e5e5e5;
		flex: 1;
		line-height: 90rpx;
		height: 90rpx;
		font-size: 28rpx;
	}
	.addressItem{
		display: flex;
		margin: 0 30rpx;
		height: 90rpx;
		align-items: center;
		border-bottom: 1rpx solid #e5e5e5;
	}
	.addressItem text{
		line-height: 45rpx;
		height: 45rpx;
		width: 80rpx;
		display: block;
		border: 1rpx solid #e5e5e5;
		font-size: 24rpx;
		text-align: center;
		margin-right: 10rpx;
		color: #999999;
	}
	.addressItem input {
		font-size: 28rpx;
	}
	.addressBox{
		height: 180rpx;
		display: flex;
		margin: 0 30rpx;
		border-bottom: 1rpx solid #e5e5e5;
	}
	.addressBox .itemTitle{
		width: 140rpx;
		line-height: 90rpx;
	}
	.addressBox textarea{
		flex: 1;
		height: 180rpx;
		line-height: 90rpx;
		font-size: 28rpx;
	}
	.saveAddress{
		width: 600rpx;
		height: 80rpx;
		line-height: 80rpx;
		margin: 80rpx auto;
		background: #0bbbef;
		color: white;
		font-size: 28rpx;
		text-align: center;
		border-radius: 80rpx;
	}
	.city{
		font-size: 28rpx;
		color: black;
	}
	.defaultItem{
		margin: 0 30rpx;
		display: flex;
		height: 90rpx;
		align-items: center;
		justify-content: space-between;
	}
</style>