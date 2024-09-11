<template>
	<swiper class="swiper"
	:indicator-dots="true" 
	:autoplay="true" 
	:interval="3000" 
	:duration="1000">
		<swiper-item v-for="(item,index) in content" :key="index">
			<view class="swiper-item">
				<navigator url="#">
					<image :src="this.$imgUrl+item.image" mode=""></image>
				</navigator>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default{
		props: ['content']
	}
</script>

<style>
	.swiper{
		width: 100%;
		height: 390rpx;
	}
	.swiper image{
		width: 100%;
		height: 390rpx;
	}
</style>