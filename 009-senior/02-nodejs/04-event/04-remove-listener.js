/*
* @Author: mac
* @Date:   2019-07-24 16:32:48
* @Last Modified by:   mac
* @Last Modified time: 2019-07-24 16:38:52
*/
const EventEmitter = require('events');

class CustomEmitter extends EventEmitter{

}
const emitter = new CustomEmitter();

const listener = ()=>{
	console.log('execute test fn...')
}

emitter.on('test',listener);

emitter.off('test',listener);

emitter.emit('test');