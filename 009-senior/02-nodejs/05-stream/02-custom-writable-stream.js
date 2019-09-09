/*
* @Author: mac
* @Date:   2019-07-24 17:10:12
* @Last Modified by:   mac
* @Last Modified time: 2019-07-24 17:34:10
*/
const { Writable } = require('stream');
// console.log(Writable)



class CustomEmitter extends Writable{
	_write(chunk,encoding,callback){
		// console.log('chunk::',chunk);
		console.log('chunk::',chunk.toString());
		console.log('encoding::',encoding);
		callback && callback();
	}
}

const writer = new CustomEmitter();

writer.on('finish',()=>{
	console.log('write done...')
})

writer.write('hello','',()=>{
	console.log('execute after fn...')
})

writer.write('good');

writer.end('yes')