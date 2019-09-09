/*
* @Author: mac
* @Date:   2019-07-31 09:50:27
* @Last Modified by:   mac
* @Last Modified time: 2019-07-31 15:34:39
*/
/*
* @Author: mac
* @Date:   2019-07-29 16:02:18
* @Last Modified by:   mac
* @Last Modified time: 2019-07-31 09:33:30
*/
const mongoose = require('mongoose');

const DataModel = require('./models/data.js');
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

	/*
	DataModel.insertMany({
		name:"King",
		age:23,
		major:"Computer",
		phone:"13923048176",
		// isLocked:true
	})
	.then(data=>{
		console.log(data)
	})
	.catch(err=>{
		console.log("insertMany error",err.message);
	})
	*/
	/*
	BlogModel.insertMany([{
		title:"blog1",
		content:"blog1 content",
		author:"5d410d1fbe2f8448362912fb"
	},{
		title:"blog2",
		content:"blog2 content",
		author:"5d410d4e5b0ea9484d45f6eb"
	}])
	.then(data=>{
		console.log(data)
	})
	.catch(err=>{
		console.log("insertMany error",err.message);
	})
	*/

	//根据姓名找到第一个用户的所有文章
	/*
	DataModel.findOne({name:"Amy"},(err,data)=>{
		if(err){
			console.log('find data err',err);
		}else{
			// console.log(data)
			BlogModel.find({author:data._id},(err,doc)=>{
				if(err){
					console.log('find doc err',err);
				}else{
					console.log(doc)
				}
			})
		}
	})
	*/

	DataModel.findOne({name:"Amy"},(err,data)=>{
		if(err){
			console.log('find data err',err);
		}else{
			// console.log(data)
			data.findBlogs((err,blog)=>{
				if(err){
					console.log('find doc err',err);
				}else{
					console.log(blog)
				}
			})
		}
	})
})