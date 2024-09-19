<template>
	<view>
		<view class="search">
			<view class="searchBox">
				<navigator url="#">
					<image src="../../static/search/search.png" mode=""></image>
					搜索全部
				</navigator>
			</view>
		</view>
		
		<view class="cate">
			<view class="cateLeft">
				<scroll-view class="cateNameList" scroll-y="true"
				:scroll-top="scrollTop">
					<view class="cateNameItem"
					:class="{cateActive:index==current}"
					v-for="(item,index) in cate" :key="index"
					@click="menuTab(index)">
						{{item.catename}}
						<view class="cateLine"></view>
					</view>
				</scroll-view>
			</view>
			<view class="cateRight">
				<scroll-view class="cateRightScroll" scroll-y="true"
				:scroll-into-view="'cate'+mainCurrent"
				scroll-with-animation
				@scroll="rightScroll">
					<view class="cateItem"
					v-for="(item,index) in cate" :key="index"
					:id="'cate'+index">
						<view class="cateRightTitle">
							——<text>{{item.catename}}</text>——
						</view>
						<view class="cateRightList">
							<view class="cateRightItem"
							v-for="(child,childIndex) in item.product" :key="childIndex">
								<image :src="this.$imgUrl+child.mainimage" mode=""></image>
								<text>{{child.smalltitle}}</text>
							</view>
						</view>
					</view>
					<view style="height: 50rpx;width: 100%;"></view>
				</scroll-view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cate: [],
				current: 0,
				rectInfo: [],
				mainCurrent: 0,
				scrollTop: 0
			}
		},
		onLoad() {
			this.getData()
		},
		mounted() {
			// 延时
			setTimeout(()=>{
				this.getRectInfo();
				console.log(this.rectInfo);
			},200)
		},
		methods: {
			getData(){
				uni.request({
					url: "http://www.mall.com/api/index/cate",
					success: res=>{
						this.cate = res.data.data
					}
				})
			},
			// 菜单选择
			menuTab(index){
				this.current = index;
				this.mainCurrent = index;
				this.scrollTop = index * 50;
			},
			// 获取矩形信息
			getRectInfo(){
				var temp = 0;
				for(var i=0; i<this.cate.length; i++){
					var rectIndex = 0;
					let view = uni.createSelectorQuery().in(this).select("#cate"+i);
					view.fields({
						size: true,
						rect: true
					}, data=>{
						var top = temp;
						var bottom = temp + data.height;
						temp += data.height;
						this.rectInfo[rectIndex++] = {"top": top, "bottom": bottom};
					}).exec();
				}
			},
			// 滚动事件
			rightScroll(e) {
				var scrollTop = e.detail.scrollTop;
				for(var i=0; i<this.rectInfo.length; i++) {
					if(scrollTop > this.rectInfo[i].top && 
					scrollTop < this.rectInfo[i].bottom) {
						this.current = i;
						this.scrollTop = i * 50;
					}
				}
			},
		}
	}
</script>

<style>
	page{
		background-color: #f7f7f7;
	}
	.search{
		height: 110rpx;
		width: 100%;
		background: #ffffff;
		display: flex;
		justify-content: center;
	}
	.searchBox{
		width: 690rpx;
		height: 70rpx;
		border-radius: 10rpx;
		font-size: 28rpx;
		color: #999999;
		background: #f7f7f7;
	}
	.searchBox navigator{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 70rpx;
	}
	.searchBox image{
		width: 38rpx;
		height: 38rpx;
		margin-right: 12rpx;
	}
	.cate{
		position: absolute;
		top: 120rpx;
		bottom: 0;
		width: 100%;
		display: flex;
	}
	.cateLeft{
		width: 200rpx;
		background: #f7f7f7;
		height: 100%;
	}
	.cateNameList{
		height: 100%;
		overflow: auto;
	}
	.cateNameItem{
		font-size: 28rpx;
		color: #000000;
		line-height: 100rpx;
		text-align: center;
		position: relative;
	}
	.cateActive{
		background: #ffffff;
	}
	.cateLine{
		position: absolute;
		width: 4rpx;
		height: 30rpx;
		background: #f7f7f7;
		top: 35rpx;
	}
	.cateActive .cateLine{
		background-color: #10b6e8;
	}
	
	.cateRight{
		width: 550rpx;
		background: #ffffff;
		height: 100%;
	}
	.cateRightScroll{
		height: 100%;
		overflow: auto;
	}
	.cateRightTitle{
		line-height: 86rpx;
		padding-top: 16rpx;
		color: #999999;
		font-size: 28rpx;
		text-align: center;
	}
	.cateRightTitle text{
		padding: 0 30rpx;
	}
	.cateRightItem{
		width: 33.33%;
		float: left;
		margin-top: 20rpx;
	}
	.cateRightItem image{
		width: 160rpx;
		height: 160rpx;
		display: block;
		margin: 0 auto;
	}
	.cateRightItem text{
		line-height: 36rpx;
		font-size: 24rpx;
		text-align: center;
		display: block;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.cateRightList{
		height: auto;
		overflow: hidden;
	}
</style>
