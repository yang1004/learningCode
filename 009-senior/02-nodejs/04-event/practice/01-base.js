/*
* @Author: mac
* @Date:   2019-07-24 22:23:04
* @Last Modified by:   mac
* @Last Modified time: 2019-07-24 22:29:10
*/
const EventEmitter = require('events');
/*
const emitter = new EventEmitter();

emitter.on('test',()=>{
	console.log('execute test fn...');
})
emitter.emit('test')
*/

class CustomEmitter extends EventEmitter{

}
const emitter = new CustomEmitter();
emitter.on('test',()=>{
	console.log('execute test fn...')
})
emitter.emit('test')