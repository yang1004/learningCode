/*
* @Author: mac
* @Date:   2019-08-01 09:41:39
* @Last Modified by:   mac
* @Last Modified time: 2019-08-01 10:17:26
*/
var querystring = require('querystring');
var express = require('express');
var bodyParser = require('body-parser');
var app = express()

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.get('/',(req,res)=>{
	res.send('get response data')
})
app.post('/',(req,res)=>{
	// console.log(req.params)

	console.log(req.body)

	/*
	let body = '';

	req.on('end',()=>{
		console.log(querystring.parse(body))
	})

	req.on('data',(chunk)=>{
		body+=chunk
	})
	*/
	res.json({
		code:0
	})
})

app.listen(3000)