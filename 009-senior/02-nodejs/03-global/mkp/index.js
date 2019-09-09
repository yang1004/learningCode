/*
* @Author: mac
* @Date:   2019-07-24 10:54:21
* @Last Modified by:   mac
* @Last Modified time: 2019-07-24 11:01:59
*/
//指定项目名称，创建前段项目目录结构
const fs = require('fs');

function mkp(){
	//1.获取名称
	const pathName = "./"+process.argv[2];
	// console.log(pathName);
	//2.根据名称生成文件夹
	fs.mkdirSync(pathName)
	fs.mkdirSync(pathName+"/css")
	fs.mkdirSync(pathName+"/js")
	fs.mkdirSync(pathName+"/img")
}

module.exports = mkp