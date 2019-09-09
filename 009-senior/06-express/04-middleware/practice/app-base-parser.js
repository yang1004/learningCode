/*
* @Author: mac
* @Date:   2019-07-31 16:03:51
* @Last Modified by:   mac
* @Last Modified time: 2019-08-01 21:59:52
*/
const querystring = require('querystring');
const express = require('express');

const bodyParser = require('body-parser')

const app = express()

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json())

app.post("/",(req,res)=>{
	
	/*
	let body = '';
	req.on('end',(req,res)=>{
		console.log(querystring.parse(body))
	})
	req.on('data',(chunk)=>{
		body += chunk;
	})
	*/

	console.log(req.body)

	res.json({
		code:0
	})
})

app.listen(3000)