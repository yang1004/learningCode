/*
* @Author: mac
* @Date:   2019-07-27 15:26:21
* @Last Modified by:   mac
* @Last Modified time: 2019-07-27 15:29:54
*/
const fs = require('fs');

const ws = fs.createWriteStream('./ws.txt');

ws.on('finish',()=>{
	console.log('write stream finish')
})
ws.on('open',()=>{
	console.log('write stream open');
})
ws.on('close',()=>{
	console.log('write stream close')
})

ws.write('hello');
ws.write('good');
ws.end()