<template>
	<div class="Header">
		<h1>Todo List</h1>
		<input 
			type="text"
			@keyup.enter="handleA()"
			v-model="task"
		>
	</div>
</template>

<script>
	export default {
	    name: 'Header',
	    props:{
	    	addTodo:Function
	    },
	    data(){
	    	return {
	    		task:''
	    	}
	    },
	    methods:{
	    	handleA(){
	    		if(!this.task){
	    			alert('请输入任务')
	    			return 
	    		}
	    		this.addTodo(this.task)
	    		this.task = ''
	    	}
	    }
	}
</script>

<style scoped>
	.Header{
		width: 100%;
	}
	h1{
		text-align: center;
		font-size: 18px;
	}
	input{
		width: 100%;
		height: 40px;
		padding: 0 10px;
		box-sizing: border-box;
	}
</style>