/*
* @Author: mac
* @Date:   2019-08-09 15:14:48
* @Last Modified by:   mac
* @Last Modified time: 2019-08-09 15:43:13
*/
import React,{ Component,Fragment } from 'react';

class App extends Component{
	render(){
		/*
		return <div>here is a App</div>
		*/
		/*
		return <div>
			<input />
			<button>按钮</button>
		</div>
		*/
		/*
		return <Fragment>
			<input />
			<button>按钮</button>
		</Fragment>
		*/
		return (
		<div>
			{
				//注释1
				/*注释2*/
			}
			<input />
			<button>按钮</button>
		</div>
		)
	}
}


export default App