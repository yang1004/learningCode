/*
* @Author: mac
* @Date:   2019-08-06 15:04:50
* @Last Modified by:   mac
* @Last Modified time: 2019-08-06 15:20:16
*/
const EvnetEmitter = require('events');

const emitter = new EvnetEmitter();

/*
emitter.on('test',()=>{
	console.log('emitter on test1...')
})

emitter.addListener('test',()=>{
	console.log('emitter addListener test2...')
})

emitter.once('test',()=>{
	console.log('emitter once test3...')
})


emitter.emit('test');
emitter.emit('test');
emitter.emit('test');
*/

emitter.setMaxListeners(13)

emitter.on('test',()=>{
	console.log('emitter on test1...')
})
emitter.on('test',()=>{
	console.log('emitter on test2...')
})
emitter.on('test',()=>{
	console.log('emitter on test3...')
})
emitter.on('test',()=>{
	console.log('emitter on test4...')
})
emitter.on('test',()=>{
	console.log('emitter on test5...')
})
emitter.on('test',()=>{
	console.log('emitter on test6...')
})
emitter.on('test',()=>{
	console.log('emitter on test7...')
})
emitter.on('test',()=>{
	console.log('emitter on test8...')
})
emitter.on('test',()=>{
	console.log('emitter on test9...')
})
emitter.on('test',()=>{
	console.log('emitter on test10...')
})
emitter.on('test',()=>{
	console.log('emitter on test11...')
})
emitter.on('test',()=>{
	console.log('emitter on test12...')
})
emitter.on('test',()=>{
	console.log('emitter on test13...')
})

emitter.emit('test');
emitter.emit('test');