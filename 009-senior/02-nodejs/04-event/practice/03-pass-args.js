/*
* @Author: mac
* @Date:   2019-07-25 08:56:23
* @Last Modified by:   mac
* @Last Modified time: 2019-07-25 08:59:33
*/
const EventEmitter = require('events');
class CustomEmitter extends EventEmitter{

}
const emitter = new CustomEmitter();

emitter.on('test',(arg1,arg2)=>{
	console.log("arg1::",arg1);
	console.log("arg2::",arg2);
})
// emitter.emit('test','aa','bb')
const args = ['aa','bb'];
emitter.emit('test',...args)