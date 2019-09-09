/*
* @Author: mac
* @Date:   2019-08-12 10:12:20
* @Last Modified by:   mac
* @Last Modified time: 2019-08-14 09:40:35
*/
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducer.js'
import { createLogger } from 'redux-logger'

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
	const logger = createLogger({
		// ...options
	});

	middlewares.push(logger);
}

//创建store
const store = createStore(reducer,applyMiddleware(...middlewares))

export default store