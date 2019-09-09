/*
* @Author: mac
* @Date:   2019-08-06 15:28:03
* @Last Modified by:   mac
* @Last Modified time: 2019-08-06 15:34:28
*/
const EventEmitter = require('events');

class CustomEventEmitter extends EventEmitter{

}

const emitter = new CustomEventEmitter();

emitter.on('newListener',(test,listener)=>{
	console.log('newListener test')
	listener()
})

emitter.on('test',()=>{
	console.log('on test')
})