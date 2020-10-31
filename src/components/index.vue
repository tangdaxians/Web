<template>
	<div class="box">
		<h1>{{ msg }}</h1>
		
		<div class="box">
			<to name="vbutton"/>
			<to name="ebutton"/>
		</div>
		
		<router-view></router-view>
		
	</div>
</template>

<script>
export default {
	name: 'Index',
	data () {
		return {
			msg: 'Git'
		}
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
