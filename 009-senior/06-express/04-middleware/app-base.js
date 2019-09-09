/*
* @Author: mac
* @Date:   2019-08-01 09:41:39
* @Last Modified by:   mac
* @Last Modified time: 2019-08-01 09:48:09
*/
var express = require('express')
var app = express()

app.use(express.static('public'));

app.use((req,res,next)=>{
	console.log('do somethng for A');
	// res.send('task A done')
	next();
})

app.get('/',(req,res)=>{
	res.send('get response data')
})

app.listen(3000)