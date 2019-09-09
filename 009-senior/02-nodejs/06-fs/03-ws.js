/*
* @Author: mac
* @Date:   2019-07-25 10:55:42
* @Last Modified by:   mac
* @Last Modified time: 2019-07-25 10:59:07
*/
const fs = require('fs');
const ws = fs.createWriteStream('./ws.txt');

ws.on('open',()=>{
	console.log('write stream open...')
})
ws.on('close',()=>{
	console.log('write stream close...')
})
ws.on('finish',()=>{
	console.log('write data end...')
})

ws.write('hello')
ws.write('good')
ws.end()