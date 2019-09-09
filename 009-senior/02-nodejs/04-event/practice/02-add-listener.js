/*
* @Author: mac
* @Date:   2019-07-25 08:40:28
* @Last Modified by:   mac
* @Last Modified time: 2019-07-25 08:46:33
*/
const EventEmitter = require('events');
class CustomEmitter extends EventEmitter{

}

const emitter = new CustomEmitter();
/*
//用on
emitter.on('test',()=>{
	console.log('execute test fn1...');
})
//用addlistener
emitter.addListener('test',()=>{
	console.log('execute test fn2...');
})
emitter.emit('test')
emitter.emit('test')
*/
/*
//用once
emitter.once('test',()=>{
	console.log('execute test fn3...');
})
emitter.emit('test')
emitter.emit('test')
*/
emitter.setMaxListeners(11)
emitter.on('test',()=>{
	console.log('execute test fn1...');
})
emitter.on('test',()=>{
	console.log('execute test fn2...');
})
emitter.on('test',()=>{
	console.log('execute test fn3...');
})
emitter.on('test',()=>{
	console.log('execute test fn4...');
})
emitter.on('test',()=>{
	console.log('execute test fn5...');
})
emitter.on('test',()=>{
	console.log('execute test fn6...');
})
emitter.on('test',()=>{
	console.log('execute test fn7...');
})
emitter.on('test',()=>{
	console.log('execute test fn8...');
})
emitter.on('test',()=>{
	console.log('execute test fn9...');
})
emitter.on('test',()=>{
	console.log('execute test fn10...');
})
emitter.on('test',()=>{
	console.log('execute test fn11...');
})
emitter.emit('test')