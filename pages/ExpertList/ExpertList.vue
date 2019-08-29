<template>
	<view id="ExpertList">
		<statusBar></statusBar>
		<view class="head"> 
			<image src="../../static/background.png" mode="aspectFill"></image>
			<view class="padding-top-lg flex">	<!--四个按钮-->
				<view class="padding-lr">
					<button class="cu-btn cuIcon bg-grey text-xl" @click="back">
						<text class="cuIcon-back"></text>
					</button>
				</view>
				<view class="padding-lr" style="margin-left: auto;">
					<button class="cu-btn cuIcon margin-lr-xs bg-grey text-xl">
						<text class="cuIcon-favor"></text>
					</button>
					<button class="cu-btn cuIcon margin-lr-xs bg-grey text-xl">
						<text class="cuIcon-share"></text>
					</button>
					<button class="cu-btn cuIcon margin-lr-xs bg-grey text-xl">
						<text class="cuIcon-more"></text>
					</button>
				</view>
			</view>
			<view class="hospitalname margin-tb-lg margin-left">
				<view class="ShowHospitalName text-xxl" >
					<text class="cuIcon-titles text-blue"></text>
					<text class="text-black text-bold text-xxl" style="color: #000;">{{head[0].name}}</text>
					<text class="margin-left text-df">{{head[1].name}}</text>
				</view>
			</view>
		</view>
		<view class="margin-lr radius bg-white" style="height: auto;" >
			<view class="text-xxl padding-top margin-left">
				<text class="text-cyan text-xxl">{{depart[0].name}}</text>
				<text class="margin-left text-df">({{depart[0].ExpertNumber}}位专家)</text>
			</view>
			<view class="margin-left margin">
				<text class="text-df">{{depart[0].departintro}}</text>
			</view>
			<view class="solids-bottom margin-lr-sm flex  p-xs mb-sm" :key="index" v-for="(item,index) in depart[0].Experts" @click="NavToDocDetail">
					<view class="flex-sub  ">
					<image id='avatar' class="cu-avatar xl round margin" :src="item.avatar" ></image>
					</view>
					<view class="flex-twice margin-top margin-bottom margin-right">
						<view class="display:inline margin-bottom-sm">
							<text class="margin-right text-xl text-cyan">{{item.name}}</text>
							<text>{{item.level}}</text>
						</view>
					<text class="text-df">{{item.Abstract}}</text>
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				head :[ 
					{name:'厦门大学附属翔安医院'},
				    {name: '福建厦门'},	
				],
				depart:[
					{name:'脊柱外科',
					 ExpertNumber:3,
					 departintro:'厦门大学附属翔安医院（以下简称翔安医院）位于厦门市翔安区翔安东路2000号，,是由厦门市政府与厦门大学共同投资建设的非营利性公立医院。按照三级甲等医院标准建设成立的一所集治疗、教学、科研、预防为一体的综合性临床研究型医院',
					 Experts:[
						 {name:'宋润涵', level:'脊柱外科 主任医师', avatar:'../../static/logo.png',Abstract:'医学硕士，三级甲等医院医疗、教学、科研、预防为一体'},
						 {name:'宋润涵',level:'脊柱外科 主任医师', avatar:'../../static/logo.png',Abstract:'医学硕士，三级甲等医院医疗、教学、科研、预防为一体'},
						 {name:'宋润涵',level:'脊柱外科 主任医师', avatar:'../../static/logo.png',Abstract:'医学硕士，三级甲等医院医疗、教学、科研、预防为一体'},
					 ],
					}
				]
			}
		},
		onLoad() {
	
		},
		methods: {
			NavToDocDetail(){
				uni.navigateTo({
					url: '../DoctorDetail/DoctorDetail',
					success: res => {},
				});
			},
			back(){
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style>
	.head > image{
		width:100%;
		position: absolute;
	}
	#avatar{
	  border: 6rpx solid #0081FF;
	}
	
</style>
