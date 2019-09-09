/*
* @Author: mac
* @Date:   2019-07-30 15:22:55
* @Last Modified by:   mac
* @Last Modified time: 2019-07-30 15:43:32
*/
const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost/mongooseP',{useNewUrlParser:true});

//创建db对象
const db = mongoose.connection;

//连接数据库失败
db.on('error',()=>{
	console.log('connection db error');
	throw 'connection db error'
})

db.once('open',()=>{
	//定义Schema模块
	const UserSchema = new mongoose.Schema({
		name:String,
		age:Number,
		major:String
	})

	//根据Schema定义数据模型
	const UserModel = mongoose.model('user',UserSchema)

	/*
	const user = new UserModel({name:"Tom",age:18,major:"Computer"});
	user.save((err,docs)=>{
		if(err){
			console.log('mongoose save error::',err);
		}else{
			console.log('docs::',docs)
		}
	})
	*/

	/*
	UserModel.find({name:"Tom"},(err,result)=>{
		if(err){
			console.log('mongoose find error::',err);
		}else{
			console.log('result::',result)
		}
	})
	*/

	/*
	UserModel.updateOne({name:"Tom"},{$set:{age:30}},(err,result)=>{
		if(err){
			console.log('mongoose updateOne error::',err);
		}else{
			console.log('result::',result)
		}
	})
	*/

	UserModel.deleteOne({name:"Leo"},(err,result)=>{
		if(err){
			console.log('mongoose deleteOne error::',err);
		}else{
			console.log('result::',result)
		}
	})
})