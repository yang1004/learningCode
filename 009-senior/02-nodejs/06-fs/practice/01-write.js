/*
* @Author: mac
* @Date:   2019-07-25 19:40:27
* @Last Modified by:   mac
* @Last Modified time: 2019-07-26 08:54:55
*/
const fs = require('fs');
const util = require('util');
//同步
/*
//逐步操作
//1.1.1打开文件
const fd = fs.openSync('./01.txt','w');
//1.1.2写入文件
fs.writeSync(fd,'hello');
//1.1.3关闭文件
fs.closeSync(fd)
*/
//合并操作
// fs.writeFileSync('./01.txt','good',{flag:'a'})


//异步
/*
//逐步操作
//1.1.1打开文件
fs.open('./01.txt','a',(err,fd)=>{
	if(err){
		console.log('open error:',err);
	}else{
		console.log('open txt success')
		//1.1.2写入文件
		fs.write(fd,'well',(err)=>{
			if(err){
				console.log('write error:',err)
			}else{
				console.log('write txt success');
			}
			//1.1.3关闭文件
			fs.close(fd,(err)=>{
				if(err){
					console.log('close error:',err);
				}else{
					console.log('close txt success')
				}
			})
		})
	}
})
*/
/*
//合并操作
fs.writeFile('./01.txt','good',{flag:'a'},err=>{
	if(err){
		console.log('write error:',err);
	}else{
		console.log('write success')
	}
})
*/
//promise处理异步
const writeFile = util.promisify(fs.writeFile);
writeFile('./01.txt','well',{flag:'a'})
.then(data=>{
	console.log('write success')
})
.catch(err=>{
	console.log('write error:',err);
})

