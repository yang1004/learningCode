/*
* @Author: mac
* @Date:   2019-08-12 10:29:25
* @Last Modified by:   mac
* @Last Modified time: 2019-08-15 08:58:09
*/
// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'
import { reducer as TodolistReducer } from '../pages/todolist/store'

export default combineReducers({
	todolist:TodolistReducer
})