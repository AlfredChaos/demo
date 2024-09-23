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
			<view class="shopAssure" @click="showService">
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
		<!-- <view style="height: 100rpx; width: 100%;"></view> -->
		<view class="detailBottom">
			<view class="bottomItem">
				<view class="bottomItemIndex">
					<image src="../../static/tabbar1.png" mode=""></image>
					<text>首页</text>
				</view>
				<view class="bottomItemIndex">
					<image src="../../static/tabbar3.png" mode=""></image>
					<text>购物车</text>
				</view>
			</view>
			<view class="bottomButton cartButton">
				加入购物车
			</view>
			<view class="bottomButton buyButton">
				立即购买
			</view>
		</view>
		
		<detailService @close="closeService" v-if="serviceFlag"></detailService>
		
		<view class="attrDialog">
			<view class="bg"></view>
			<view class="attrDialogContent">
				<view class="contentTop">
					<image src="../../static/commodity/p1.png" mode=""></image>
					<view class="contentTopText">
						<text class="price">￥299.00</text>
						<text class="attr">魅族16S PRO，黑色</text>
					</view>
					<i class="iconfont">&#xe62b;</i>
				</view>
				<view class="attrList">
					<view class="attrItem">
						<view class="attrItemTitle">
							版本
						</view>
						<view class="attrItemValue">
							<view class="attrValueItem activeAttr">
								魅族16S Pro
							</view>
							<view class="attrValueItem">
								魅族16S Plus
							</view>
						</view>
					</view>
					<view class="attrItem">
						<view class="attrItemTitle">
							颜色
						</view>
						<view class="attrItemValue">
							<view class="attrValueItem activeAttr">
								黑色
							</view>
							<view class="attrValueItem">
								蓝色
							</view>
						</view>
					</view>
					<view class="attrItem">
						<view class="attrItemTitle">
							数量
						</view>
						<view class="attrItemValue">
							<view class="shopNumber">
								<view class="button">-</view>
								<view><input type="text" value="1" /></view>
								<view class="button">+</view>
							</view>
							<text class="stock">（库存：5件）</text>
						</view>
					</view>
				</view>
			</view>
			<view class="attrButton">
				立即购买
			</view>
		</view>
	</view>
</template>

<script>
	import detailService from '../components/detailService.vue'
	export default {
		data() {
			return {
				tab: 0,
				serviceFlag: false
			}
		},
		components: {
			detailService
		},
		methods: {
			tabChange(index){
				this.tab = index
			},
			// 显示服务弹窗
			showService(){
				this.serviceFlag = true;
			},
			// 关闭服务弹窗
			closeService() {
				this.serviceFlag = false;
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
	.detailBottom{
		height: 100rpx;
		width: 100%;
		background: #ffffff;
		position: fixed;
		bottom: 0;
		display: flex;
	}
	.bottomButton{
		width: 275rpx;
		color: #ffffff;
		font-size: 28rpx;
	}
	.bottomItem{
		flex: 1;
		display: flex;
	}
	.bottomItemIndex{
		width: 50%;
	}
	.bottomItemIndex image{
		width: 40rpx;
		height: 40rpx;
		display: block;
		margin: 0 auto;
		margin: 10rpx auto 0;
	}
	.bottomItemIndex text {
		font-size: 24rpx;
		color: #999999;
		text-align: center;
		display: block;
		height: 40rpx;
		line-height: 40rpx;
	}
	.cartButton{
		background: #0ebcef;
		text-align: center;
		line-height: 100rpx;
	}
	.buyButton{
		background: #017cfe;
		text-align: center;
		line-height: 100rpx;
	}
	
	.attrDialog{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
	.attrDialog .bg{
		background: rgb(0, 0, 0, 0.5);
		height: 100%;
		width: 100%;
	}
	.attrDialogContent{
		height: 1070rpx;
		position: absolute;
		bottom: 0;
		width: 100%;
		background: white;
	}
	.contentTop{
		height: 200rpx;
		position: relative;
		border-bottom: 1rpx solid #e5e5e5;
	}
	.contentTop i{
		position: absolute;
		top: 25rpx;
		right: 30rpx;
	}
	.contentTop image{
		position: absolute;
		top: -40rpx;
		left: 30rpx;
		width: 210rpx;
		height: 210rpx;
		background: white;
		border: 1rpx solid #e5e5e5;
	}
	.contentTopText{
		margin-left: 280rpx;
	}
	.contentTopText .price{
		height: 44rpx;
		color: #f0415f;
		font-size: 36rpx;
		display: block;
		line-height: 44rpx;
		padding-top: 24rpx;
	}
	.contentTopText .attr{
		font-size: 24rpx;
		color: #000000;
		line-height: 40rpx;
		height: 40rpx;
	}
	.attrList{
		padding: 0 30rpx;
	}
	.attrItemTitle {
		color: #999999;
		line-height: 70rpx;
		font-size: 28rpx;
	}
	.attrItem{
		height: auto;
		overflow: hidden;
	}
	.attrValueItem{
		padding: 0 30rpx;
		border: 1rpx solid #e5e5e5;
		height: 70rpx;
		line-height: 70rpx;
		float: left;
		font-size: 24rpx;
		color: #666666;
		margin-right: 30rpx;
	}
	.attrValueItem.activeAttr{
		color: #00c3f5;
		border-color: #00c3f5;
	}
	
	.shopNumber{
		width: 240rpx;
		height: 70rpx;
		line-height: 70rpx;
		border: 1rpx solid #e5e5e5;
		display: flex;
		float: left;
	}
	.shopNumber .button{
		width: 70rpx;
		line-height: 70rpx;
		text-align: center;
	}
	.shopNumber input{
		flex: 1;
		border-left: 1rpx solid #e5e5e5;
		border-right: 1rpx solid #e5e5e5;
		width: 100rpx;
		height: 70rpx;
		line-height: 70rpx;
		font-size: 24rpx;
		text-align: center;
	}
	.stock {
		height: 70rpx;
		line-height: 70rpx;
		font-size: 24rpx;
		color: #999999;
		margin-left: 20rpx;
	}
	.attrButton{
		height: 90rpx;
		line-height: 90rpx;
		position: absolute;
		bottom: 0;
		background: #0ebcef;
		font-size: 28rpx;
		width: 100%;
		text-align: center;
		color: white;
	}
</style>
