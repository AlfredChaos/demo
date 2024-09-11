<template>
	<view class="content">
		
		<!-- 顶部导航 -->
		<topNavigation :content="recommend_cate"></topNavigation>
		<!-- 首页轮播 -->
		<indexSwiper :content="banner"></indexSwiper>
		<!-- 商品服务和商品导航 -->
		<indexService :active="active" :icon="icon"></indexService>
		<!-- 首页广告 -->
		<indexAd :content="ad"></indexAd>
		<view class="floor" v-for="(item,index) in floor" :key="index">
			<titleVue :name="item.content[0].title"></titleVue>
			<template v-if="item.content.length==1">
				<view class="adImage">
					<image :src="this.$imgUrl+item.content[0].img"  class="adImage" mode=""></image>
				</view>
			</template>
			<template v-else>
				<indexTable :content="item.content"></indexTable>
			</template>
			
			<shopList :content="item.product"></shopList>
		</view>
		
	</view>
</template>

<script>
	import topNavigation from '../components/topNavigation.vue'
	import indexSwiper from '../components/indexSwiper.vue'
	import indexService from '../components/indexService.vue'
	import indexAd from '../components/indexAd.vue'
	import titleVue from '../components/title.vue'
	import shopList from '../components/shopList.vue'
	import indexTable from '../components/indexTable.vue'
	export default {
		data() {
			return {
				// 轮播图
				banner: [],
				// 顶部推荐分类
				recommend_cate: [],
				active: [],
				icon: [],
				ad: [],
				floor: [],
			}
		},
		components: {
			topNavigation,
			indexSwiper,
			indexService,
			indexAd,
			titleVue,
			shopList,
			indexTable
		},
		onLoad() {
			this.getData();
		},
		methods: {
			getData(){
				uni.request({
					// mumu模拟器
				    // url: 'http://192.168.5.9:80/mall/public/api/index', //仅为示例，并非真实接口地址。
					url: 'http://www.mall.com/api/index',
				    success: (res) => {
				        console.log(res.data.data);
						var data = res.data.data;
						this.recommend_cate = data.recommend_cate;
						this.banner = data.banner;
						this.active = data.active;
						this.icon = data.icon;
						this.ad = data.floor;
						this.floor = data.cate;
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

</style>
