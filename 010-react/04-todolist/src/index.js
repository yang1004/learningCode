/*
* @Author: mac
* @Date:   2019-08-09 10:53:43
* @Last Modified by:   mac
* @Last Modified time: 2019-08-11 19:12:36
*/
import React from 'react';
import ReactDom from 'react-dom';

import App from './App.js'

ReactDom.render(<App />,document.getElementById('root'))


/*
function tick(){
	const elem = (
        <div>
            <h1>hello</h1>
            <p>{new Date().toLocaleTimeString()}</p>
        </div>
    )
    ReactDOM.render(elem,document.getElementById('root'))
}
*/

// tick();
// setInterval(tick,1000)