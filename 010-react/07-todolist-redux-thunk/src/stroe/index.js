/*
* @Author: mac
* @Date:   2019-08-12 10:12:20
* @Last Modified by:   mac
* @Last Modified time: 2019-08-14 08:56:58
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

//创建stroe
const stroe = createStore(reducer,applyMiddleware(...middlewares))

export default stroe