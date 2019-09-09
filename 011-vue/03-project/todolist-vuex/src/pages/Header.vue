<template>
	<div class="Header">
	    <h1>ToDo List</h1>
	    <input 
	    	type="text"
	    	placeholder="请输入任务" 
	    	@keyup.enter="handleAdd()"
	    	v-model="task"
	    >
	</div>
</template>

<script>
	import {ADD_TODO} from '../store/types.js'
	export default {
		name:'Header',
		data(){
			return {
				task:''
			}
		},
		methods:{
			handleAdd(){
				//1.判断是否有任务
				if(!this.task){
					alert('请输入任务')
					return 
				}
				const todo = {
					task:this.task.trim(),
					done:false
				}
				//2.添加任务
				// this.addTodo(todo)
				this.$store.dispatch(ADD_TODO,todo)
				//3.清空输入框
				this.task = ''
			}
		},
		props:{
			addTodo:Function
		}
	}
</script>

<style scoped>
	h1{
		text-align: center;
		font-size: 18px;
	}
	input{
		width: 100%;
		height: 30px;box-sizing: border-box;
		padding: 0 10px
	}
</style>