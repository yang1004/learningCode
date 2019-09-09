/*
* @Author: mac
* @Date:   2019-08-06 14:50:20
* @Last Modified by:   mac
* @Last Modified time: 2019-08-06 15:20:05
*/
const EventEmitter = require('events');

/*
const emitter = new EventEmitter();

emitter.on('test',()=>{
	console.log('emitter test')
})

emitter.emit('test')
*/


class event extends EventEmitter{

}

const emitter = new event();

emitter.on('test',()=>{
	console.log('emitter test')
})

emitter.emit('test')