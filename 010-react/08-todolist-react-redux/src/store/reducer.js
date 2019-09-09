/*
* @Author: mac
* @Date:   2019-08-12 10:29:25
* @Last Modified by:   mac
* @Last Modified time: 2019-08-14 09:48:36
*/
import {
	ADD_ITEM,
	CHANGE_ITEM,
	DEL_ITEM,
	GET_DATA
} from './actionTypes.js'
const defaultStates = {
	list:["吃饭","睡觉"],
	task:""
}

/*
1.render是一个函数，并是一个纯函数(固定的输入就会有固定的输出)
2.render需要返回一个新的state对象，不能更改参数中传来的state
原因是因为传递过来的state是store中的state，所有组件都共享store中的state，这个state由store来维护
store根据render返回的新的state来更改自己的state，在组件getState()返回的是store中的state
 */

export default (state=defaultStates,action)=>{
	// console.log(state,action)
	if(action.type == CHANGE_ITEM){
		// state.task = action.payload
		const newState = JSON.parse(JSON.stringify(state))
		newState.task = action.payload;
		return newState
	}
	if(action.type == ADD_ITEM){
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.push(state.task)
		newState.task = ''
		return newState
	}
	if(action.type == DEL_ITEM){
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.splice(action.payload,1)
		return newState
	}
	if(action.type == GET_DATA){
		const newState = JSON.parse(JSON.stringify(state))
		newState.list = action.payload;
		return newState
	}
	return state
}