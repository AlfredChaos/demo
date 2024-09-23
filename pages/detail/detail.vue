<template>
	<view>
		<swiper class="detailSwiper" indicator-active-color="#0bc9fd" 
		indicator-color="#b3b3b3" :indicator-dots="true" 
		:autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/detail/dimg1.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/detail/dimg2.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/detail/dimg3.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/detail/dimg4.jpg" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="shopInfo">
			<view class="shopTitle">
				<label>新品</label>苹果（Apple）ipad2019新款第7代10.2英寸2018款9.7英寸air2更新版平板电脑 金色19款10.2英寸 32G WLAN版-标配
			</view>
			<view class="shopSummary">
				【11.11提前购，神券疯狂抢】平板抢券立减120元！下单抽万元豪礼~套餐晒图送蓝牙耳机~，每日0点、10点、15点、20点限量发券*点击抢券~
			</view>
			<view class="shopPriceSale">
				<view class="shopPrice"><text>￥</text>799.00<label>￥599.00</label></view>
				<view class="shopSale">月销量：5000件</view>
			</view>
			<view class="shopAssure">
				<view class="shopAssureItem">
					<i class="iconfont">&#xe60d;</i>全场包邮
				</view>
				<view class="shopAssureItem">
					<i class="iconfont">&#xe60d;</i>7天无理由退货（激活后不支持）
				</view>
				<view class="shopAssureMore">
					<i class="iconfont">&#xe60b;</i>
				</view>
			</view>

		</view>
		<view class="shopAttr">
			<label>规格</label><text>请选择商品规格尺寸</text>
			<i class="iconfont">&#xe60b;</i>
		</view>
		<view class="shopTable">
			<view class="shopTableItem" @click="tabChange(0)"
			:class="{tabActive:tab==0}">
				图文详情
			</view>
			<view class="shopTableItem" @click="tabChange(1)"
			:class="{tabActive:tab==1}">
				规格参数
			</view>
		</view>
		<view class="content" v-if="tab==0">
			<image src="../../static/detail/d1.jpg" mode="widthFix"></image>
			<image src="../../static/detail/d2.jpg" mode="widthFix"></image>
			<image src="../../static/detail/d3.jpg" mode="widthFix"></image>
		</view>
		<view class="shopSpecs" v-if="tab==1">
			<view class="specsTitle">
				基础信息
			</view>
			<view class="specsContent">
				<view class="specsContentLeft">
					品牌
				</view>
				<view class="specsContentRight">
					魅族
				</view>
			</view>
			<view class="specsContent">
				<view class="specsContentLeft">
					品牌
				</view>
				<view class="specsContentRight">
					魅族
				</view>
			</view>
			<view class="specsContent">
				<view class="specsContentLeft">
					品牌
				</view>
				<view class="specsContentRight">
					魅族
				</view>
			</view>
			<view class="specsContent">
				<view class="specsContentLeft">
					品牌
				</view>
				<view class="specsContentRight">
					魅族
				</view>
			</view>
			<view class="specsContent">
				<view class="specsContentLeft">
					品牌
				</view>
				<view class="specsContentRight">
					魅族
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tab: 0
			}
		},
		methods: {
			tabChange(index){
				this.tab = index
			}
		}
	}
</script>

<style>
	.detailSwiper{
		width: 100%;
		height: 525rpx;
	}
	.detailSwiper image{
		width: 470rpx;
		height: 470rpx;
		display: block;
		margin: 0 auto;
	}
	.shopInfo{
		padding: 0 30rpx;
		border-top: 1rpx solid #e9e9e9;
	}
	.shopTitle{
		line-height: 40rpx;
		font-size: 28rpx;
		color: black;
		padding-top: 24rpx;
	}
	.shopTitle label{
		display: block;
		width: 64rpx;
		height: 40rpx;
		color: white;
		background-color: #18bfe1;
		float: left;
		text-align: center;
		margin-right: 10rpx;
	}
	.shopSummary {
		font-size: 24rpx;
		color: #9a9a9a;
		line-height: 35rpx;
		padding-top: 10rpx;
	}
	.shopPriceSale{
		line-height: 83rpx;
		height: 83rpx;
		display: flex;
		justify-content: space-between;
		color: #999999;
		font-size: 28rpx;
		border-bottom: 1rpx solid #e9e9e9;
	}
	.shopPrice{
		font-size: 36rpx;
		color: #f0415f;
	}
	.shopPrice label{
		font-size: 28rpx;
		color: #999999;
		text-decoration: line-through;
		margin-left: 10rpx;
	}
	.shopAssure{
		height: 80rpx;
		align-items: center;
		line-height: 80rpx;
	}
	.shopAssureItem{
		font-size: 24rpx;
		color: #999999;
		float: left;
		margin-right: 20rpx;
	}
	.shopAssureItem i{
		font-size: 30rpx;
		color: #00c3f5;
	}
	.shopAssureMore{
		float: right;
		color: #999999;
	}
	.shopAttr{
		line-height: 90rpx;
		padding: 0 30rpx;
		border-top: 20rpx solid #f7f7f7;
		border-bottom: 20rpx solid #f7f7f7;
		font-size: 29rpx;
		color: #999999;
	}
	.shopAttr label{
		font-size: 28rpx;
	}
	.shopAttr text{
		color: #000000;
		margin-left: 24rpx;
	}
	.shopAttr i{
		float: right;
		color: #999999;
	}
	.shopTable {
		height: 80rpx;
		display: flex;
		align-items: center;
		border-bottom: 1rpx solid #e5e5e5;
	}
	.shopTableItem{
		width: 50%;
		text-align: center;
		font-size: 28rpx;
		font-weight: 700;
	}
	.tabActive{
		color: #00c3f5;
	}
	.content image{
		width: 100%;
	}
	.shopSpecs{
		margin: 20rpx 30rpx;
		border: 1rpx solid #e9e9e9;
	}
	.specsTitle{
		line-height: 75rpx;
		height: 75rpx;
		background: #f7f7f7;
		font-size: 28rpx;
		color: #000000;
		text-indent: 30rpx;
	}
	.specsContent{
		display: flex;
		line-height: 80rpx;
		border-bottom: 1rpx solid #e9e9e9;
	}
	.specsContentLeft{
		width: 110rpx;
		text-align: center;
		font-size: 24rpx;
		color: #999999;
	}
	.specsContentRight{
		flex: 1;
		text-align: center;
		font-size: 24rpx;
		color: #000000;
	}
</style>
