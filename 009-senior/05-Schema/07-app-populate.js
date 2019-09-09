/*
* @Author: mac
* @Date:   2019-07-31 09:50:27
* @Last Modified by:   mac
* @Last Modified time: 2019-07-31 19:36:59
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

	//根据名称查询博客的详细信息
	/*
	BlogModel.findOne({title:"blog1"},(err,blog)=>{
		if(err){
			console.log('findOne blog err',err);
		}else{
			let result = {};
			result.blog = blog;
			// console.log(blog)
			DataModel.findById(blog.author,(err,data)=>{
				if(err){
					console.log('findById err',err);
				}else{
					result.data = data;
					console.log(result)
				}
			})
		}
	})
	*/

	/*
	BlogModel.findOne({title:"blog1"})
	.populate('author',"name -_id")
	.then(data=>{
		console.log(data)
	})
	*/

	BlogModel.findBlogs({title:"blog1"})
	.then(data=>{
		console.log(data)
	})
})