<template>
	<div class="Item">
		<input type="checkbox" v-model="todo.done">
		<span>{{todo.task}}</span>
		<button @click="handleDel()">删除</button>
	</div>
</template>

<script>
	export default {
	    name: 'Item',
	    props:{
	    	todo:Object,
	    	index:Number,
	    	delTodo:Function
	    },
	    methods:{
	    	handleDel(){
	    		if(window.confirm('您确认要删除任务'+this.todo.task+'吗？')){
	    			this.delTodo(this.index)
	    		}
	    	}
	    }
	}
</script>

<style scoped>
	.Item{
		width: 100%;
		height: 40px;
		line-height: 40px;
		margin-top: 10px;
		border: 1px dashed #ccc;
	}
	input{
		float: left;
		vertical-align: top;
		margin-top: 14px;
	}
	button{
		float: right;
		vertical-align: top;
		margin-top: 12px;
	}
</style>