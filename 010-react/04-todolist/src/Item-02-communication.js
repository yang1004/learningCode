/*
* @Author: mac
* @Date:   2019-08-10 12:30:54
* @Last Modified by:   mac
* @Last Modified time: 2019-08-11 10:22:17
*/
import React,{ Component } from 'react'


class Item extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<li onClick={this.props.handleDel}>{this.props.task}</li>
		)
	}
}

export default Item