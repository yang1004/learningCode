/*
* @Author: mac
* @Date:   2019-08-09 15:14:48
* @Last Modified by:   mac
* @Last Modified time: 2019-08-12 09:39:09
*/
import React,{ Component } from 'react';
import Item from './Item.js'
import {  Input,Button,Row,Col,List,Typography } from 'antd';
import 'antd/dist/antd.css';
import './App.css'

class App extends Component{
	constructor(props){
		console.log("App constructor...")
		super(props)
		this.state = {
			list:["吃饭","睡觉","打豆豆"],
			task:""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}
	handleDel(index){
		// console.log(index)
		const list = [...this.state.list];
		list.splice(index,1)
		this.setState(()=>({
			list:list
		}))
	}
	handleAdd(){
		this.setState((preState)=>({
			list:[...preState.list,preState.task],
			task:""
		}),()=>{
			console.log("2::",this.ul.childNodes)
		})
		console.log("1::",this.ul.childNodes)
	}
	handleChange(ev){
		// const val = ev.target.value
		const val = this.input.value
		this.setState(()=>({
			task:val
		}))
	}
	getItems(){
		return this.state.list.map((item,index)=>{
			return <Item key={index} task={item} handleDel={this.handleDel.bind(this,index)}/>
		})
	}
	render(){
		// console.log("App render...")
		return (
		<div className="App">
			<Row>
				<Col span={16}>
				<Input 
					placeholder="Basic usage" 
					onChange={this.handleChange}
					value={this.state.task} 
					ref={(input)=>{this.input=input}}
				/>
				</Col>
				<Col span={8}>
				<Button type="primary" onClick={this.handleAdd}>提交</Button>
				</Col>
			</Row>
			<Col span={16}>
			<List
		      bordered
		      dataSource={this.state.list}
		      renderItem={(item,index) => <List.Item onClick={this.handleDel.bind(this,index)}>{item}</List.Item>}
		    />
		    </Col>
		</div>
		)
	}
}


export default App