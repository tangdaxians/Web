<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
			msg: 'Git 444'
		}
	}
}
</script>

<style scoped>
.hello {
	width: 100%;
	height: auto;
	text-align: center;
	line-height: 200px;
}
</style>
