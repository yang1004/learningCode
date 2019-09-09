/*
* @Author: mac
* @Date:   2019-07-25 10:55:42
* @Last Modified by:   mac
* @Last Modified time: 2019-07-25 11:11:06
*/
const fs = require('fs');
const rs = fs.createReadStream('./rs.txt');

rs.on('open',()=>{
	console.log('write stream open...')
})
rs.on('close',()=>{
	console.log('write stream close...')
})
rs.on('end',()=>{
	console.log('read stream end');
})

rs.on('data',(chunk)=>{
	console.log(chunk)
})

