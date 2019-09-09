/*
* @Author: mac
* @Date:   2019-07-25 15:02:53
* @Last Modified by:   mac
* @Last Modified time: 2019-07-26 19:04:29
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

	/*
		约定：
		以/static/开头的请求都是静态资源
		不以/static/开头的请求是具体的路由
		路由的格式:
		/Controller/action/arg1/arg2/arg3...
	*/


	if(pathname.startsWith("/static/")){
		//静态资源的处理
		const filePath = path.normalize(__dirname+"/"+req.url);
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
	//路由处理
	else{
		//解析路由
		const paths = pathname.split('/');
		console.log(paths);
		const controller = paths[1] || "index";//[ '', 'item', 'index', '11', '22' ]
		const action = paths[2] || "index";
		const args = paths.splice(3);

		/*
		 约定：
		 所有的Controller文件都保存在./Controller/目录下
		*/
		try{
			const mode = require(path.normalize(__dirname+"/Controller/"+controller))
			mode[action] && mode[action](...[req,res].concat(args))
		}catch(err){
			console.log("err:::",err)
			res.setHeader('Content-Type','text/html;charset=UTF-8');
			res.statusCode = 404;
			res.end('<h1>代码出错了</h1>');
		}		
	}
	
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running on http://127.0.0.1:300')
})