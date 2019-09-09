/*
 * @Author: TomChen
 * @Date:   2019-08-09 15:14:36
 * @Last Modified by:   mac
 * @Last Modified time: 2019-08-14 17:20:27
 */
import React, { Component } from 'react'
import './App.css'

import { 
	BrowserRouter as Router, 
	// HashRouter as Router, 
	Route, 
	Link,
	Switch
} from "react-router-dom";

import TodoList from './pages/todolist'

class Home extends Component{
	render(){
		return <h2>here is Home</h2>
	}
}

class User extends Component{
	render(){
		return <h2>here is User,User id is {this.props.match.params.id}</h2>
	}
}

class Admin extends Component{
	render(){
		return <Switch>
			<Route exact path="/admin" render={()=><h2>here is Admin home pages</h2>} />
			<Route path="/admin/populate" render={()=><h2>here is Admin populate pages</h2>} />
			<Route path="/admin/:id" render={(router)=><h2>here is Admin home pages,Admin id is {router.match.params.id}</h2>} />
		</Switch>
	}
}

class App extends Component {
    render() {
    	const ProtectRouter = ({component:Component},...rest)=>{
    		return <Route 
    			{...rest}
    			render={()=><Component />}
    		/>
    	}
        return (
        	<Router>
	            <div className="App">
	            	<nav>
	            		<ul>
	            			<li><Link to="/">Home</Link></li>
	            			<li><Link to="/TodoList">TodoList</Link></li>
	            			<li><Link to="/about">about</Link></li>
	            			<li><Link to="/user/123">User</Link></li>
	            			<li><Link to="/admin">Admin</Link></li>
	            			<li><Link to="/admin/123">Admin/123</Link></li>
	            			<li><Link to="/admin/populate">Admin/populate</Link></li>
	            		</ul>
	            	</nav>
	            	<Route path="/" exact component={Home} />
	            	<Route path="/TodoList" component={TodoList} />
	            	<Route path="/about" render={()=><h2>here is about</h2>} />
	            	<Route path="/user/:id" component={User} />
	            	<ProtectRouter path="/admin" component={Admin} />
	            </div>
            </Router>
        )          
    }
}



export default App