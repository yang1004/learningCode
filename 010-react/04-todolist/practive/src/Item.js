/*
* @Author: mac
* @Date:   2019-08-10 16:11:15
* @Last Modified by:   mac
* @Last Modified time: 2019-08-10 16:15:59
*/
import React,{Component} from 'react';

class Item extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return <li>{this.props.task}</li>
	}
}

export default Item