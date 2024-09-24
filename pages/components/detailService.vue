<template>
	<view class="service">
			<view class="bg"></view>
			<view class="serviceContent">
				<view class="serviceContentTitle">
					服务说明<i class="iconfont" @click="closeBtn">&#xe62b;</i>
				</view>
				<view class="serviceList">
					<view class="serviceItem" v-for="(item,index) in content" :key="index">
						<view class="serviceItemTitle">
							<!-- <i class="iconfont">&#xe8af;</i> -->
							<image :src="this.$imgUrl+item.image" mode=""></image>
							<text>{{item.title}}</text>
						</view>
						<view class="serviceItemContent">
							{{item.summary}}
						</view>
					</view>
				</view>
			</view>
			<view class="serviceBotton" @click="closeBtn">
				确定
			</view>
		</view>
	
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props: ['content'],
		methods: {
			closeBtn() {
				// 子组件向父组件传值
				this.$emit('close');
			}
		}
	}
</script>

<style>
	.service{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
	.bg{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.5);
	}
	.serviceContent{
		position: absolute;
		height: 1070rpx;
		background: white;
		bottom: 0;
		width: 100%;
}
	.serviceContentTitle{
		height: 110rpx;
		text-align: center;
		font-size: 32rpx;
		line-height: 110rpx;
		position: relative;
	}
	.serviceContentTitle i{
		position: absolute;
		top: 40rpx;
		right: 30rpx;
		line-height: 40rpx;
	}
	.serviceItem{
		border-bottom: 1rpx solid #e7e7e7;
		padding-bottom: 34rpx;
	}
	.serviceItemTitle{
		line-height: 60rpx;
		display: flex;
		align-items: center;
	}
	.serviceItemTitle i{
		margin-left: 20rpx;
		margin-right: 10rpx;
		color: #95e1df;
		font-size: 24rpx;
	}
	.serviceItemTitle image{
		width: 30rpx;
		height: 30rpx;
		margin-left: 20rpx;
		margin-right: 10rpx;
	}
	.serviceItemTitle text{
		font-size: 28rpx;
	}
	.serviceItemContent{
		font-size: 24rpx;
		color: #999999;
		line-height: 34rpx;
		padding: 0 50rpx;
	}
	.serviceBotton{
		position: absolute;
		bottom: 0;
		height: 90rpx;
		background: #00c3f5;
		font-size: 28rpx;
		color: #ffffff;
		width: 100%;
		text-align: center;
		line-height: 90rpx;
	}
</style>
