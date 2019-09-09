<template>
	<div class="List">
		<Item 
			v-for="(todo,index) in todos"
			:todo="todo"
			:key="index"
			:index="index"
			:delTodo="delTodo"
		/>
	</div>
</template>

<script>
	import Item from './Item.vue'
	export default {
	    name: 'List',
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
	.List{
		width: 100%;
	}
</style>