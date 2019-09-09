/*
* @Author: mac
* @Date:   2019-07-25 11:33:36
* @Last Modified by:   mac
* @Last Modified time: 2019-07-29 09:00:42
*/
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const swig = require('swig');
const querystring = require('querystring');

const { get,add,remove } = require('./model/item.js')

const mime = require('./mime.json')

const server = http.createServer((req,res)=>{
	const parsedUrl = url.parse(req.url,true);
	const pathname = parsedUrl.pathname;
	console.log(pathname);

	// 处理静态资源
	if(pathname.startsWith('/static/')){
		const filePath = path.normalize(__dirname+"/"+pathname);
		fs.readFile(filePath,(err,data)=>{
			if(err){
				console.log('err:',err);
				res.setHeader("Content-Type","text/html;charset=UTF-8");
				res.statusCode = 404;
				res.end('<h1>请求出错了</h1>')
			}else{
				const extname = path.extname(pathname);
				const extnameType = mime[extname] || 'text/plain'
				res.setHeader('Content-Type',extnameType+';charset=UTF-8')
				res.end(data)
			}
		})
	}
	//处理路由  /Controllter/action/arg/arg...
	else{
		const paths = pathname.split('/');
		console.log(paths);
		const controller = paths[1] || "Index";
		const action = paths[2] || "index";
		const args = paths.splice(3);

		try{
			const item = require(path.normalize(__dirname+"/Controller/"+controller));
			item[action] && item[action](...[req,res].concat(args));
		}catch(err){
			console.log("err::",err);
			res.setHeader("Content-Type","text/html;charset=UTF-8");
			res.statusCode = 404;
			res.end('<h1>代码出错了</h1>');
		}
		
	}

	/*
	if(pathname == "/" || pathname == "/index.html"){
		get()
		.then(data=>{
			//引入swig模版
			const filePath = path.normalize(__dirname+"/static/index.html");
			const template = swig.compileFile(filePath)
			const html = template({
				data:data
			})
			res.setHeader('Content-Type','text/html;charset=UTF-8')
			res.end(html)
		})
		.catch(err=>{
			res.setHeader("Content-Type","text/html;charset=UTF-8");
			res.statusCode = 404;
			res.end('<h1>代码出错了</h1>');
		})
		
	}
	//添加数据
	else if(pathname == "/add"){
		let body = '';
		req.on('data',(chunk)=>{
			body+=chunk;
		})
		req.on('end',()=>{
			const query = querystring.parse(body).task;
			add(query)
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
	//删除数据
	else if(pathname == "/remove"){
		const id = parsedUrl.query.id;
		remove(id)
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
	//请求其他文件
	else{
		const filePath = path.normalize(__dirname+"/static/"+pathname);
		fs.readFile(filePath,(err,data)=>{
			if(err){
				console.log('err:',err);
				res.setHeader("Content-Type","text/html;charset=UTF-8");
				res.statusCode = 404;
				res.end('<h1>请求出错了</h1>')
			}else{
				const extname = path.extname(pathname);
				const extnameType = mime[extname] || 'text/plain'
				res.setHeader('Content-Type',extnameType+';charset=UTF-8')
				res.end(data)
			}
		})
	}
	*/
})

server.listen('3000','127.0.0.1',()=>{
	console.log('http://127.0.0.1:3000');
})