/*
* @Author: mac
* @Date:   2019-08-09 10:53:43
* @Last Modified by:   mac
* @Last Modified time: 2019-08-14 09:41:23
*/
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index.js'

import App from './App.js'

ReactDom.render(<Provider store={store}><App /></Provider>,document.getElementById('root'))
