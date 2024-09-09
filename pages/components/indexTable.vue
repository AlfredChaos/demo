<template>
	<view class="floorTable">
		<view class="tableItem">
			<image src="../../static/shopNav/cateRecommend1.jpg"  mode=""></image>
		</view>
		<view class="tableItem" style="background: #7064ca;">
			<view class="tableBigTitle">
				MEIZU UR 高端定制耳机 预约
			</view>
			<view class="tableSmallTitle">
				预约专用私人定制，为你而声预约专用私人定制为你而声预约专用私人定制
			</view>
			<view class="tableLine"></view>
			<view class="tablePrice">
				¥ 200
			</view>
		</view>
		<view class="tableItem" style="background: #f65c5c;">
			<view class="tableBigTitle">
				MEIZU UR 高端定制耳机 预约
			</view>
			<view class="tableSmallTitle">
				预约专用私人定制，为你而声预约专用私人定制为你而声预约专用私人定制
			</view>
			<view class="tableLine"></view>
			<view class="tablePrice">
				¥ 200
			</view>
		</view>
		<view class="tableItem">
			<image src="../../static/shopNav/cateRecommend2.jpg"  mode=""></image>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.floorTable{
		display: flex;
		flex-wrap: wrap;
	}
	.tableItem{
		width: 50%;
		height: 330rpx;
	}
	.tableItem image{
		width: 100%;
		height: 330rpx;
	}
	.tableBigTitle {
		font-size: 30rpx;
		line-height: 46rpx;
		color: white;
		padding-top: 30rpx;
		padding-left: 30rpx;
		padding-right: 100rpx;
	}
	.tableSmallTitle{
		line-height: 30rpx;
		color: rgba(255, 255, 255, 0.8);
		font-size: 22rpx;
		padding-left: 30rpx;
		padding-right: 40rpx;
		padding-top: 15rpx;
		/* 多行省略 */
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;	/* 指定行数 */
		-webkit-box-orient: vertical;
	}
	.tableLine{
		width: 34rpx;
		height: 5rpx;
		background: white;
		margin-left: 30rpx;
		margin-top: 20rpx;
	}
	.tablePrice{
		font-size: 36rpx;
		margin-left: 30rpx;
		line-height: 100rpx;
		color: rgba(255, 255, 255, 0.8);
	}
</style>