/*
* @Author: mac
* @Date:   2019-08-09 15:14:48
* @Last Modified by:   mac
* @Last Modified time: 2019-08-11 10:33:18
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
		// console.log(this)
		// console.log('button click...')
		this.setState({
			list:[...this.state.list,this.state.task],
			task:""
		})
	}
	handleChange(ev){
		// console.log(ev.target.value)
		this.setState({
			task:ev.target.value
		})
	}
	render(){
		return (
		<div className="App">
			<input onChange={this.handleChange.bind(this)} value={this.state.task} />
			<button onClick={this.handleAdd.bind(this)}>提交</button>
			<ul style={{color:'red',fontSize:'17px'}}>
				{
					this.state.list.map((item,index)=>{
						// return (<li key={index} onClick={this.handleDel.bind(this,index)}>{item}</li>)
						return <Item key={index} task={item} handleDel={this.handleDel.bind(this,index)}/>
					})
				}
			</ul>
		</div>
		)
	}
}


export default App