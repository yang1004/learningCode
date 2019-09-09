/*
* @Author: mac
* @Date:   2019-08-12 15:21:08
* @Last Modified by:   mac
* @Last Modified time: 2019-08-14 11:17:44
*/
import * as types from './actionTypes.js'
import axios from 'axios'

export const getAddItem = (task)=>{
	return {
		type:types.ADD_ITEM,
		payload:task
	}
}

export const getChangeItem = (task)=>{
	return {
		type:types.CHANGE_ITEM,
		payload:task
	}
}

export const getDelItem = (index)=>{
	return {
		type:types.DEL_ITEM,
		payload:index
	}
}

export const getDataInit = (payload)=>{
	return {
		type:types.GET_DATA,
		payload
	}
}

export const getDataInitThunk = ()=>{
	return (dispatch)=>{
		//发送ajax请求
		axios.get('http://127.0.0.1:3000')
		.then(result=>{
			// console.log(result)
			dispatch(getDataInit(result.data))
		})
		.catch(err=>{
			console.log(err)
		})
	}
}