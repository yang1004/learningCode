<template>
	<div class="Footer">
		<input type="checkbox" v-model="allDone">
		<span>{{totalDone}}/{{total}}</span>
		<button @click="handleDelAll()">删除选中</button>
	</div>
</template>

<script>
	export default {
	    name: 'Footer',
	    props:{
	    	todos:Array,
	    	allSelectDone:Function,
	    	delAllTodo:Function,
	    },
	    computed:{
	    	total(){
	    		return this.todos.length
	    	},
	    	totalDone(){
	    		return this.todos.reduce(function(total,item){
	    			if(item.done){
	    				total = total + 1
	    			}
	    			return total
	    		},0)
	    	},
	    	allDone:{
	    		get(){
	    			return (this.total == this.totalDone) && (this.totalDone != 0)
	    		},
	    		set(value){
	    			this.allSelectDone(value)
	    		}
	    	}
	    },
	    methods:{
	    	handleDelAll(){
	    		if(window.confirm('您确认要删除选中的任务吗？')){
	    			this.delAllTodo()
	    		}
	    	}
	    }
	}
</script>

<style scoped>
	.Footer{
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