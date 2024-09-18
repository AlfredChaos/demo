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
				<scroll-view class="cateNameList" scroll-y="true">
					<view class="cateNameItem cateActive">
						精品推荐1
						<view class="cateLine"></view>
					</view>
					<view class="cateNameItem">
						精品推荐2
						<view class="cateLine"></view>
					</view>
					<view class="cateNameItem">
						精品推荐3
						<view class="cateLine"></view>
					</view>
					<view class="cateNameItem cateActive">
						精品推荐1
						<view class="cateLine"></view>
					</view>
					<view class="cateNameItem">
						精品推荐2
						<view class="cateLine"></view>
					</view>
					<view class="cateNameItem">
						精品推荐3
						<view class="cateLine"></view>
					</view>
					<view class="cateNameItem cateActive">
						精品推荐1
						<view class="cateLine"></view>
					</view>
					<view class="cateNameItem">
						精品推荐2
						<view class="cateLine"></view>
					</view>
					<view class="cateNameItem">
						精品推荐3
						<view class="cateLine"></view>
					</view>
					<view class="cateNameItem cateActive">
						精品推荐1
						<view class="cateLine"></view>
					</view>
					<view class="cateNameItem">
						精品推荐2
						<view class="cateLine"></view>
					</view>
					<view class="cateNameItem">
						精品推荐3
						<view class="cateLine"></view>
					</view>
				</scroll-view>
			</view>
			<view class="cateRight">
				<scroll-view class="cateRightScroll" scroll-y="true">
					<view class="cateItem">
						<view class="cateRightTitle">
							——<text>精品推荐1</text>——
						</view>
						<view class="cateRightList">
							<view class="cateRightItem">
								<image src="../../static/commodity/p1.png" mode=""></image>
								<text>手机一</text>
							</view>
							<view class="cateRightItem">
								<image src="../../static/commodity/p2.png" mode=""></image>
								<text>手机二</text>
							</view>
							<view class="cateRightItem">
								<image src="../../static/commodity/p3.png" mode=""></image>
								<text>手机三</text>
							</view>
							<view class="cateRightItem">
								<image src="../../static/commodity/p4.png" mode=""></image>
								<text>手机四</text>
							</view>
							<view class="cateRightItem">
								<image src="../../static/commodity/p5.png" mode=""></image>
								<text>手机五</text>
							</view>
							<view class="cateRightItem">
								<image src="../../static/commodity/p6.png" mode=""></image>
								<text>手机六</text>
							</view>
						</view>
						</view>
					<view class="cateItem">
						<view class="cateRightTitle">
							——<text>精品推荐1</text>——
						</view>
						<view class="cateRightList">
							<view class="cateRightItem">
								<image src="../../static/commodity/p1.png" mode=""></image>
								<text>手机一</text>
							</view>
							<view class="cateRightItem">
								<image src="../../static/commodity/p2.png" mode=""></image>
								<text>手机二</text>
							</view>
							<view class="cateRightItem">
								<image src="../../static/commodity/p3.png" mode=""></image>
								<text>手机三</text>
							</view>
							<view class="cateRightItem">
								<image src="../../static/commodity/p4.png" mode=""></image>
								<text>手机四</text>
							</view>
						</view>
						
					</view>
					<view class="cateItem">
						<view class="cateRightTitle">
								——<text>精品推荐1</text>——
							</view>
							<view class="cateRightList">
								<view class="cateRightItem">
									<image src="../../static/commodity/p1.png" mode=""></image>
									<text>手机一</text>
								</view>
								<view class="cateRightItem">
									<image src="../../static/commodity/p2.png" mode=""></image>
									<text>手机二</text>
								</view>
								<view class="cateRightItem">
									<image src="../../static/commodity/p3.png" mode=""></image>
									<text>手机三</text>
								</view>
								<view class="cateRightItem">
									<image src="../../static/commodity/p4.png" mode=""></image>
									<text>手机四</text>
								</view>
								<view class="cateRightItem">
									<image src="../../static/commodity/p5.png" mode=""></image>
									<text>手机五</text>
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
				cate: []
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getData(){
				uni.request({
					url: "http://www.mall.com/api/index/cate",
					success: res=>{
						console.log(res.data.data),
						this.cate = res.data.data
					}
				})
			}
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
	}
	.cateRightList{
		height: auto;
		overflow: hidden;
	}
</style>
