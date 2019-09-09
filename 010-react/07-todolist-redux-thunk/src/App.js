/*
* @Author: mac
* @Date:   2019-08-09 15:14:48
* @Last Modified by:   mac
* @Last Modified time: 2019-08-14 09:02:04
*/
import React,{ Component } from 'react';
import { Input,Button,Row,Col,List,Typography } from 'antd';
import AppUI from './AppUI.js'
import {
	getAddItem,
	getChangeItem,
	getDelItem,
	getDataInit,
	getDataInitThunk
} from './stroe/actionCreator.js'
import stroe from './stroe/index.js'

class App extends Component{
	constructor(props){
		console.log("App constructor...")
		super(props)
		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.state = stroe.getState();

		stroe.subscribe(()=>{this.setState(stroe.getState())})
	}
	handleDel(index){
		stroe.dispatch(getDelItem(index))
	}
	handleAdd(){
		const task = this.state.task
		stroe.dispatch(getAddItem(task))
	}
	handleChange(ev){
		const task = ev.target.value
		stroe.dispatch(getChangeItem(task))
	}
	componentDidMount(prevProps, prevState,snapshot){
		stroe.dispatch(getDataInitThunk())
		
	}
	render(){
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