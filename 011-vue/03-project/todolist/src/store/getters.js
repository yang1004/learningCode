/*
* @Author: mac
* @Date:   2019-09-04 10:16:41
* @Last Modified by:   mac
* @Last Modified time: 2019-09-04 10:50:14
*/
export default {
	total(state){
		return state.todos.length
	},
	totalDone(state){
		return state.todos.reduce((total,item)=>{
			if(item.done){
				total = total + 1
			}
			return total
		},0)
	},
	allDone(state,getter){
		return (getter.total === getter.totalDone) && (getter.total != 0)
	}
}