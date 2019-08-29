<template>
	<view style="width: 100%;" :style="{height:StatusBar+'px'}">
		<view class="bg-blue" :style="[{height:StatusBar+'px'},{'background-color':color}]" style="position: fixed;top: 0;z-index: 20; width: 100%;">	
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				StatusBar: this.StatusBar,
			};
		},
		name: 'abc',
		props:{
			color:{
				type:String,
				default:'#000000'
			}
		},
	}
</script>

<style>
	.cu-custom {
		background-color:#a5673f ;
	}
</style>
