<template>
	<view class="status"></view>
	<view class="header">
		<view class="navbar">
			<view class="search">
				<image src="../../static/topNavigation/search.png" mode=""></image>
			</view>
			<view class="logo">
				<image src="../../static/topNavigation/logo.png" mode=""></image>
			</view>
			<view class="shopping">
				<image src="../../static/topNavigation/shopping.png" mode=""></image>
			</view>
		</view>
		<view class="menuTab">
			<view class="menuTabItem menuActive">
				推荐
			</view>
			<view class="menuTabItem" v-for="(item,index) in content" :key="index">
				{{item.catename}}
			</view>
		</view>
	</view>
	<view class="headerEmpty"></view>
</template>

<script>
	export default{
		props: ['content']
	}
</script>

<style>
	.header{
		height: 180rpx;
		position: fixed;
		width: 100%;
		background: #ffffff;
		z-index: 9;
		top: var(--status-bar-height);
	}
	.status{
		height: var(--status-bar-height);
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 9;
		background: #ffffff;
	}
	.navbar{
		height: 110rpx;
		display: flex;
		margin-left: 20rpx;
		margin-right: 20rpx;
		/* 垂直居中 */
		align-items: center;
		/* 两端对齐 */
		justify-content: space-between;
	}
	.navbar .search image, .navbar .shopping image{
		width: 30rpx;
		height: 30rpx;
	}
	.navbar .logo image{
		width: 140rpx;
		height: 30rpx;
	}
	.menuTab{
		height: 70rpx;
		display: flex;
		margin-left: 20rpx;
		margin-right: 20rpx;
		justify-content: space-between;
	}
	.menuTab .menuTabItem{
		/* 设计数据乘以2 */
		font-size: 28rpx;
		color: #000000;
		height: 55rpx;
		width: 60rpx;
		line-height: 55rpx;
	}
	.menuTab .menuTabItem.menuActive{
		color: #0bbbef;
		border-bottom: 1rpx solid #0bbbef;
	}
	.headerEmpty{
		height: 180rpx;
	}
</style>