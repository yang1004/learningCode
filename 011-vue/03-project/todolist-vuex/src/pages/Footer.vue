<template>
	<div class="Footer">
	    <input type="checkbox" v-model="allDone">
	    <span>{{totalDone}}/{{total}}</span>
	    <button @click="allDel()">删除选中</button>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import {SELECT_ALL_TODO,DEL_ALL_DONE} from '../store/types.js'
	export default {
		name:'Footer',
		props:{
			todos:Array,
			selectAllTodo:Function,
			delAllDone:Function,
		},
		computed:{
			...mapGetters([
              'total',
              'totalDone',
            ]),  
			allDone:{
				get(){
					return this.$store.getters.allDone
				},
				set(value){
					// this.selectAllTodo(value)
					this.$store.dispatch(SELECT_ALL_TODO,value)
				}
			}
			
		},
		methods:{
			allDel(){
				if(!this.totalDone){
					return 
				}
				if(window.confirm('您确认要删除全部任务吗?')){
					// this.delAllDone()
					this.$store.dispatch(DEL_ALL_DONE)
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
	}
	input{
		float: left;
		margin-top: 14px;
		vertical-align: top;
	}
	button{
		float: right;
		margin-top: 14px;
		vertical-align: top;
	}
</style>