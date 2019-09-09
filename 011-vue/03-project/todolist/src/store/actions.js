/*
* @Author: mac
* @Date:   2019-09-04 10:16:41
* @Last Modified by:   mac
* @Last Modified time: 2019-09-04 14:24:46
*/
import {ADD_TODO,DEL_TODO,SELECT_ALL_TODO,DEL_ALL_DONE} from './types.js'
export default {
	[ADD_TODO]({commit},todo){
		commit(ADD_TODO,todo)
	},
	[DEL_TODO]({commit},index){
		commit(DEL_TODO,index)
	},
	[SELECT_ALL_TODO]({commit},value){
		commit(SELECT_ALL_TODO,value)
	},
	[DEL_ALL_DONE]({commit}){
		commit(DEL_ALL_DONE)
	}
}