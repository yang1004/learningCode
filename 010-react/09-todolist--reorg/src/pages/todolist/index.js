/*
* @Author: mac
* @Date:   2019-08-09 15:14:48
* @Last Modified by:   mac
* @Last Modified time: 2019-08-15 08:59:12
*/
import React,{ Component } from 'react';
import { connect } from 'react-redux'
import { Input,Button,Row,Col,List,Typography } from 'antd';
import 'antd/dist/antd.css';
import { actionCreator } from './store'

class TodoList extends Component{
	componentDidMount(){
		this.props.getDataInitThunk()
	}
	render(){
		const {handleChange,task,handleAdd,list,handleDel} = this.props;
		return (
			<div className="TodoList">
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
		list:state.get('todolist').get('list'),
		task:state.get('todolist').get('task')
	}
}

const mapDispatchToProps = (dispatch)=>({
	handleChange(ev){
		const task = ev.target.value
		dispatch(actionCreator.getChangeItem(task))
	},
	handleAdd(){
		dispatch(actionCreator.getAddItem())
	},
	handleDel(index){
		dispatch(actionCreator.getDelItem(index))
	},
	getDataInitThunk(){
		dispatch(actionCreator.getDataInitThunk())
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)