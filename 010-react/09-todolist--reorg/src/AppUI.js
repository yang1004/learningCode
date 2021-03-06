/*
* @Author: mac
* @Date:   2019-08-09 15:14:48
* @Last Modified by:   mac
* @Last Modified time: 2019-08-12 19:43:47
*/
import React,{ Component } from 'react';
import { Input,Button,Row,Col,List,Typography } from 'antd';
import 'antd/dist/antd.css';
import './App.css'

const AppUI = (props)=>{
	const {handleChange,task,handleAdd,list,handleDel} = props;
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
		      renderItem={(item,index) => <List.Item onClick={handleDel.bind(this,index)}>{item}</List.Item>}
		    />
		    </Col>
		</div>
	)
}


export default AppUI