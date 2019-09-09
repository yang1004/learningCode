/*
* @Author: mac
* @Date:   2019-07-25 15:02:53
* @Last Modified by:   mac
* @Last Modified time: 2019-07-26 15:35:50
*/
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const querystring = require('querystring');

const swig = require('swig');
const mime = require('./mime.json');
const { get,add,remove } = require('./model/item.js');

//每一次请求都会执行一次createServer方法中的函数
const server = http.createServer((req,res)=>{
	//路由：根据不同的请求做不同的处理
	console.log(req.method+"::"+req.url)

	const parsedUrl = url.parse(req.url,true);
	const pathname = parsedUrl.pathname;
	// console.log(pathname)

	//路由处理
	//首页路由  / /index.html
	if(pathname == "/" || pathname == "/index.html"){
		//1.获取数据
		get()
		.then(data=>{
			//将数据分配到页面并返回页面
			const filePath = path.normalize(__dirname+"/static/index.html");
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
	//添加路由
	else if(pathname == "/add"){//POST请求
		//1.获取参数
		let body = '';
		req.on('data',(chunk)=>{
			body+=chunk;
		})
		req.on('end',()=>{
			const query = querystring.parse(body)
			console.log(query)
			//2.根据参数生成任务对象并且写入到文件中
			add(query.task)
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
	else if(pathname == "/remove"){//GET请求
		//1.获取参数
		const id = parsedUrl.query.id;
		//2.根据参数删除任务对象并更改文件
		remove(id)
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
		//3.返回
		
	}
	//静态资源的处理
	else{
		const filePath = path.normalize(__dirname+"/static/"+req.url);
		//1.读取文件
		fs.readFile(filePath,(err,data)=>{
			//返回数据
			if(err){
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.statusCode = 404;
				res.end('<h1>代码出错了</h1>')
			}else{
				//根据扩展名设置mime类型
				const extname = path.extname(filePath);
				const mimeType = mime[extname] || "text/plain";
				res.setHeader('Content-Type',mimeType+';charset=UTF-8');
				res.end(data)
			}
		})
	}

	
	
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running on http://127.0.0.1:300')
})