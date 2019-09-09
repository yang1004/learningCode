/*
* @Author: mac
* @Date:   2019-08-12 10:12:20
* @Last Modified by:   mac
* @Last Modified time: 2019-08-12 10:35:53
*/
import { createStore } from 'redux';
import reducer from './reducer.js'

//创建stroe
const stroe = createStore(reducer)

export default stroe