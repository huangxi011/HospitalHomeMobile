<template>
	<view>
		<statusBar></statusBar>
		<view class="cu-bar search bg-gray text-xxl">
			<span class="cuIcon-back_android margin-left" @tap="back()" ></span>
			<view class="search-form round text-xxl">
				<input class="padding-left" :adjust-position="false" type="text" placeholder="原发性肝癌" confirm-type="search" @confirm="NavToRes"></input>
				<text class="cuIcon-voice text-blue" style="font-size: 44rpx;"></text>
			</view>
			<view class="action">
				<button class="cu-btn shadow-blur round" @tap="NavToRes()">搜索</button>
			</view>
		</view>
		<view>
			<scroll-view scroll-x class="bg-gray nav" style="padding-bottom: 20rpx;">
				<view class="flex text-center justify-around">
					<view class="cu-item" :class="0==TabCur?'text-blue cur':''" @tap="tabSelect" data-id="0">
						医院 
					</view>
					<view class="cu-item" :class="1==TabCur?'text-blue cur':''" @tap="tabSelect" data-id="1">
						科室
					</view>
					<view class="cu-item" :class="2==TabCur?'text-blue cur':''" @tap="tabSelect" data-id="2">
						专家
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="bg-white">
			<view class="cu-bar">
				<view class="action flex" style="width: 100%;">
					<text class="cuIcon-titles text-blue"></text>
					<text class="text-xl text-bold">历史搜索</text>
					<text class="cuIcon-delete" style="margin-left: auto;"></text>
				</view>
			</view>
			<view>
				<button class="cu-btn round margin-lr-sm margin-tb-xs">呼吸科</button>
				<button class="cu-btn round margin-lr-sm margin-tb-xs">呼吸健康</button>
				<button class="cu-btn round margin-lr-sm margin-tb-xs">原发性肝癌</button>
				<button class="cu-btn round margin-lr-sm margin-tb-xs">呼吸科权威医院</button>
				<button class="cu-btn round margin-lr-sm margin-tb-xs">医院</button>
				<button class="cu-btn round margin-lr-sm margin-tb-xs">广州医科</button>
				<button class="cu-btn cuIcon margin-lr-sm margin-tb-xs">
					<text class="cuIcon-unfold"></text>
				</button>
			</view>
			<view>
				<view class="cu-bar">
					<view class="action flex" style="width: 100%;">
						<text class="cuIcon-titles text-blue"></text>
						<text class="text-xl text-bold">搜索发现</text>
						<text class="cuIcon-attention" style="margin-left:auto;"></text>
					</view>
				</view>
				<view class="box">
					<view class="flex">
						<view class="flex-sub  padding-sm margin-xs radius">呼吸科</view>
						<view class="flex-sub padding-sm margin-xs radius">原发性肝癌</view>
					</view>
					<view class="flex">
						<view class="flex-sub padding-sm margin-xs radius">呼吸科权威医院</view>
						<view class="flex-sub padding-sm margin-xs radius">广州医科</view>
					</view>
					<view class="flex">
						<view class="flex-sub padding-sm margin-xs radius">呼吸健康</view>
						<view class="flex-sub padding-sm margin-xs radius">医院</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur:0,
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
			},
			back(){
				uni.navigateBack({
					
				})
			},
			NavToRes(){
				uni.navigateTo({
					url:'./Result'
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #FFF;
	}
</style>
