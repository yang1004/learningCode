/*
* @Author: mac
* @Date:   2019-08-12 15:21:08
* @Last Modified by:   mac
* @Last Modified time: 2019-08-12 16:48:05
*/
import {
	ADD_ITEM,
	CHANGE_ITEM,
	DEL_ITEM,
	GET_DATA
} from './actionTypes.js'

export const getAddItem = (task)=>{
	return {
		type:ADD_ITEM,
		payload:task
	}
}

export const getChangeItem = (task)=>{
	return {
		type:CHANGE_ITEM,
		payload:task
	}
}

export const getDelItem = (index)=>{
	return {
		type:DEL_ITEM,
		payload:index
	}
}

export const getDataInit = (payload)=>{
	return {
		type:GET_DATA,
		payload
	}
}