/*
* @Author: mac
* @Date:   2019-08-10 15:45:18
* @Last Modified by:   mac
* @Last Modified time: 2019-08-10 16:15:46
*/
import React,{Component} from 'react';

import Item from './Item.js'

import './App.css'

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			list:["吃饭","睡觉","打豆豆"],
			task:""
		}
	}
	handleChange(ev){
		// console.log(ev.target.value)
		// this.state.task = ev.target.value
		this.setState({
			task:ev.target.value
		})
	}
	handleDel(index){
		// console.log(index)
		const list = [...this.state.list];
		list.splice(index,1)
		this.setState({
			list:list
		})
	}
	handleAdd(){
		// console.log("button click...")
		// console.log(this.state.task)
		const list = [...this.state.list,this.state.task]
		this.setState({
			list:list,
			task:''
		})
	}
	render(){
		return (
			<div className="App">
				<input onChange={this.handleChange.bind(this)} value={this.state.task} />
				<button onClick={this.handleAdd.bind(this)}>提交</button>
				<ul>
					{
						this.state.list.map((item,index)=>{
							return (
								// <li key={index} onClick={this.handleDel.bind(this,index)}>{item}</li>

								<Item key={index} task={item}/>
							)
						})
					}
				</ul>
			</div>
		)
	}
}

export default App