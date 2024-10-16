<template>
	<view class="">
		<view class="addressList">
			<uni-swipe-action>
				<uni-swipe-action-item :right-options="options" @click="onClick" @change="swipeChange($event, 0)">
					<view class="addressItem">
						<view class="addressMain">
							<text class="username">Alfred</text>
							<text class="telphone">18888888888</text>
							<text class="default">默认</text>
						</view>
						<view class="addressInfo">
							广东省深圳市广东省深圳市广东省深圳市广东省深圳市广东省深圳市广东省深圳市广东省深圳市
						</view>
					</view>
				</uni-swipe-action-item>
			</uni-swipe-action>
		</view>
		<view style="height: 90rpx;"></view>
		<view class="addBtn">
			添加新地址
		</view>
	</view>
</template>

<script>
	import uniSwipeAction from '../../pages/components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '../../pages/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	export default{
		components: {
			uniSwipeAction,
			uniSwipeActionItem
		},
		data(){
			return{
				options: [{
					text: '删除',
					style: {
						backgroundColor: '#ff0309'
					}
				}, {
					text: '编辑',
					style: {
						backgroundColor: '#0bbbef'
					}
				}]
			}
		},
		methods: {
			onClick(e) {
				console.log('点击了' + (e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮')
			},
			change(event) {
				console.log('改变事件', event);
			},
			swipeChange(e, index) {
				console.log('当前状态：' + e + '，下标：' + index)
			}
		}
	}
</script>

<style>
	.addressItem{
		padding: 0 35rpx;
		border-bottom: 1rpx solid #e5e5e5;
	}
	.addressMain{
		line-height: 40rpx;
		font-size: 28rpx;
		padding-top: 30rpx;
	}
	.addressMain .telphone{
		padding: 0 20rpx 0 10rpx;
	}
	.addressMain .default{
		background: #1fc8f2;
		color: white;
		font-size: 20rpx;
		padding: 0 10rpx;
	}
	.addressInfo{
		font-size: 24rpx;
		line-height: 36rpx;
		color: #999999;
		padding-bottom: 36rpx;
	}
	.addBtn{
		height: 90rpx;
		position: fixed;
		bottom: 0;
		width: 100%;
		left: 0;
		background: #0bbbef;
		color: white;
		text-align: center;
		line-height: 90rpx;
		font-size: 28rpx;
	}
</style>