<template>
	<div class="List">
	    <Item 
			v-for="(todo,index) in this.$store.state.todos"
			:todo="todo"
			:index="index"
			:key="index"
			:delTodo="delTodo"
	    />
	</div>
</template>

<script>
	import Item from './Item.vue'
	export default {
		name:'List',
		components:{
			Item
		},
		props:{
			todos:Array,
			delTodo:Function
		}
	}
</script>

<style>
	
</style>