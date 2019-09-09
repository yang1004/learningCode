/*
* @Author: mac
* @Date:   2019-08-09 15:14:48
* @Last Modified by:   mac
* @Last Modified time: 2019-08-11 10:47:38
*/
import React,{ Component } from 'react';
import Item from './Item.js'
import './App.css'

class App extends Component{
	constructor(props){
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
		}))
	}
	handleChange(ev){
		const val = ev.target.value
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
		return (
		<div className="App">
			<input onChange={this.handleChange} value={this.state.task} />
			<button onClick={this.handleAdd}>提交</button>
			<ul style={{color:'red',fontSize:'17px'}}>
				{
					this.getItems()
				}
			</ul>
		</div>
		)
	}
}


export default App