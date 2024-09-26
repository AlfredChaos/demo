<template>
	<view>
		<indexSwiper activeBtn="#0bc9fd" :content="detail.image" swiperHeight="525rpx"
		width="470rpx" height="470rpx"></indexSwiper>
		<view class="shopInfo">
			<view class="shopTitle">
				<label v-if="detail.tag==1">新品</label>
				<label v-if="detail.tag==2">热销</label>
				<label v-if="detail.tag==3">促销</label>
				{{detail.title}}
			</view>
			<view class="shopSummary">
				{{detail.summary}}
			</view>
			<view class="shopPriceSale">
				<view class="shopPrice"><text>￥</text>{{detail.price}}<label>￥{{detail.market_price}}</label></view>
				<view class="shopSale">月销量：{{detail.sale}}件</view>
			</view>
			<view class="shopAssure" @click="showService">
				<view class="shopAssureItem"
				v-for="(item,index) in detail.servicelist" :key="index">
				<template v-if="index<3">
					<i class="iconfont">&#xe60d;</i>{{item.title}}
				</template>
				</view>
				<view class="shopAssureMore">
					<i class="iconfont">&#xe60b;</i>
				</view>
			</view>

		</view>
		<view class="shopAttr" @click="showAttr(2)">
			<label>规格</label><text>{{$store.state.attrText}}</text>
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
			<parse :content="detail.content"
			:imageProp="{'domain':'www.mall.com', 'mode': 'widthFix'}"></parse>
		</view>
		<view class="shopSpecs" v-if="tab==1">
			<view class="specsTitle">
				基础信息
			</view>
			<view class="specsContent" v-for="(item,index) in detail.spec" :key="index">
				<view class="specsContentLeft">
					{{item.specname}}
				</view>
				<view class="specsContentRight">
					{{item.specvalue}}
				</view>
			</view>
		</view>
		<view style="height: 100rpx; width: 100%;" v-if="tab==1"></view>
		<view class="detailBottom">
			<view class="bottomItem">
				<view class="bottomItemIndex">
					<navigator url="../index/index" hover-class="none" open-type="switchTab">
						<image src="../../static/tabbar1.png" mode=""></image>
						<text>首页</text>
					</navigator>
				</view>
				<view class="bottomItemIndex">
					<navigator url="../cart/cart" hover-class="none" open-type="switchTab">
						<image src="../../static/tabbar3.png" mode=""></image>
						<text>购物车</text>
					</navigator>
				</view>
			</view>
			<view class="bottomButton cartButton" @click="showAttr(1)">
				加入购物车
			</view>
			<view class="bottomButton buyButton" @click="showAttr(2)">
				立即购买
			</view>
		</view>
		
		<detailService :content="detail.servicelist" @close="closeService" v-if="serviceFlag"></detailService>
		
		<detailAttr 
		:image="detail.mainimage"
		:price="detail.price"
		:attr="detail.checkAttr"
		:attrValue="detail.attr"
		:type="type"
		@close="closeAttr" v-if="attrFlag"></detailAttr>
		
	</view>
</template>

<script>
	import detailAttr from '../../pages/components/detailAttr.vue'
	import detailService from '../components/detailService.vue'
	import indexSwiper from '../components/indexSwiper.vue'
	import parse from '../components/gaoyia-parse/parse.vue'
	export default {
		data() {
			return {
				tab: 0,
				serviceFlag: false, //服务弹窗的显示隐藏
				attrFlag: false ,//属性弹窗的显示隐藏
				detail: [],
				type:2 //1表示加入购物车，2表示立即购买
			}
		},
		onLoad(option) {
			this.getData(option.id)
		},
		onBackPress() {
			this.$store.commit('defaultAttr')
		},
		components: {
			detailAttr,
			detailService,
			indexSwiper,
			parse
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
			},
			//显示属性弹窗
			showAttr(type){
				this.type = type;
				this.attrFlag = true;
			},
			//关闭属性弹窗
			closeAttr(){
				this.attrFlag = false;
			},
			getData(id){
				uni.request({
					url: this.$apiUrl+"index/detail/id/"+id,
					success: (res) => {
						console.log(res.data.data);
						this.detail = res.data.data;
					}
				})
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
		overflow: hidden;
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
		margin-right: 5rpx;
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
		width: 200rpx;
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
	
</style>
