<template>
	<view class="">
		<view class="username">
			<view class="itemTitle">
				收货人:
			</view>
			<input type="text" v-model="username" placeholder="收货人姓名"/>
		</view>
		<view class="addressItem">
			<view class="itemTitle">
				
			</view>
			<text :class="{sexActive:sex==0}" @click="sexChange(0)">先生</text>
			<text :class="{sexActive:sex==1}" @click="sexChange(1)">女士</text>
		</view>
		<view class="addressItem">
			<view class="itemTitle">
				电话号码:
			</view>
			<input type="text" v-model="telphone" placeholder="收货人的联系电话"/>
		</view>
		<view class="addressItem">
			<view class="itemTitle">
				收获地址:
			</view>
			<view class="content">
				<pickerAddress class="city" @change="changeLocation">{{city}}</pickerAddress>
			</view>
		</view>
		<view class="addressBox">
			<view class="itemTitle">
				详细地址:
			</view>
			<textarea v-model="address" placeholder="请输入详细地址"></textarea>
		</view>
		<view class="defaultItem">
			<view class="itemTitle">
				默认地址:
			</view>
			<template v-if="defaultAddress==1">
				<switch @change="defaultChange" checked="true" color="#0bbbef"
				style="transform:scale(0.8);"/>
			</template>
			<template v-else>
				<switch @change="defaultChange" color="#0bbbef"
				style="transform:scale(0.8);"/>
			</template>
		</view>
		<view class="saveAddress" @click="editAddress">
			保存收货地址
		</view>
	</view>
</template>

<script>
	import pickerAddress from '../../components/pickerAddress/pickerAddress.vue'
	export default{
		data() {
			return {
				city: '请选择收货地址',
				username: "",
				telphone: '',
				address: '',
				defaultAddress: 1,
				sex: 0,
				aid: 0
			}
		},
		components:{
			pickerAddress
		},
		onLoad(option){
			console.log(option.id);
			this.aid = option.id;
			this.getAddress(option.id);
		},
		methods: {
			getAddress(id){
				this.$request(this.$apiUrl+'member/getAddressInfo',{
					id: id
				}).then(res=>{
					this.username = res.data.username;
					this.telphone = res.data.telphone;
					this.address = res.data.address;
					this.defaultAddress = res.data.default;
					this.sex = res.data.sex;
					this.city = res.data.city;
					this.address = res.data.address;
					console.log(res)
				})
			},
			defaultChange: function(e){
				console.log(e);
				if(e.detail.value == true){
					this.defaultAddress = 1
				} else {
					this.defaultAddress = 0
				}
				console.log(this.defaultAddress)
			},
			changeLocation(location) {
				if (location.data){
					this.city = location.data.join('')
				}
			},
			editAddress(){
				// 验证表单
				if(!this.check.username(this.username)){
					return;
				}
				if(!this.check.telphone(this.telphone)){
					return;
				}
				if(!this.check.city(this.city)){
					return;
				}
				if(!this.check.address(this.address)){
					return;
				}
				
				this.$request(this.$apiUrl + '/member/addressEdit', {
					username: this.username,
					telphone: this.telphone,
					city: this.city,
					address: this.address,
					defaultAddress: this.default, // 0表示不默认，1表示默认 
					sex: this.sex ,// 0表示先生，1表示女士
					id: this.aid,
				}).then(res=>{
					console.log(res);
					uni.showToast({
						icon: "none",
						title: res.msg
					})
				})
			},
			sexChange(index){
				this.sex = index
			}
		},
	}
</script>

<style>
	.username{
		padding: 0 30rpx;
		display: flex;
		line-height: 90rpx;
		align-items: center;
	}
	.itemTitle{
		width: 140rpx;
		font-size: 28rpx;
	}
	.username input{
		border-bottom: 1rpx solid #e5e5e5;
		flex: 1;
		line-height: 90rpx;
		height: 90rpx;
		font-size: 28rpx;
	}
	.addressItem{
		display: flex;
		margin: 0 30rpx;
		height: 90rpx;
		align-items: center;
		border-bottom: 1rpx solid #e5e5e5;
	}
	.addressItem text{
		line-height: 45rpx;
		height: 45rpx;
		width: 80rpx;
		display: block;
		border: 1rpx solid #e5e5e5;
		font-size: 24rpx;
		text-align: center;
		margin-right: 10rpx;
		color: #999999;
	}
	.addressItem text.sexActive{
		background: #0bbbef;
		color: white;
		border: none;
	}
	.addressItem input {
		font-size: 28rpx;
	}
	.addressBox{
		height: 180rpx;
		display: flex;
		margin: 0 30rpx;
		border-bottom: 1rpx solid #e5e5e5;
	}
	.addressBox .itemTitle{
		width: 140rpx;
		line-height: 90rpx;
	}
	.addressBox textarea{
		flex: 1;
		height: 180rpx;
		line-height: 90rpx;
		font-size: 28rpx;
	}
	.saveAddress{
		width: 600rpx;
		height: 80rpx;
		line-height: 80rpx;
		margin: 80rpx auto;
		background: #0bbbef;
		color: white;
		font-size: 28rpx;
		text-align: center;
		border-radius: 80rpx;
	}
	.city{
		font-size: 28rpx;
		color: #000000;
	}
	.defaultItem{
		margin: 0 30rpx;
		display: flex;
		height: 90rpx;
		align-items: center;
		justify-content: space-between;
	}
</style>