/*
* @Author: mac
* @Date:   2019-07-26 08:53:06
* @Last Modified by:   mac
* @Last Modified time: 2019-07-27 15:05:08
*/
const fs = require('fs');
const util = require('util')
//同步
/*
//逐步操作
//1.1.1打开文件
const fd = fs.openSync('./01.txt','r');
//1.1.2读取文件
const buf = Buffer.alloc(100);
fs.readSync(fd,buf,0,50,0)
console.log(buf)
console.log(buf.toString())
//1.1.3关闭文件
fs.closeSync(fd)
*/
/*
//合并操作
const buf = fs.readFileSync('./01.txt');
console.log(buf)
console.log(buf.toString())
*/

//异步
/*
//逐步操作
//1.1.1打开文件
fs.open('./01.txt','r',(err,fd)=>{
	if(err){
		console.log('open text err',err);
	}else{
		//1.1.2读取文件
		const buf = Buffer.alloc(100);
		fs.read(fd,buf,0,50,0,(err)=>{
			if(err){
				console.log('read text err',err);
			}else{
				console.log(buf)
				console.log(buf.toString())
			}
			//1.1.3关闭文件
			fs.close(fd,(err)=>{
				if(err){
					console.log('close text err',err);
				}else{
					console.log('close text success')
				}
			})
		})
	}
})
*/
/*
//合并操作
fs.readFile('./01.txt',(err,data)=>{
	if(err){
		console.log('readFile text err',err);
	}else{
		console.log(data)
		console.log(data.toString());
	}
})
*/
//promise处理异步
const readFile = util.promisify(fs.readFile);
readFile('./01.txt',{flag:"r"})
.then(data=>{
	console.log(data)
	console.log(data.toString())
})
.catch(err=>{
	console.log(err)
})


