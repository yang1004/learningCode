/*
* @Author: mac
* @Date:   2019-07-24 19:52:18
* @Last Modified by:   mac
* @Last Modified time: 2019-07-27 14:15:02
*/
const { Readable } = require('stream');
// console.log(Readable)
/*
const reader = new Readable();
reader.on('data',(chunk)=>{
	console.log(chunk)
})
*/

class CustomReadable extends Readable{
	constructor(){
		super();
		this.index = 0;
	}
	_read(){
		this.index++;
		if(this.index>5){
			this.push(null)
		}else{
			this.push(this.index+'')
		}
	}
}

const reader = new CustomReadable();
/*
let body = '';

reader.on('data',(chunk)=>{
	// console.log(chunk)
	body+=chunk;
})

reader.on('end',()=>{
	console.log('end...')
	console.log(body)
})
*/

reader.pipe(process.stdout)