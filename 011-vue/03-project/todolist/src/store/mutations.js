/*
* @Author: mac
* @Date:   2019-09-04 10:16:41
* @Last Modified by:   mac
* @Last Modified time: 2019-09-04 14:27:30
*/
import {ADD_TODO,DEL_TODO,SELECT_ALL_TODO,DEL_ALL_DONE} from './types.js'
export default {
	[ADD_TODO](states,todo){
		states.todos.unshift(todo)
	},
	[DEL_TODO](states,index){
		states.todos.splice(index,1)
	},
	[SELECT_ALL_TODO](states,value){
		states.todos.forEach((item)=>{
            item.done = value
        })
	},
	[DEL_ALL_DONE](states){
		states.todos = states.todos.filter(item=>!item.done)
		//item.done为false时保留,true去除
	}
}