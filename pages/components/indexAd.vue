<template>
	<view class="indexAd">
		<view class="indexAdLeft">
			<template v-if="content.length > 0">
				<navigator url="#" hover-class="none">
					<image :src="this.$imgUrl+content[0].image" mode=""></image>
				</navigator>
			</template>
		</view>
		<view class="indexAdRight">
			<view class="indexAdRightItem">
				<template v-if="content.length > 0">
					<navigator url="#" hover-class="none">
						<image :src="this.$imgUrl+content[1].image" mode=""></image>
					</navigator>
				</template>
			</view>
			<view class="indexAdRightItem">
				<template v-if="content.length > 0">
					<navigator url="#" hover-class="none">
						<image :src="this.$imgUrl+content[2].image" mode=""></image>
					</navigator>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props: ['content']
	}
</script>

<style>
	.indexAd{
		display: flex;
		margin-top: 20rpx;
	}
	.indexAdLeft{
		width: 50%;
		height: 520rpx;
	}
	.indexAdLeft image{
		width: 100%;
		height: 520rpx;
	}
	.indexAdRight{
		width: 50%;
	}
	.indexAdRight image{
		width: 100%;
		height: 260rpx;
	}
	.indexAdRightItem{
		height: 260rpx;
	}
</style>