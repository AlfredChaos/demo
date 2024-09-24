<template>
	<view class="shopList">
		<view class="shopListItem" v-for="(item,index) in content" :key="index">
			<navigator hover-class="none" :url="'../detail/detail?id='+item.id">
				<image :src="this.$imgUrl+item.mainimage" class="shopImg" mode=""></image>
				<view class="shopTitle">
					{{item.smalltitle}}
				</view>
				<view class="shopActive">
					<view class="shopActiveLab" v-if="item.tag==1">
						免息
					</view>
					<view class="shopActiveLab" v-if="item.tag==2">
						热销
					</view>
					<view class="shopActiveLab" v-if="item.tag==3">
						促销
					</view>
					<view class="shopActiveText">
						{{item.summary}}
					</view>
				</view>
				<view class="shopPrice">
					¥{{item.price}}
				</view>
			</navigator>
		</view>
	</view>
	
</template>

<script>
	export default{
		props: ['content']
	}
</script>

<style>
	.shopList{
		display: flex;
		justify-content: space-between;
		/* 换行 */
		flex-wrap: wrap;
	}
	.shopListItem{
		width: 370rpx;
		height: 540rpx;
		background: white;
		overflow: hidden;
		margin-top: 10rpx;
	}
	.shopListItem .shopImg{
		height: 316rpx;
		width: 316rpx;
		display: block;
		margin: 40rpx auto 0 ;
	}
	.shopListItem .shopTitle{
		line-height: 50rpx;
		height: 50rpx;
		font-size: 28rpx;
		text-align: center;
	}
	.shopListItem .shopActive{
		height: 40rpx;
		width: 346rpx;
		margin: 0 auto;
		border: 1rpx solid #d9000b;
		display: flex;
	}
	.shopActiveLab{
		width: 70rpx;
		background: #d9000b;
		font-size: 24rpx;
		color: white;
		text-align: center;
		line-height: 42rpx;
	}
	.shopActiveText{
		width: 276rpx;
		font-size: 24rpx;
		color: #d9000b;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: 42rpx;
		padding-left: 10rpx;
	}
	.shopPrice{
		font-size: 28rpx;
		color: #d9000b;
		line-height: 80rpx;
		text-align: center;
	}
</style>