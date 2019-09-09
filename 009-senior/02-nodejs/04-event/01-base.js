/*
* @Author: mac
* @Date:   2019-07-24 15:50:05
* @Last Modified by:   mac
* @Last Modified time: 2019-07-24 15:55:52
*/
const EventEmitter = require('events');
/*
const emitter = new EventEmitter();

//事件绑定
emitter.on('test',()=>{
	console.log('execute test fn...')
})
//事件触发
emitter.emit('test')
*/
// console.log(EventEmitter);


class CustomEmitter extends EventEmitter{

}

const emitter = new CustomEmitter();

emitter.on('test',()=>{
	console.log('execute test fn...')
})
emitter.emit('test')