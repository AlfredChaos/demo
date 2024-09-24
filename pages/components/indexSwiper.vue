<template>
	<swiper class="swiper" :style="{height: swiperHeight}"
	:indicator-dots="true" 
	:autoplay="true" 
	:interval="3000" 
	:duration="1000"
	indicator-color="#7d7d82"
	:indicator-active-color="activeBtn">
		<swiper-item v-for="(item,index) in content" :key="index">
			<view class="swiper-item">
				<navigator url="#" hover-class="none">
					<image :src="this.$imgUrl+item.image" mode=""
					:style="{width:width,height:height}"
					></image>
				</navigator>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default{
		props: ['content', 'swiperHeight', 'activeBtn', 'width', 'height']
	}
</script>

<style>
	.swiper{
		width: 100%;
	}
	.swiper image{
		display: block;
		margin: 0 auto;
	}
</style>