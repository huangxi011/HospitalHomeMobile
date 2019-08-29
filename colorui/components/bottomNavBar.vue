<template>
	<scroll-view class="nav text-center bg-white">
		<view class="cu-item" :class="nav.id==TabCur?'text-blue cur':''" @tap="tabSelect" :data-id='nav.id' v-for="nav in navs" :key='nav.id'>
			<view class="flex-sub">
				<text :class="nav.icon"></text> {{nav.name}}
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default{
		data(){
			return{
				TabCur:0,
				scrollLeft:0,
			};
		},
		props:{
			navs:Array,
		},
		methods:{
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				this.$emit('selectchange',e.currentTarget.dataset.id);
			}
		}
	}	
</script>

<style>
</style>
