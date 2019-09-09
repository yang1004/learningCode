/*
* @Author: mac
* @Date:   2019-07-27 15:35:55
* @Last Modified by:   mac
* @Last Modified time: 2019-07-27 15:39:01
*/
const fs = require('fs');

const rs = fs.createReadStream('./a.jpg');
const ws = fs.createWriteStream('./b.jpg');

/*
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
})
*/


rs.pipe(ws);