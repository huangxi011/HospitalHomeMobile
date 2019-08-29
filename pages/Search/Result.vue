<template>
	<view>
		<statusBar></statusBar>
		<view class="cu-bar search bg-gray text-xxl" >
			<span class="cuIcon-back_android margin-left" @tap="back()"></span>
			<view class="search-form round text-xxl">
				<input class="padding-left" :adjust-position="false" type="text" placeholder="原发性肝癌" confirm-type="search"></input>
				<text class="cuIcon-voice text-blue" style="font-size: 44rpx;"></text>
			</view>
			<view class="action">
				<button class="cu-btn shadow-blur round">搜索</button>
			</view>
		</view>
		<view>
			<scroll-view scroll-x class="bg-gray nav">
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
		<view class="flex margin-tb-sm">
			<picker class="bg-white radius cu-btn flex-sub margin-lr" :value="index" :range="picker">
				<text>{{picker[index]}}</text>
				<text class="cuIcon-unfold margin-left-sm"></text>
			</picker>
			<button class="cu-btn bg-white flex-sub margin-lr" @click="open()">
				<text>筛选器</text>
				<text class="cuIcon-unfold margin-left-sm"></text>
			</button>
		</view>
		<view style="max-height: 70%;position:absolute;overflow: scroll;">
			<scroll-view scroll-y id="filters" class="bg-gray shadow shadow-lg" :style="{height:myheight}">	<!--自动展开-->
				<view class="flex justify-between align-center margin margin-lr-lg">
					<text>选择省份</text>
					<text class="cuIcon-unfold" @click="provinceopen"></text>
				</view>
				<view class="grid col-5 text-center" :style="{height:provinceheight,overflow:hidden}">
					<view :key="proIndex" v-for="(item,proIndex) in Province" @click="proChoice=proIndex" class="margin-tb-xs">
						<view class="cu-tag light radius" :class="[proIndex==proChoice ? 'bg-blue':'bg-cyan']">{{item.value}}</view>
					</view>
				</view>
				
				<view class="flex justify-between align-center margin margin-lr-lg">
					<text>选择市</text>
					<text class="cuIcon-unfold" @click="cityopen"></text>
				</view>
				<view class="grid col-5 text-center" :style="{height:cityheight,overflow:hidden}">
					<view :key="cityIndex" v-for="(item,cityIndex) in Province[proChoice].children" @click="cityChoice=cityIndex" class="margin-tb-xs">
						<view class="cu-tag light radius" :class="[cityChoice==cityIndex ? 'bg-blue':'bg-cyan']">{{item.value}}</view>
					</view>
				</view>
				<view class="padding flex flex-direction">
					<button class="cu-btn bg-grey lg" @click="open()">确定</button>
				</view>
			</scroll-view>
		</view>
		<view>	<!--搜索结果-->
			<view class="cu-card article no-card" @click="NavToHospital">
				<view class="cu-item shadow">
					<view class="title">
						<view class="text-cut">厦门大学附属翔安医院</view>
					</view>
					<view class="content">
						<view class="desc">
							<view class="text-content"> 厦门大学附属翔安医院（以下简称翔安医院）位于厦门市翔安区翔安东路2000号，是由厦门市政府与厦门大学共同投资建设的非营利性公立医院。</view>
							<view>
								<view class="cu-tag bg-red light sm round we">三甲</view>
								<view class="cu-tag bg-green light sm round we">市级</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-card article no-card ">
				<view class="cu-item shadow">
					<view class="title"><view class="text-cut">厦门大学附属翔安医院</view></view>
					<view class="content">
						<image src="../../static/hospital.png"
						 mode="aspectFill"></image>
						<view class="desc">
							<view class="text-content">厦门大学附属翔安医院（以下简称翔安医院）位于厦门市翔安区翔安东路2000号，是由厦门市政府与厦门大学共同投资建设的非营利性公立医院。</view>
							<view>
								<view class="cu-tag bg-red light sm round ">三甲</view>
								<view class="cu-tag bg-green light sm round ">市级</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import exp from '../../area.js'
	export default {
		data() {
			return {
				TabCur:0,
				proChoice: 0,
				cityChoice: -1,
				picker: ['按推荐', '按收藏', '按更新'],
				showFilters:false,
				myheight:"0px",
				cityheight:'68rpx',
				provinceheight:'68rpx',
				hidden: 'hidden',
				Province:[],
				index:0,
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
			},
			open(){
				if(this.myheight=='0px'){
					this.myheight="auto";
				}
				else{
					this.myheight="0px";
				}
			},
			cityopen(){
				if(this.cityheight=='68rpx'){
					this.cityheight="auto";
				}
				else{
					this.cityheight='68rpx';
				}
			},
			provinceopen(){
				if(this.provinceheight=='68rpx'){
					this.provinceheight="auto";
				}
				else{
					this.provinceheight='68rpx';
				}
			},
			NavToHospital(){
				uni.navigateTo({
					url:'../HospitalDetail/HospitalDetail'
				})
			},
			back(){
				uni.navigateBack({
					
				})
			}
		},
		onLoad() {
			this.Province=exp;
		}
	}
</script>

<style>
	#filters{
		position: relative;
		width: 100%;
		height: 0%;
		overflow: hidden;
		transition:all 2s;
		z-index:10;
	}
	.we{
		z-index:1;
	}
</style>
