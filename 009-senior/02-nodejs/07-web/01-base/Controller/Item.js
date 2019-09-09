/*
* @Author: mac
* @Date:   2019-07-29 08:30:20
* @Last Modified by:   mac
* @Last Modified time: 2019-07-29 09:52:27
*/
const path = require('path');
const swig = require('swig');
const querystring = require('querystring');
const { get:getItem,add:addItem,remove:removeItem } = require('../model/item.js');

class Controller{
	index(req,res,...args){
		getItem()
		.then(data=>{
			//引入swig模版
			const filePath = path.normalize(__dirname+"/../View/item/index.html");
			const template = swig.compileFile(filePath)
			const html = template({
				data:data
			})
			res.setHeader('Content-Type','text/html;charset=UTF-8')
			res.end(html)
		})
		.catch(err=>{
			console.log("error::",err)
			res.setHeader("Content-Type","text/html;charset=UTF-8");
			res.statusCode = 404;
			res.end('<h1>代码出错了</h1>');
		})
	}
	add(req,res,...args){
		let body = '';
		req.on('data',(chunk)=>{
			body+=chunk;
		})
		req.on('end',()=>{
			const query = querystring.parse(body).task;
			addItem(...args)
			.then(data=>{
				console.log(data)
				res.end(JSON.stringify({
					code:0,
					message:"添加成功",
					data:data
				}))
			})
			.catch(err=>{
				res.end(JSON.stringify({
					code:1,
					message:"添加失败"
				}))
			})
		})
	}
	remove(req,res,...args){
		removeItem(...args)
		.then(data=>{
			res.end(JSON.stringify({
				code:0,
				message:"删除成功"
			}))
		})
		.catch(err=>{
			res.end(JSON.stringify({
				code:1,
				message:"删除失败"
			}))
		})
	}
}

module.exports = new Controller();