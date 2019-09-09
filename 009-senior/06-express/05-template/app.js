/*
* @Author: mac
* @Date:   2019-08-01 09:41:39
* @Last Modified by:   mac
* @Last Modified time: 2019-08-01 19:58:10
*/
const express = require('express');
const swig = require('swig')
const app = express()

// app.use(express.static('views'));

//开发阶段设置不走缓存
swig.setDefaults({
  cache: false
  // cache: 'memory'//走缓存，开发阶段不用
})

//配置应用模板
// 第一个参数是模板名称,同时也是模板文件的扩展名
// 第二个参数是解析模板的方法
app.engine('html', swig.renderFile);

//配置模板的存放目录
// 第一参数必须是views
// 第二个参数是模板存放的目录
app.set('views', './views');

// 注册模板引擎
// 第一个参数必须是view engine
// 第二个参数是模板名称,也就是app.engine的第一个参数
app.set('view engine', 'html')

app.get('/',(req,res)=>{
	res.render('index')
})
app.get('/list',(req,res)=>{
	res.render('list')
})


app.get('/base',(req,res)=>{
	res.render('base',{
		title:"Yang",
		name:"Tom",
		obj:{
			name:"Leo"
		},
		arr:["Amy","Peter","Lumi"]
	})
})

app.listen(3000);