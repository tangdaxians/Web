<template>
	<el-button @click="clickto">{{name}}</el-button>
</template>

<script>
export default {
	name: 'Btn',
	props:{
		name:String
	},
	methods:{
		clickto(){
			this.$router.push({name:this.name});
		}
	}
}
</script>