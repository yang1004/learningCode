/*
* @Author: mac
* @Date:   2019-08-09 15:14:48
* @Last Modified by:   mac
* @Last Modified time: 2019-08-14 19:14:05
*/
import React,{ Component } from 'react';
import TodoList from './pages/todolist'
import 'antd/dist/antd.css';
import './App.css'

class App extends Component{
	render(){
		return (
			<div className="App">
				<TodoList />
			</div>
		)
	}
}

export default App