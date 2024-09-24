<template>
	<view class="attrDialog">
		<view class="bg"></view>
		<view class="attrDialogContent">
			<view class="contentTop">
				<image :src="this.$imgUrl+image" mode=""></image>
				<view class="contentTopText">
					<text class="price">￥{{currentPrice}}</text>
					<text class="attr">{{checkAttr}}</text>
				</view>
				<i class="iconfont" @click="closeDialog">&#xe62b;</i>
			</view>
			<view class="attrList">
				<view class="attrItem" v-for="(item,index) in attr" :key="index">
					<view class="attrItemTitle">
						{{item.attrname}}
					</view>
					<view class="attrItemValue">
						<!-- activeAttr -->
						<view class="attrValueItem"
						v-for="(child,childIndex) in item.value" :key="childIndex"
						:class="{activeAttr:valueIndex[index]==childIndex}"
						@click="attrCheck(index, childIndex)">
							{{child}}
						</view>
					</view>
				</view>
				<view class="attrItem">
					<view class="attrItemTitle">
						数量
					</view>
					<view class="attrItemValue">
						<view class="shopNumber">
							<view class="button" @click="reduce">-</view>
							<view><input type="text" v-model="number" disabled=""/></view>
							<view class="button" @click="add">+</view>
						</view>
						<text class="stock">（库存：{{stock}}件）</text>
					</view>
				</view>
			</view>
		</view>
		<view class="attrButton">
			{{buttonText}}
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				valueIndex: [],
				checkAttr: '',
				currentPrice: '',
				stock: '',
				number: 1,
				buttonText: ""
			}
		},
		mounted() {
			for(var i=0; i<this.attr.length; i++){
				this.valueIndex.push(0)
			}
			this.checkAttr = this.getValue().toString();
			this.getPrice(this.getValue());
			
			if(this.type == 1){
				this.buttonText = "加入购物车"
			} else {
				this.buttonText = "立即购买"
			}
		},
		props:['image', 'price', 'attr', 'attrValue', 'type'],
		methods: {
			closeDialog(){
				this.$emit('close')
			},
			attrCheck(index, childIndex){
				this.valueIndex.splice(index, 1, childIndex);
				var valueCheck = this.getValue();
				this.checkAttr = valueCheck.toString();
				this.getPrice(valueCheck);
			},
			getPrice(valueCheck){
				var temp = []
				for(var i=0; i<this.attrValue.length; i++){
					if(this.attrValue[i]['attr_0'] == valueCheck[0] && this.attrValue[i]['attr_1'] == valueCheck[1]){
						temp.push(this.attrValue[i]);
					}
				}
				this.currentPrice = temp[0].price
				this.stock = temp[0].stock
			},
			getValue(){
				var temp = [];
				for(var i=0; i<this.attr.length; i++) {
					for(var j=0; j<this.attr[i].value.length; j++){
						temp.push(this.attr[i].value[this.valueIndex[i]]);
						break;
					}
				}
				return temp;
			},
			reduce(){
				if (this.number==1){
					return;
				}
				this.number--
			},
			add(){
				if(this.number >= this.stock){
					this.number = this.stock;
					return;
				}
				this.number++
			}
		}
	}
</script>

<style>
	.attrDialog{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
	.attrDialog .bg{
		background: rgb(0, 0, 0, 0.5);
		height: 100%;
		width: 100%;
	}
	.attrDialogContent{
		height: 1070rpx;
		position: absolute;
		bottom: 0;
		width: 100%;
		background: white;
	}
	.contentTop{
		height: 200rpx;
		position: relative;
		border-bottom: 1rpx solid #e5e5e5;
	}
	.contentTop i{
		position: absolute;
		top: 25rpx;
		right: 30rpx;
	}
	.contentTop image{
		position: absolute;
		top: -40rpx;
		left: 30rpx;
		width: 210rpx;
		height: 210rpx;
		background: white;
		border: 1rpx solid #e5e5e5;
	}
	.contentTopText{
		margin-left: 280rpx;
	}
	.contentTopText .price{
		height: 44rpx;
		color: #f0415f;
		font-size: 36rpx;
		display: block;
		line-height: 44rpx;
		padding-top: 24rpx;
	}
	.contentTopText .attr{
		font-size: 24rpx;
		color: #000000;
		line-height: 40rpx;
		height: 40rpx;
	}
	.attrList{
		padding: 0 30rpx;
	}
	.attrItemTitle {
		color: #999999;
		line-height: 70rpx;
		font-size: 28rpx;
	}
	.attrItem{
		height: auto;
		overflow: hidden;
	}
	.attrValueItem{
		padding: 0 30rpx;
		border: 1rpx solid #e5e5e5;
		height: 70rpx;
		line-height: 70rpx;
		float: left;
		font-size: 24rpx;
		color: #666666;
		margin-right: 30rpx;
	}
	.attrValueItem.activeAttr{
		color: #00c3f5;
		border-color: #00c3f5;
	}
	
	.shopNumber{
		width: 240rpx;
		height: 70rpx;
		line-height: 70rpx;
		border: 1rpx solid #e5e5e5;
		display: flex;
		float: left;
	}
	.shopNumber .button{
		width: 70rpx;
		line-height: 70rpx;
		text-align: center;
	}
	.shopNumber input{
		flex: 1;
		border-left: 1rpx solid #e5e5e5;
		border-right: 1rpx solid #e5e5e5;
		width: 100rpx;
		height: 70rpx;
		line-height: 70rpx;
		font-size: 24rpx;
		text-align: center;
	}
	.stock {
		height: 70rpx;
		line-height: 70rpx;
		font-size: 24rpx;
		color: #999999;
		margin-left: 20rpx;
	}
	.attrButton{
		height: 90rpx;
		line-height: 90rpx;
		position: absolute;
		bottom: 0;
		background: #0ebcef;
		font-size: 28rpx;
		width: 100%;
		text-align: center;
		color: white;
	}
</style>
