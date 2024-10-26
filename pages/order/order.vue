<template>
	<view>
		<view class="address">
			<view class="addressBox">
				<view class="addressIcon">
					<i class="iconfont">&#xe622;</i>
				</view>
				<view class="addressContent">
					<view class="addressUser">
						收货人:Alfred	18888888888
					</view>
					<view class="addressInfo">
						广东省深圳市广东省深圳市广东省深圳市广东省深圳市广东省深圳市广东省深圳市广东省深圳市
					</view>
				</view>
				<view class="addressMore">
					<i class="iconfont">&#xe60b;</i>
				</view>
			</view>
			<view class="addressLine"></view>
		</view>
		<view class="addressEmpty">
			+ 暂无收获地址，请添加
		</view>
		<view class="shopList">
			<view class="shopItem">
				<view class="shopItemLeft">
					<image src="../../static/shopNav/recommend1.png" mode=""></image>
				</view>
				<view class="shopItemRight">
					<view class="shopTitle">
						苹果（APPLE）ipad2019新款第7代
					</view>
					<view class="shopAttr">
						appad，黑色
					</view>
					<view class="shopPrice">
						<text>￥299.00</text><text class="number">x1</text>
					</view>
				</view>
			</view>
			<view class="shopItem">
				<view class="shopItemLeft">
					<image src="../../static/shopNav/recommend1.png" mode=""></image>
				</view>
				<view class="shopItemRight">
					<view class="shopTitle">
						苹果（APPLE）ipad2019新款第7代
					</view>
					<view class="shopAttr">
						appad，黑色
					</view>
					<view class="shopPrice">
						<text>￥299.00</text><text class="number">x1</text>
					</view>
				</view>
			</view>
		</view>
		<view class="orderPrice">
			<view class="orderPriceItem">
				<view class="orderPriceItemTitle">
					应付金额
				</view>
				<view class="orderPriceItemPrice">
					应付金额
				</view>
			</view>
			<view class="orderPriceItem">
				<view class="orderPriceItemTitle">
					配送方式
				</view>
				<view class="orderPriceItemPrice">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}</view>
					</picker>
					<i class="iconfont">&#xe60b;</i>
				</view>
			</view>
			<view class="orderMessage">
				<input type="text" value="" placeholder="请留言"/>
			</view>
			<view class="orderPriceItem">
				<view class="orderPriceItemTitle">
					总计
				</view>
				<view class="orderPriceItemPrice">
					合计1件商品,总共199.00元
				</view>
			</view>
		</view>
		<view style="height: 100rpx;"></view>
		<view class="orderBottom">
			<text class="totalPrice">总计：199.00</text>
			<view class="orderBottomBtn" @click="payBtn">立即购买</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array: ["请选择配送方式", "申通快递", "顺丰快递"],
				index: 0
			}
		},
		methods:  {
			bindPickerChange(e){
				this.index = e.detail.value;
			},
			payBtn(){
				uni.navigateTo({
					url: 'pay'
				})
			}
		},
	}
</script>

<style>	
	.addressEmpty{
		width: 695rpx;
		height: 85rpx;
		background: white;
		border-radius: 10rpx;
		margin: 20rpx auto 0;
		font-size: 28rpx;
		color: #0cbaef;
		text-align: center;
		line-height: 85rpx;
	}
	
	page{
		background: #f4f4f4;
	}
	.address{
		position: relative;
		width: 695rpx;
		height: 200rpx;
		margin: 0 auto;
		overflow: hidden;
	}
	.addressBox{
		width: 695rpx;
		height: 200rpx;
		background: white;
		margin: 20rpx auto;
		display: flex;
		border-radius: 10rpx;
	}
	.addressIcon{
		width: 100rpx;
		display: flex;
		justify-content: center;
		line-height: 90rpx;
	}
	.addressContent{
		flex: 1;
	}
	.addressContent .addressUser{
		font-size: 28rpx;
		color: #000000;
		line-height: 70rpx;
		padding-top: 10rpx;
	}
	.addressContent .addressInfo{
		color: #999999;
		font-size: 24rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.addressMore{
		width: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.addressLine{
		height: 8rpx;
		background-image: -webkit-linear-gradient(315deg,#82c9ff 8px,transparent 0,transparent 16px,#ff8282 0,#ff8282 32px,transparent 0,transparent 0,transparent 40px,#82c9ff 0,#82c9ff);
		background-image: linear-gradient(135deg,#82c9ff 8px,transparent 0,transparent 16px,#ff8282 0,#ff8282 32px,transparent 0,transparent 0,transparent 40px,#82c9ff 0,#82c9ff);
		background-color: #fff;
		background-size: 136rpx 8rpx;
		width: 100%;
		position: absolute;
		bottom: 0;
	}
	
	.shopList{
		width: 695rpx;
		background: #ffffff;
		margin: 20rpx auto 0;
		border-radius: 10rpx;
	}
	.shopList .shopItem{
		display: flex;
		padding: 10rpx 20rpx;
		border-top: 1rpx solid #e5e5e5;
		margin: 0 20rpx;
	}
	.shopList .shopItem:nth-of-type(1){
		border: none
	}
	.shopItem .shopItemLeft image{
		width: 200rpx;
		height: 200rpx;
	}
	.shopItem .shopItemRight .shopTitle{
		font-size: 28rpx;
		line-height: 40rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.shopItem .shopItemRight .shopAttr{
		font-size: 24rpx;
		color: #999999;
		line-height: 40rpx;
	}
	.shopItem .shopItemRight .shopPrice{
		font-size: 28rpx;
		display: flex;
		justify-content: space-between;
		line-height: 80rpx;
		color: red;
	}
	.shopItem .shopItemRight .shopPrice .number{
		color: #999999;
	}
	
	.orderPrice{
		width: 695rpx;
		background: white;
		margin: 20rpx auto;
		padding: 25rpx 0;
		border-radius: 10rpx;
		height: auto;
		overflow: hidden;
	}
	.orderPriceItem{
		display: flex;
		height: 80rpx;
		align-items: center;
		justify-content: space-between;
		font-size: 28rpx;
		padding: 0 20rpx;
	}
	.orderMessage{
		margin: 0 20rpx;
		background: #f4f4f4;
		height: 70rpx;
		border-radius: 70rpx;
		display: flex;
		align-items: center;
	}
	.orderMessage input{
		font-size: 28rpx;
		margin-left: 30rpx;
	}
	.orderPriceItemPrice{
		color: #999999;
		display: flex;
		align-items: center;
	}
	.orderPriceItemPrice i{
		font-size: 32rpx;
		line-height: 80rpx;
	}
	
	.orderBottom{
		position: fixed;
		bottom: 0%;
		z-index: 9;
		background: #ffffff;
		height: 100rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.totalPrice{
		margin-left: 30rpx;
		font-size: 28rpx;
		color: #000000;
	}
	.orderBottomBtn{
		background: #00c2f5;
		width: 300rpx;
		height: 100rpx;
		text-align: center;
		font-size: 28rpx;
		color: white;
		line-height: 100rpx;
	}
</style>
