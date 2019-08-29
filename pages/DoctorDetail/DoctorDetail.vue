<template>
	<view id="DoctorDetail">
		<statusBar></statusBar>
		<view class="head"> 
			<image src="../../static/background.png" mode="aspectFill"></image>
			<view class="padding-top-lg flex">	<!--四个按钮-->
				<view class="padding-lr">
					<button class="cu-btn cuIcon bg-grey text-xl" @click="back">
						<text class="cuIcon-back" ></text>
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
					<text class="text-black text-bold text-xxl"style="color: #000;">{{head[0].name}}</text>
					<text class="margin-left text-df">{{head[1].name}}</text>
				</view>
			</view>
		</view>
		<view class="margin-lr radius padding-bottom-xl" style="height: auto; background-color: white;" >
			<view class="solids-bottom padding-bottom-xs margin-lr-sm text-center" v-for="(item,index) in doctor">
				<image id='avatar' class="cu-avatar xl round margin" :src="item.avatar"></image>
				<view>
					<text class="text-xl text-cyan" >{{item.name}}</text>
				</view>
				<view class="margin-tb-sm">{{item.level}}</view>
				<view class="margin-tb-sm">{{item.introduce}}</view>
				<view class="margin-tb-sm">{{item.skill}}</view>
			</view>
			<view class="margin-lr margin-tb-sm" v-for="item in doctor">
				<text class="text-xl flex justify-start" style="color: #000;">排班表</text>
				
				<view class="margin-tb">
					<view class="cu-tag light bg-cyan radius" style="margin-left:20rpx"
					v-for="items in item.schedule">{{items.name}}</view>
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
					doctor:[
						{name:'宋润涵',
						 avatar:'../../static/logo.png',
						 level:'脊柱外科 主任医师',
						 introduce:'医学硕士,三级甲等医院治疗、教学、科研',
						 skill:'擅长骨关节病治疗',
						 schedule:[
							 {name:'星期一'},
							 {name:'星期三'},
							 {name:'星期四'}
							 
						 ],
						}
					]
			}
		},
		onLoad() {
	
		},
		methods: {
			back(){
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style lang="less">
	.head > image{
		width:100%;
		position: absolute;
	}
	#avatar{
	  border: 6rpx solid #0081FF;
	}
</style>
