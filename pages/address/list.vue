<template>
	<view class="" v-if="show">
		<view class="addressList" v-if="addressList && addressList.length>0">
			<uni-swipe-action>
				<uni-swipe-action-item :right-options="options" @click="onClick($event, index, item.id)" @change="swipeChange($event, 0)"
				v-for="(item,index) in addressList" :key="index">
					<view class="addressItem">
						<view class="addressMain">
							<text class="username">{{item.username}}</text>
							<text class="telphone">{{item.telphone}}</text>
							<text class="default" v-if="item.default==1">默认</text>
						</view>
						<view class="addressInfo">
							{{item.city}}{{item.address}}
						</view>
					</view>
				</uni-swipe-action-item>
			</uni-swipe-action>
		</view>
		<view class="empty" v-else>
			<image src="../../static/address.png" mode=""></image>
			<text>用户没有收货地址，请添加</text>
		</view>
		<view style="height: 90rpx;"></view>
		<view class="addBtn" @click="addUrl">
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
				show: false,
				addressList: [],
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
		onLoad(){
			this.getData()
		},
		methods: {
			onClick(e, index, id) {
				if(e.content.text == "删除"){
					console.log(index, e.content.text);
					uni.showModal({
						title: '提示',
						content: '是否要删除对应数据',
						success: res=> {
							if (res.confirm) {
								this.addressList.splice(index, 1);
								this.$request(this.$apiUrl + '/member/addressDel', {
									id: id
								}).then(res=>{
									console.log(res);
								})
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					})
				}
				if(e.content.text == "编辑"){
					uni.navigateTo({
						url: "edit?id=" + id
					})
				}
				
				console.log('点击了' + (e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮')
			},
			change(event) {
				console.log('改变事件', event);
			},
			swipeChange(e, index) {
				console.log('当前状态：' + e + '，下标：' + index)
			},
			addUrl(){
				uni.navigateTo({
					url: "add"
				})
			},
			getData(){
				this.$request(this.$apiUrl + "/member/addressList")
				.then(res=>{
					this.addressList = res.data;
					this.show = true;
				})
			}
		}
	}
</script>

<style>
	.empty image{
		width: 330rpx;
		height: 210rpx;
		display: block;
		margin: 200rpx auto 0;
	}
	.empty text{
		font-size: 24rpx;
		color: #999999;
		line-height: 80rpx;
		text-align: center;
		display: block;
	}
	.addressItem{
		padding: 0 35rpx;
		border-bottom: 1rpx solid #e5e5e5;
		width: 100%;
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