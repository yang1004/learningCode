/*
* @Author: mac
* @Date:   2019-08-09 15:14:48
* @Last Modified by:   mac
* @Last Modified time: 2019-08-14 10:15:37
*/
import React,{ Component } from 'react';
import { connect } from 'react-redux'
import { Input,Button,Row,Col,List,Typography } from 'antd';
import 'antd/dist/antd.css';
import AppUI from './AppUI.js'
import {
	getAddItem,
	getChangeItem,
	getDelItem,
	getDataInit,
	getDataInitThunk
} from './store/actionCreator.js'

class App extends Component{
	componentDidMount(){
		this.props.getDataInitThunk()
	}
	render(){
		const {handleChange,task,handleAdd,list,handleDel} = this.props;
		return (
			<div className="App">
				<Row>
					<Col span={16}>
					<Input 
						placeholder="Basic usage" 
						onChange={handleChange}
						value={task}
					/>
					</Col>
					<Col span={8}>
					<Button type="primary" onClick={handleAdd}>提交</Button>
					</Col>
				</Row>
				<Col span={16}>
				<List
			      bordered
			      dataSource={list}
			      renderItem={(item,index) => <List.Item onClick={()=>{handleDel(index)}}>{item}</List.Item>}
			    />
			    </Col>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return {
		list:state.list,
		task:state.task
	}
}

const mapDispatchToProps = (dispatch)=>({
	handleChange(ev){
		const task = ev.target.value
		dispatch(getChangeItem(task))
	},
	handleAdd(){
		dispatch(getAddItem())
	},
	handleDel(index){
		dispatch(getDelItem(index))
	},
	getDataInitThunk(){
		dispatch(getDataInitThunk())
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(App)