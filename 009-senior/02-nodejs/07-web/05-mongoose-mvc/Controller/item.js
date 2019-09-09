/*
* @Author: mac
* @Date:   2019-07-26 16:10:38
* @Last Modified by:   mac
* @Last Modified time: 2019-07-30 20:12:22
*/
const path = require('path');
const swig = require('swig');
const querystring = require('querystring');
const { get:getItems,add:addItem,remove:removeItem } = require('../model/item.js');
class Controller{
	//index其实就是一个action
	index(req,res,...args){
		//1.获取数据
		getItems("toData")
		.then(data=>{
			console.log("then:::::",data)
			//将数据分配到页面并返回页面
			const filePath = path.normalize(__dirname+"/../View/item/index.html");
			//引入模版
			const template = swig.compileFile(filePath);
			const html = template({
				data:data
			})
			// console.log(html)
			res.setHeader('Content-Type','text/html;charset=UTF-8');
			res.end(html)
		})
		.catch(err=>{
			res.setHeader('Content-Type','text/html;charset=UTF-8');
			res.statusCode = 404;
			res.end('<h1>代码出错了</h1>');
		})
	}
	add(req,res,...args){
		//1.获取参数
		let body = '';
		req.on('data',(chunk)=>{
			body+=chunk;
		})
		req.on('end',()=>{
			const query = querystring.parse(body)
			console.log(query)
			//2.根据参数生成任务对象并且写入到文件中
			addItem(query.task)
			.then(data=>{
				//3.如果写入成功，将新生成的任务对象返回前端
				res.end(JSON.stringify({
					code:0,
					message:'添加成功',
					data:data
				}))
			})
			.catch(err=>{
				console.log('err:',err)
				res.end(JSON.stringify({
					code:1,
					message:'添加失败'
				}))
			})
		})
	}
	remove(req,res,...args){
		//1.获取参数
		const id = args[0];
		// console.log(id)
		//2.根据参数删除任务对象并更改文件
		removeItem(id)
		.then(()=>{
			res.end(JSON.stringify({
				code:0,
				message:'删除成功',
			}))
		})
		.catch(()=>{
			res.end(JSON.stringify({
				code:1,
				message:'删除失败',
			}))
		})
	}
}

module.exports = new Controller();