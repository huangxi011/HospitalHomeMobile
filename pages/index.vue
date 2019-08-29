<template>
	<view>
		<statusBar></statusBar>
		<view id="search" class="margin-bottom-xl" style="position: relative;">
			<image src="../static/blue.png" style="position: absolute;"></image>
			<view class="content padding-top-sm">
				<view class="cu-bar search">
					<view class="cu-avatar round" style="background-image:url(../mob/static/brand.png); background-color: rgba(0,0,0,0);"></view>
					<view class="search-form round bg-white">
						<input @tap="NavToSearch" style="padding-left: 20rpx;" :adjust-position="false" type="text" placeholder="让呼吸更健康" confirm-type="search"></input>
						<text class="cuIcon-search text-blue margin-right-sm" style="font-size: 36rpx;"></text>
					</view>
					<view class="action">
						<text class="text-white">厦门</text>
						<text class="text-white text-xxl margin-left-sm">|</text>
						<view class="cu-avatar round margin-left-sm" style="background-image:url(../mob/static/avatar.png);"></view>
					</view>
				</view>
				<view class="margin-xs flex justify-around">
					<span class="text-white" style="z-index:1;">热搜：</span>
					<span class="sm cu-tag round tag" :key="index" v-for="(tag,index) in tags">{{tag}}</span>
				</view>
			</view>
		</view>
		<view class="margin-lr-sm">
			<view class="chat bg-white padding-bottom-xs">
					<p class="padding-lr-xl padding-top-sm padding-bottom-xs text-xxl" style="color: #00a7f4;">智能导诊</p>
					<view class="cu-chat">
						<view class="cu-item" style="padding: 10rpx;">
							<view class="main">
								<view class="content shadow" style="background-color: #f9f9f9;">
									<text>Hi~<br/>我是智能导诊助手</text>
								</view>
							</view>
						</view>
						<view class="cu-item self" style="padding: 10rpx;">
							<view class="main">
								<view class="content bg-blue shadow">
									<text>感冒</text>
								</view>
							</view>
						</view>
					</view>
			</view>
			<view class="cu-bar input radius bg-grey margin-sm" style="background-color: #f9f9f9;margin-left: 0;">
				<text class="cuIcon-voice text-white bg-blue cu-avatar round" style="font-size: 25px;"></text>
				<input class="solid-bottom bg-white round shadow" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10"></input>
				<button class="text-sm bg-blue">发送</button>
			</view>
			<view style="background-color: #f9f9f9;">
				<view class="cu-bar">
					<view class="text-xl">
						<text class="cuIcon-titles text-blue"></text>
						<text class="text-bold">医院介绍</text>
					</view>
					<view class="more" @tap="SearchMore">查看更多<text class="cuIcon-playfill"></text></view>
				</view>
				<scroll-view scroll-x>
					<view class="flex text-center" id='subsCard'>
						<view class="card bg-white margin-lr-sm"  v-for="(hospital,index) in hospitals1" :key="index">
							<view class="padding-top-sm"><image :src="hospital.avatar" class="cu-avatar round lg"></image></view>
							<view class="text text-black text-overflow">{{hospital.name}}</view>
							<button id="button" class="text-xs" :class="[hospital.state=='关注'?'bg-blue':'']" @tap="subsribe1(index)">{{hospital.state}}</button>
						</view>
					</view>
				</scroll-view>
			</view>
			<view style="background-color: #f9f9f9;">
				<view class="cu-bar">
					<view class="text-xl">
						<text class="cuIcon-titles text-blue"></text>
						<text class="text-bold">进驻医疗机构</text>
					</view>
					<view class="more" @tap="SearchMore">查看更多<text class="cuIcon-playfill"></text></view>
				</view>
				<scroll-view scroll-x>
					<view class="flex text-center" id='subsCard'>
						<view class="card bg-white margin-lr-sm"  v-for="(hospital,index) in hospitals2" :key="index">
							<view class="padding-top-sm"><image :src="hospital.avatar" class="cu-avatar round lg"></image></view>
							<view class="text text-black text-overflow">{{hospital.name}}</view>
							<button id="button" class="text-xs" :class="[hospital.state=='关注'?'bg-blue':'']" @tap="subsribe2(index)">{{hospital.state}}</button>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view style="height: 120rpx;"></view>
		<bottom-navbar :navs='mynavs' style="position: fixed;bottom: 0;left: 0;" v-on:selectchange="change($event)"></bottom-navbar>
	</view>
</template>

<script>
	export default {
		data()
		{
			return{
				TabCur: 0,
				scrollLeft: 0,
				mynavs:[
					{
						id:0,
						name:"首页",
						icon:"cuIcon-home",
						url:""
					},
					{
						id:1,
						name:"招聘",
						icon:"cuIcon-discover",
						url:""
					},
					{
						id:2,
						name:"",
						icon:"cuIcon-round",
						url:""
					},
					{
						id:3,
						name:"招投标",
						icon:"cuIcon-dianhua",
						url:""
					},
					{
						id:4,
						name:"我的",
						icon:"cuIcon-my",
						url:"./profile/profile"
					},
				],
				hospitals1:[
					{
						avatar:"../static/avatar.png",
						name:"厦门大学附属翔安医院",
						state:"关注"
					},
					{
						avatar:"../static/avatar.png",
						name:"厦门大学附属翔安医院",
						state:"关注"
					},
					{
						avatar:"../static/avatar.png",
						name:"厦门大学附属翔安医院",
						state:"关注"
					},
					{
						avatar:"../static/avatar.png",
						name:"厦门大学附属翔安医院",
						state:"关注"
					},
					{
						avatar:"../static/avatar.png",
						name:"厦门大学附属翔安医院",
						state:"关注"
					},
					{
						avatar:"../static/avatar.png",
						name:"厦门大学附属翔安医院",
						state:"关注"
					},
					{
						avatar:"../static/avatar.png",
						name:"厦门大学附属翔安医院",
						state:"关注"
					},
				],
				hospitals2:[
					{
						avatar:"../static/avatar.png",
						name:"厦门大学附属翔安医院",
						state:"关注"
					},
					{
						avatar:"../static/avatar.png",
						name:"厦门大学附属翔安医院",
						state:"关注"
					},
					{
						avatar:"../static/avatar.png",
						name:"厦门大学附属翔安医院",
						state:"关注"
					},
					{
						avatar:"../static/avatar.png",
						name:"厦门大学附属翔安医院",
						state:"关注"
					},
					{
						avatar:"../static/avatar.png",
						name:"厦门大学附属翔安医院",
						state:"关注"
					},
					{
						avatar:"../static/avatar.png",
						name:"厦门大学附属翔安医院",
						state:"关注"
					},
					{
						avatar:"../static/avatar.png",
						name:"厦门大学附属翔安医院",
						state:"关注"
					},
				],
				tags:[
					"厦门大学厦门大学",
					"原发性肝癌",
					"中医养生",
					"时尚刮痧",
				]
			}
		},
		computed:{
			
		},
		methods:{
			change(index){
				if(!this.mynavs[index].url)return;
				uni.navigateTo({
					url:this.mynavs[index].url
				})
			},
			subsribe1(index)
			{
				this.hospitals1[index].state=(this.hospitals1[index].state=='已关注')?'关注':'已关注';
			},
			subsribe2(index)
			{
				this.hospitals2[index].state=(this.hospitals2[index].state=='已关注')?'关注':'已关注';
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				if(this.TabCur==4){
					uni.navigateTo({
						url:'./profile/profile'
					})
				}
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
			},
			SearchMore(){
			},
			NavToSearch(){
				uni.navigateTo({
					url:'./Search/Search'
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f9f9f9;
	}
	#search{
		width:100%;
		image{
			position: absolute;
			width: 100%;
			height: 206rpx;
		}
		.content{
			.tag{
				min-width: 120rpx;
				background-color: rgba(#4ddbfe, 0.4);
				white-space: nowrap;
				overflow: ellipsis;
			}
		}
	}
	.more{
		color: rgb(0, 167, 244);
	}
	.card{
		min-width: 200rpx;
		min-height: 286rpx;
	}
	.text-overflow{
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		margin: 10rpx 15rpx 20rpx 15rpx;
	}
	#subsCard{
		button{
			padding:0 30rpx;
			height: 40rpx;
			align-items: center;
			display: inline-flex;
			white-space: nowrap;
		}
	}
</style>
