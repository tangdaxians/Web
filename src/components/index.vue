<template>
	<div class="box">
		<h1>{{ msg }}</h1>
		
		<div class="box">
			<to v-for="(item,index) in tolist" :name="item.name" :key="index"/>
		</div>
		
		<router-view></router-view>
		
	</div>
</template>

<script>
export default {
	name: 'Index',
	data () {
		return {
			msg: 'Vue - Git',
			tolist:[]
		}
	},
	created(){
		this.tolist = this.$router.options.routes[0].children;
	}
}
</script>

<style scoped>
.box {
	width: 100%;
	height: auto;
	text-align: center;
	line-height: 100px;
}
</style>
