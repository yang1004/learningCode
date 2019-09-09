/*
* @Author: mac
* @Date:   2019-08-10 12:30:54
* @Last Modified by:   mac
* @Last Modified time: 2019-08-11 19:16:51
*/
import React,{ Component } from 'react'
import PropTypes from 'prop-types';


class Item extends Component{
	constructor(props){
		super(props)
	}
	render(){
		// console.log("Item render...")
		const {handleDel,task} = this.props
		return (
			<li onClick={handleDel}>{task}</li>
		)
	}
}

Item.propTypes = {
	handleDel:PropTypes.func,
	task:PropTypes.string
}
Item.defaultProps = {
	task:"learn..."
}

export default Item