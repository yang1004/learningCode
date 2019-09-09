/*
* @Author: mac
* @Date:   2019-08-09 15:14:48
* @Last Modified by:   mac
* @Last Modified time: 2019-08-11 19:09:11
*/
import React,{ Component } from 'react';
import Item from './Item.js'
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
	static getDerivedStateFromProps(nextProps, prevState){
		console.log("getDerivedStateFromProps(nextProps, prevState)",nextProps, prevState)
		return {
			// task:"hello"
		}
	}
	shouldComponentUpdate(nextProps, nextState){
		console.log("App shouldComponentUpdate(nextProps, nextState)",nextProps, nextState)
		if(nextProps.task == "a"){
			return false
		}else{
			return true
		}
	}
	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log("App getSnapshotBeforeUpdate(prevProps, prevState)",prevProps, prevState)
		return 123
	}
	componentDidUpdate(prevProps, prevState,snapshot){
		console.log("componentDidUpdate(prevProps, prevState,snapshot)",prevProps, prevState,snapshot)
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
	componentDidMount(){
		console.log("App componentDidMount...")
	}
	render(){
		console.log("App render...")
		return (
		<div className="App">
			<input onChange={this.handleChange} value={this.state.task} ref={(input)=>{this.input=input}} />
			<button onClick={this.handleAdd}>提交</button>
			<ul ref={(ul)=>{this.ul=ul}} style={{color:'red',fontSize:'17px'}}>
				{
					this.getItems()
				}
			</ul>
		</div>
		)
	}
}


export default App