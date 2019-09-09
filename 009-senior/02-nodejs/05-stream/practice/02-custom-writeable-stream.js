/*
* @Author: mac
* @Date:   2019-07-24 19:19:47
* @Last Modified by:   mac
* @Last Modified time: 2019-07-25 09:52:58
*/
const {Writable} = require('stream');
// console.log(write.Writable)
/*
const writer = new Writable();
writer.write('hello')
*/
setTimeout(()=>{
	console.log(222)
},0)

class CustomWritable extends Writable{
	_write(chunk, encoding, callback){
		console.log("chunk::",chunk.toString());
		console.log("encoding::",encoding);
		callback && callback();
	}
}

const writer = new CustomWritable();

writer.on('finish',()=>{
	console.log('write done...')//包括异步的回调函数执行后执行,再执行之后的代码
})

writer.write('hello','',()=>{
	console.log('write hello...')//异步程序
})

writer.write('good');

writer.end('end');

console.log(111)