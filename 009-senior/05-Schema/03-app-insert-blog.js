/*
* @Author: mac
* @Date:   2019-07-31 09:50:27
* @Last Modified by:   mac
* @Last Modified time: 2019-07-31 10:40:17
*/
/*
* @Author: mac
* @Date:   2019-07-29 16:02:18
* @Last Modified by:   mac
* @Last Modified time: 2019-07-31 09:33:30
*/
const mongoose = require('mongoose');

const BlogModel = require('./models/blog.js');

//1.连接数据库
mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true});

//获取db对象
const db = mongoose.connection;

//连接数据库失败
db.on('error',(err)=>{
	console.log('connect db error',err);
	throw err
})

db.once('open',()=>{
	console.log('insertMany open...')

	//3.使用模型(CRUD)

	BlogModel.insertMany({
		title:"this is a best blog",
		content:"this is a best blog",
		author:"5d40f4f01108ec4511e16cbd"
	})
	.then(docs=>{
		console.log(docs)
	})
	.catch(err=>{
		console.log("insertMany error",err);
	})
})
