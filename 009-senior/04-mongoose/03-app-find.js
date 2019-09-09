/*
* @Author: mac
* @Date:   2019-07-29 16:02:18
* @Last Modified by:   mac
* @Last Modified time: 2019-07-29 17:45:45
*/
const mongoose = require('mongoose');

//1.连接数据库
mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true});

//获取db对象
const db = mongoose.connection;

//连接数据库失败
db.on('error',()=>{
	console.log('connect db error');
	throw 'connect db error'
})

db.once('open',()=>{
	//1.定义Schema
	const UserSchema = new mongoose.Schema({
	  name: String,
	  age:Number,
	  major:String
	});
	//2.根据Schema定义数据模型
	//2.1model方法第一个参数指定集合名称,mongoose会默认转换为复数
	//2.2model方法第二个参数指定Schema
	const UserModel = mongoose.model('user', UserSchema);

	//3.使用模型(CRUD)
	//3.2查找
	/*
	UserModel.find({age:{$gt:28}},(err,docs)=>{
		if(err){
			console.log('find user err::',err);
		}else{
			console.log(docs);
		}
	})
	*/
	/*
	UserModel.find({age:{$gt:28}},"name",(err,docs)=>{
		if(err){
			console.log('find user err::',err);
		}else{
			console.log(docs);
		}
	})
	*/
	/*
	UserModel.findById("5d3ebf0e495dab3be571c996",(err,docs)=>{
		if(err){
			console.log('find user err::',err);
		}else{
			console.log(docs);
		}
	})
	*/
	/*
	UserModel.findOne({age:{$gt:28}},(err,docs)=>{
		if(err){
			console.log('find user err::',err);
		}else{
			console.log(docs);
		}
	})
	*/
	

})