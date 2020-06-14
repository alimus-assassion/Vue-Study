<template>
	<div>
		<h2 class="title">{{message}}</h2>
		<button class="btn" type="button" @click="btnClick">点击按钮</button>
		<Cpn></Cpn>
	</div>
</template>

<script>
	import Cpn from './Cpn.vue';
	
	export default {
		name: "App",
		components: {
			Cpn
		},
		data() {
			return {
				message: "hello vue"
			}
		},
		methods: {
			btnClick() {
				console.log("btnClick")
			}
		}
	}
</script>

<style>
	.title {
		color: #FF0000;
	}
	.btn {
		color: #FFAA00;
	}
</style>
