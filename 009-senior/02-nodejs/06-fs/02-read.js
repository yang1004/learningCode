/*
* @Author: mac
* @Date:   2019-07-25 10:13:05
* @Last Modified by:   mac
* @Last Modified time: 2019-07-25 19:01:36
*/
/*
* @Author: mac
* @Date:   2019-07-25 09:08:48
* @Last Modified by:   mac
* @Last Modified time: 2019-07-25 10:08:45
*/

const fs = require('fs');
const util = require('util');
// console.log(util)
//同步
/*
//1.1逐步操作
//1.1.1打开文件
const fd = fs.openSync('./01.txt','r');
//1.1.2读取文件
const buf = Buffer.alloc(100);
// console.log(buf)
fs.readSync(fd,buf,1,50,0);
console.log(buf);
console.log(buf.toString());
//1.1.3关闭文件
fs.closeSync(fd)
*/

/*
//合并操作
const reader = fs.readFileSync('./01.txt',{flag:'r'});
// console.log(reader)
console.log(reader.toString())
*/

//异步
/*
//2.1逐步操作
//2.1.1打开文件
fs.open('./01.txt','r',(err,fd)=>{
	if(err){
		console.log('open file err:',err);
	}else{
		//2.1.2读取文件
		// console.log(fd)
		const buf = Buffer.alloc(100);
		fs.read(fd,buf,0,50,0,(err)=>{
			if(err){
				console.log('read file err:',err)
			}else{
				// console.log(buf)
				console.log(buf.toString())
			}
			//2.1.3关闭文件
			fs.close(fd,err=>{
				if(err){
					console.log('close file error::',err)
				}else{
					console.log('close file success')
				}
			})
		})
	}
})
*/
/*
//2.2合并操作
fs.readFile('./01.txt',{flag:'r',encoding:'utf8'},(err,data)=>{
	if(err){
		console.log('read file err:',err);
	}else{
		console.log(data)
	}
})
*/
//3.promise处理异步
const readFile = util.promisify(fs.readFile);
readFile('./01.txt',{flag:'r',encoding:'utf8'})
.then(data=>{
	console.log(data);
})
.catch(err=>{
	console.log('read file err:',err)
})


