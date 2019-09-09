/*
* @Author: mac
* @Date:   2019-08-10 12:30:54
* @Last Modified by:   mac
* @Last Modified time: 2019-08-11 10:46:16
*/
import React,{ Component } from 'react'


class Item extends Component{
	constructor(props){
		super(props)
	}
	render(){
		const {handleDel,task} = this.props
		return (
			<li onClick={handleDel}>{task}</li>
		)
	}
}

export default Item