/*
* @Author: mac
* @Date:   2019-07-25 09:08:48
* @Last Modified by:   mac
* @Last Modified time: 2019-07-26 08:24:56
*/
const fs = require('fs');
const util = require('util')
// console.log(util)
//同步
/*
//1.1逐步操作
//1.1.1打开文件
// const fd = fs.openSync('./01.txt','w');
const fd = fs.openSync('./01.txt','a');//追加

//1.1.2写入文件
fs.writeSync(fd,'hello')

//1.1.3关闭文件
fs.closeSync(fd)
*/
//合并操作
// fs.writeFileSync('./01.txt','hello',{flag:'a'})



//异步
/*
//2.1逐步操作
//2.1.1打开文件
fs.open('./01.txt','w',(err,fd)=>{
	if(err){
		console.log('open file error::',err)
	}else{
		//2.1.2写入文件
		// console.log('fd::',fd)
		fs.write(fd,'hello',(err)=>{
			if(err){
				console.log('write file error::',err)
			}else{
				console.log('write file success')
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
fs.writeFile('./01.txt','hello',{flag:'w'},err=>{
	if(err){
		console.log('write file error::',err)
	}else{
		console.log('write file success')
	}
})
*/
// console.log('do something...')


//3.promise处理异步
const writeFile = util.promisify(fs.writeFile)

writeFile('./01.txt','good',{flag:'a'})
.then(data=>{
	console.log('write file success')
})
.catch(err=>{
	console.log('write file error::',err)
})

console.log(111)
