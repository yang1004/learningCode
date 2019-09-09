/*
* @Author: mac
* @Date:   2019-07-27 15:50:22
* @Last Modified by:   mac
* @Last Modified time: 2019-07-28 19:10:30
*/
const fs = require('fs');
const util = require('util');
const path = require('path');
const filePath = path.normalize(__dirname+"/../data/item.json");
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function get(){
	const args = await readFile(filePath);
	const arr = JSON.parse(args);
	// console.log(arr)
	return arr;
}

async function add(task){
	const args = await readFile(filePath);
	const arr = JSON.parse(args);
	const obj = {
		id:Date.now(),
		task:task
	}
	arr.push(obj);
	const result = JSON.stringify(arr)
	//读文件写入数组arr
	const write = await writeFile(filePath,result,{flag:"w"})
	return obj;
}

async function remove(id){
	const args = await readFile(filePath);
	const arr = JSON.parse(args);
	const newArr = arr.filter((item)=>{
		return item.id != id;
	})
	const result = JSON.stringify(newArr);
	await writeFile(filePath,result,{flag:"w"});
}

module.exports = {
	get,
	add,
	remove
}