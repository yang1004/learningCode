/*
* @Author: mac
* @Date:   2019-07-25 18:54:20
* @Last Modified by:   mac
* @Last Modified time: 2019-07-26 15:07:17
*/
const fs = require('fs')
const util = require('util');
const path = require('path');
const pathData = path.normalize(__dirname+"/../data/item.json");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function get(){
	const data = await readFile(pathData);
	const arr = JSON.parse(data)
	// console.log(data.toString())
	return arr;
}

async function add(task){
	//1.读取文件
	const data = await readFile(pathData);
	//2.将读取文件的字符串转换为数组
	const arr = JSON.parse(data);
	//3.根据参数生成任务对象并且将任务对象插入到数组
	const obj = {
		id:Date.now().toString(),
		task:task
	}
	arr.push(obj)
	//4.把新数组转换为字符串,把字符串覆盖写入到数据
	await writeFile(pathData,JSON.stringify(arr))
	//6.返回任务对象
	return obj;
	
}

async function remove(id){
	//1.读取文件
	const data = await readFile(pathData);
	//2.将读取文件的字符串转换为数组
	const arr = JSON.parse(data);
	//3.根据ID删除数组中对应的数据并且生成新的数组
	const newArr = arr.filter((item)=>{
		return item.id != id;
	})
	//4.把新数组转换为字符串,把字符串覆盖写入到数据
	await writeFile(pathData,JSON.stringify(newArr));
}


module.exports = {
	get,
	add,
	remove
}