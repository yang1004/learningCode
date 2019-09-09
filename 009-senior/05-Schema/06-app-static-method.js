/*
* @Author: mac
* @Date:   2019-07-31 09:50:27
* @Last Modified by:   mac
* @Last Modified time: 2019-07-31 15:33:56
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

	//通过电话号码查找
	/*
	DataModel.findOne({phone:"13923048176"},(err,data)=>{
		if(err){
			console.log('findOne phone err',err);
		}else{
			console.log(data)
		}
	})
	*/
	/*
	DataModel.findByPhone("13923048176",(err,data)=>{
		if(err){
			console.log('findOne phone err',err);
		}else{
			console.log(data)
		}
	})
	*/

	DataModel.findByName("Tom",(err,data)=>{
		if(err){
			console.log('findOne name err',err);
		}else{
			console.log(data)
		}
	})
})