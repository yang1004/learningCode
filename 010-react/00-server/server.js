/*
* @Author: mac
* @Date:   2019-08-12 16:16:54
* @Last Modified by:   mac
* @Last Modified time: 2019-08-12 16:30:50
*/
const http = require('http');

const server = http.createServer((req,res)=>{
	res.setHeader('Access-Control-Allow-Origin',"*")
	res.end(JSON.stringify(["learn js","learn css"]))
})

server.listen(3000,'127.0.0.1',()=>{
	console.log("success in 127.0.0.1:3000")
})