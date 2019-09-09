/*
* @Author: mac
* @Date:   2019-07-24 16:47:54
* @Last Modified by:   mac
* @Last Modified time: 2019-07-24 16:51:28
*/
const EventEmitter = require('events');

class CustomEmitter extends EventEmitter{

}
const emitter = new CustomEmitter();

emitter.on('newListener',(eventName,cb)=>{
	console.log('execute newListener fn...');
	console.log('eventName:',eventName);
	cb();
})

// emitter.emit('newListener')
emitter.on('test1',()=>{
	console.log('execute test1 fn...')
})
emitter.on('test2',()=>{
	console.log('execute test2 fn...')
})