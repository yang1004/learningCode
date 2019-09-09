/*
* @Author: mac
* @Date:   2019-07-24 16:07:50
* @Last Modified by:   mac
* @Last Modified time: 2019-07-24 16:16:10
*/
const EventEmitter = require('events');

class CustomEmitter extends EventEmitter{

}

const emitter = new CustomEmitter();

/*
//用on
emitter.on('test',()=>{
	console.log('execute test fn1...')
})
//用addListener
emitter.addListener('test',()=>{
	console.log('execute test fn2...')
})

emitter.emit('test');
emitter.emit('test');
*/
/*
//用once
emitter.once('test',()=>{
	console.log('execute test fn3...')
})
emitter.emit('test');
emitter.emit('test');//只触发一次
*/

emitter.setMaxListeners(11)
emitter.on('test',()=>{
	console.log('execute test fn1...')
})
emitter.on('test',()=>{
	console.log('execute test fn2...')
})
emitter.on('test',()=>{
	console.log('execute test fn3...')
})
emitter.on('test',()=>{
	console.log('execute test fn4...')
})
emitter.on('test',()=>{
	console.log('execute test fn5...')
})
emitter.on('test',()=>{
	console.log('execute test fn6...')
})
emitter.on('test',()=>{
	console.log('execute test fn7...')
})
emitter.on('test',()=>{
	console.log('execute test fn8...')
})
emitter.on('test',()=>{
	console.log('execute test fn9...')
})
emitter.on('test',()=>{
	console.log('execute test fn10...')
})
emitter.on('test',()=>{
	console.log('execute test fn11...')
})
emitter.emit('test')
