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
				<view class="cateNameList">
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
				</view>
			</view>
			<view class="cateRight">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
		background: red;
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
	
</style>
