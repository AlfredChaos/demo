<template>
	<view class="content">
		
		<!-- 顶部导航 -->
		<topNavigation :content="recommend_cate"></topNavigation>
		<!-- 首页轮播 -->
		<indexSwiper :content="banner"></indexSwiper>
		<!-- 商品服务和商品导航 -->
		<indexService></indexService>
		<!-- 首页广告 -->
		<indexAd></indexAd>
		<view class="floor">
			<titleVue name="智能手机"></titleVue>
			<view class="adImage">
				<image src="../../static/ad/cate1Ad.jpg"  class="adImage" mode=""></image>
			</view>
			<view class="shopList">
				<shopItem></shopItem>
				<shopItem></shopItem>
				<shopItem></shopItem>
				<shopItem></shopItem>
			</view>
		</view>
		<view class="floor">
			<titleVue name="魅族声乐"></titleVue>
			<indexTable></indexTable>
			<view class="shopList">
				<shopItem></shopItem>
				<shopItem></shopItem>
				<shopItem></shopItem>
				<shopItem></shopItem>
			</view>
		</view>
		<view class="floor">
			<titleVue name="智能配件"></titleVue>
			<indexTable></indexTable>
			<view class="shopList">
				<shopItem></shopItem>
				<shopItem></shopItem>
				<shopItem></shopItem>
				<shopItem></shopItem>
			</view>
		</view>
		
	</view>
</template>

<script>
	import topNavigation from '../components/topNavigation.vue'
	import indexSwiper from '../components/indexSwiper.vue'
	import indexService from '../components/indexService.vue'
	import indexAd from '../components/indexAd.vue'
	import titleVue from '../components/title.vue'
	import shopItem from '../components/shopItem.vue'
	import indexTable from '../components/indexTable.vue'
	export default {
		data() {
			return {
				// 轮播图
				banner: [],
				// 顶部推荐分类
				recommend_cate: []
			}
		},
		components: {
			topNavigation,
			indexSwiper,
			indexService,
			indexAd,
			titleVue,
			shopItem,
			indexTable
		},
		onLoad() {
			this.getData();
		},
		methods: {
			getData(){
				uni.request({
				    url: 'http://www.mall.com/api/index', //仅为示例，并非真实接口地址。
				    success: (res) => {
				        console.log(res.data.data);
						var data = res.data.data;
						this.recommend_cate = data.recommend_cate;
						this.banner = data.banner;
				    }
				});
			}
		}
	}
</script>

<style>
	page{
		background: #f4f4f4;
	}
	.adImage{
		height: 344rpx;
		width: 100%;
	}
	.adImage image{
		height: 344rpx;
		width: 100%;
	}
	.shopList{
		display: flex;
		justify-content: space-between;
		/* 换行 */
		flex-wrap: wrap;
	}
	
	
</style>
