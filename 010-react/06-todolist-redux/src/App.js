/*
* @Author: mac
* @Date:   2019-08-09 15:14:48
* @Last Modified by:   mac
* @Last Modified time: 2019-08-12 16:49:33
*/
import React,{ Component } from 'react';
import axios from 'axios'
import { Input,Button,Row,Col,List,Typography } from 'antd';
import AppUI from './AppUI.js'
/*
import {
	ADD_ITEM,
	CHANGE_ITEM,
	DEL_ITEM
} from './stroe/actionTypes.js';
*/
import {
	getAddItem,
	getChangeItem,
	getDelItem,
	getDataInit
} from './stroe/actionCreator.js'
import stroe from './stroe/index.js'

class App extends Component{
	constructor(props){
		console.log("App constructor...")
		super(props)
		/*
		this.state = {
			list:["吃饭","睡觉","打豆豆"],
			task:""
		}
		*/
		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.state = stroe.getState();

		stroe.subscribe(()=>{this.setState(stroe.getState())})
	}
	handleDel(index){
		/*
		// console.log(index)
		const list = [...this.state.list];
		list.splice(index,1)
		this.setState(()=>({
			list:list
		}))
		*/
		/*
		const action = {
			type:DEL_ITEM,
			payload:index
		}
		stroe.dispatch(action)
		*/
		stroe.dispatch(getDelItem(index))
	}
	handleAdd(){
		const task = this.state.task
		/*
		this.setState((preState)=>({
			list:[...preState.list,preState.task],
			task:""
		}),()=>{
			// console.log("2::",this.ul.childNodes)
		})
		// console.log("1::",this.ul.childNodes)
		*/
		/*
		const action = {
			type:ADD_ITEM,
			payload:task
		}
		stroe.dispatch(action)
		*/
		stroe.dispatch(getAddItem(task))
	}
	handleChange(ev){
		const task = ev.target.value
		/*
		this.setState(()=>({
			task:task
		}))
		*/
		/*
		const action = {
			type:CHANGE_ITEM,
			payload:task
		}
		stroe.dispatch(action)
		*/
		stroe.dispatch(getChangeItem(task))
	}
	componentDidMount(prevProps, prevState,snapshot){
		//发送ajax请求
		axios.get('http://127.0.0.1:3000')
		.then(result=>{
			// console.log(result)
			stroe.dispatch(getDataInit(result.data))
		})
		.catch(err=>{
			console.log(err)
		})
	}
	render(){
		// console.log("App render...")
		return (
			<AppUI 
				task={this.state.task}
				list={this.state.list}
				handleChange={this.handleChange}
				handleAdd={this.handleAdd}
				handleDel={this.handleDel.bind(this)}
			/>
		)
	}
}


export default App