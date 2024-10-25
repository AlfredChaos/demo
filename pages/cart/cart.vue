<template>
	<view v-if="show">
		<view class="cartEmpty" v-if="isLogin==0">
			<image src="../../cartEmpty.png" mode="" class="cartEmptyImg"></image>
			<view class="cartEmptyTip">
				亲，您需要登录才能查看购物车哦~
			</view>
			<navigator url="../login/login?backurl=1" class="cartLogin">
				立即登录
			</navigator>
		</view>
		<view v-else>
			<view class="cartEmpty" v-if="cartList.length==0">
				<image src="../../cartEmpty.png" mode="" class="cartEmptyImg"></image>
				<view class="cartEmptyTip">
					亲，您的购物车空空如也~
				</view>
			</view>
			<view class="cartListBox" v-else>
				<view class="cartList">
					<uni-swipe-action>
						<uni-swipe-action-item :right-options="options" @click="onClick($event, item.id, index)" 
						@change="swipeChange($event, 0)"
						v-for="(item, index) in cartList" :key="index">
							<view class="cartItem">
								<label @click="checkboxChange(index)">
									<image src="../../static/checkbox1.png" mode="" v-if="item.flag"></image>
									<image src="../../static/checkbox.png" mode="" v-else></image>
								</label>
								<view class="mainImage">
									<image :src="this.$imgUrl+item.mainimage" mode=""></image>
								</view>
								<view class="cartItemContent">
									<view class="contentTitle">
										{{item.title}}
									</view>
									<view class="contentAttr">
										{{item.attr_0}} {{item.attr_1}}
									</view>
									<view class="contentPrice">
										￥{{item.price}}
										<view class="numberOption">
											<view class="optionBtn" @click="reduce(index)">
												-
											</view>
											<view class="numberText">
												<input type="text" v-model="item.num"/>
											</view>
											<view class="optionBtn" @click="add(index)">
												+
											</view>
										</view>
									</view>
								</view>
							</view>
						</uni-swipe-action-item>
					</uni-swipe-action>
				</view>
				<view class="bottomEmpty"></view>
				<view class="cartBottom">
					<label @click="allCheckChange">
						<image src="../../static/checkbox1.png" mode="" v-if="allCheck"></image>
						<image src="../../static/checkbox.png" mode="" v-else></image>
						全选
					</label>
					<view class="cartBottomRight">
						总价:<text style="color: red;">￥{{getAllValue.price}}</text>
						<view class="payBtn">
							去结算<text>({{getAllValue.num}}件)</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSwipeAction from '../components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '../components/uni-swipe-action-item/uni-swipe-action-item.vue'
	export default {
		data() {
			return {
				options: [{
					text: '删除',
					style: {
						backgroundColor: '#ff0309'
					}
				}],
				cartList: [],
				isLogin: '',
				show: false
			}
		},
		computed: {
			allCheck(){
				var num = 0;
				for(var i=0; i<this.cartList.length; i++){
					if(this.cartList[i].flag == 1){
						num++
					}
				}
				if(num == this.cartList.length){
					return true;
				} else {
					return false
				}
			},
			getAllValue(){
				var num = 0;
				var price = 0;
				for(var i=0; i<this.cartList.length; i++){
					if(this.cartList[i].flag == 1){
						num += parseInt(this.cartList[i].num);
						price += parseInt(this.cartList[i].num) * parseFloat(this.cartList[i].price);
					}
				}
				return {num: num, price: price}
			}
		},
		components: {
			uniSwipeAction,
			uniSwipeActionItem
		},
		onShow() {
			this.getData()
		},
		onHide() {
			var temp = [];
			for(var i=0; i<this.cartList.length; i++){
				temp.push({
					'num': this.cartList[i].num,
					'attrid': this.cartList[i].attrid,
					'flag': this.cartList[i].flag
				})
			}
			this.$request(this.$apiUrl +'/member/savecart', {
				data: JSON.stringify(temp)
			}).then(res=>{
				console.log(res)
			})
		},
		methods: {
			getData(){
				this.$request(this.$apiUrl + '/member/cartlist')
				.then(res=>{
					console.log(res.data);
					this.cartList = res.data;
					if(res.tcode == 0){
						this.isLogin = 0
					} else {
						this.isLogin = 1
					}
					this.show = true
				})
			},
			onClick(e, id, index) {
				if(e.content.text == "删除"){
					uni.showModal({
						title: 提示,
						content: "您是否要删除购物车数据",
						success:(res)=>{
							if(res.confirm){
								this.cartList.splice(index, 1);
								this.$request(this.$apiUrl + '/member/delcart', {id: id})
								.then(res=>{
									console.log(res)
								})
							} else if(res.cancel){
								console.log("用户点击了取消")
							}
						}
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
			reduce(index){
				if(parseInt(this.cartList[index].num) == 1){
					return
				}
				this.cartList[index].num--
			},
			add(index){
				if(parseInt(this.cartList[index].num) >= parseInt(this.cartList[index].stock)){
					return
				}
				this.cartList[index].num++
			},
			checkboxChange(index){
				var temp = this.cartList[index].flag;
				this.cartList[index].flag = !temp
			},
			allCheckChange(){
				if(this.allCheck == true){
					for(var i=0; i<this.cartList.length; i++){
						this.cartList[i].flag = 0
					}
				} else {
					for(var i=0; i<this.cartList.length; i++){
						this.cartList[i].flag = 1
					}
				}
			}
		}
	}
</script>

<style>
	.cartEmptyImg{
		width: 296rpx;
		height: 296rpx;
		display: block;
		margin: 154rpx auto 0;
	}
	.cartEmptyTip{
		text-align: center;
		font-size: 28rpx;
		color: #999999;
		line-height: 160rpx;
	}
	.cartLogin{
		width: 315rpx;
		height: 80rpx;
		color: #ffffff;
		background: #23baef;
		font-size: 28rpx;
		line-height: 80rpx;
		text-align: center;
		margin: 0 auto;
	}
	
	.cartItem{
		display: flex;
		padding: 35rpx 20rpx 30rpx;
		border-top: 1rpx solid #e5e5e5;
	}
	.cartItem checkbox{
		transform: scale(0.7);
	}
	.cartItem label{
		display: flex;
		align-items: center;
	}
	.cartItem label image{
		width: 30rpx;
		height: 30rpx;
	}
	.mainImage image{
		width: 200rpx;
		height: 200rpx;
	}
	.contentTitle{
		font-size: 28rpx;
		line-height: 40rpx;
		height: 80rpx;
		/* 限制仅2行 */
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.contentAttr{
		font-size: 24rpx;
		color: #999999;
		line-height: 40rpx;
	}
	.contentPrice{
		height: 80rpx;
		display: flex;
		align-items: center;
		font-size: 28rpx;
		justify-content: space-between;
		color: red;
	}
	.numberOption{
		display: flex;
		width: 154rpx;
		border: 1rpx solid #e5e5e5;
	}
	.numberOption .optionBtn{
		width: 44rpx;
		font-size: 28rpx;
		color: #666666;
		text-align: center;
	}
	.numberOption .numberText{
		flex: 1;
		border-left: 1rpx solid #e5e5e5;
		border-right: 1rpx solid #e5e5e5;
	}
	.numberOption .numberText input{
		width: 100%;
		font-size: 28rpx;
		text-align: center;
		color: #666666;
	}
	
	.cartBottom{
		position: fixed;
		/* 底部高度 */
		bottom: var(--window-bottom);
		width: 100%;
		background: white;
		height: 106rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28rpx;
		border-top: 1rpx solid #e5e5e5;
	}
	.cartBottom label image{
		width: 30rpx;
		height: 30rpx;
		margin: 0 10rpx 0 20rpx;
	}
	.cartBottomRight{
		display: flex;
		align-items: center;
	}
	.cartBottomRight .payBtn{
		width: 230rpx;
		height: 80rpx;
		background: #0bbaef;
		color: #ffffff;
		margin: 0 20rpx;
		border-radius: 80rpx;
		line-height: 80rpx;
		text-align: center;
	}
	.cartBottomRight .payBtn text{
		font-size: 24rpx;
		
	}
	
	.bottomEmpty{
		height: var(--window-bottom);
	}
</style>
