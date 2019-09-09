/*
* @Author: mac
* @Date:   2019-08-06 15:15:42
* @Last Modified by:   mac
* @Last Modified time: 2019-08-06 15:26:48
*/
const EventEmitter = require('events');

const emitter = new EventEmitter();

const listener = function(){
	console.log('emitter test fn...')
}

emitter.on('test',listener)

emitter.addListener('test',listener)

emitter.emit('test');

// emitter.removeListener('test',listener)
emitter.off('test',listener)

emitter.emit('test');