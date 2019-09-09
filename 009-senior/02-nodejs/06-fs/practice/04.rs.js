/*
* @Author: mac
* @Date:   2019-07-27 15:30:17
* @Last Modified by:   mac
* @Last Modified time: 2019-07-27 15:33:36
*/
const fs = require('fs');

const rs = fs.createReadStream('./rs.txt');

rs.on('end',()=>{
	console.log('read stream end')
})
rs.on('open',()=>{
	console.log('read stream open');
})
rs.on('close',()=>{
	console.log('read stream close')
})

rs.on('data',(chunk)=>{
	console.log(chunk)
	console.log(chunk.toString())
})
