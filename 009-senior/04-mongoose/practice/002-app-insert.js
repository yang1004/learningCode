/*
* @Author: mac
* @Date:   2019-08-03 15:14:07
* @Last Modified by:   mac
* @Last Modified time: 2019-08-03 15:38:13
*/
const mongoose = require('mongoose');

//1.连接数据库
mongoose.connect('mongodb://localhost/mongooseP',{useNewUrlParser:true});

//生成db对象
const db = mongoose.connection;

//数据库连接失败
db.on('error',()=>{
	console.log('connect db error');
	throw 'connect db error';
})

//打开数据库
db.on('open',()=>{
	const userSchema = new mongoose.Schema({
		name:String,
		age:Number,
		major:String
	})

	const userModel = mongoose.model('user',userSchema);
	/*
	const user = new userModel({name:"Leo",age:22,major:"Computer"})
	user.save((err,user)=>{
		if(err){
			console.log('save err',err);
		}else{
			console.log(user)
		}
	})
	*/
	/*
	userModel.insertMany({name:"Peter",age:21,major:"Sports"},(err,user)=>{
		if(err){
			console.log('insertMany err',err);
		}else{
			console.log(user)
		}
	})
	*/
	
	/*
	userModel.create({name:"King",age:31,major:"Music"},(err,user)=>{
		if(err){
			console.log('create err',err);
		}else{
			console.log(user)
		}
	})
	*/

	/*
	userModel.find({name:"Amy"},(err,doc)=>{
		if(err){
			console.log('find err',err);
		}else{
			console.log(doc)
		}
	})
	*/
	/*
	userModel.findById("5d45376c41708461c2e7725f",(err,doc)=>{
		if(err){
			console.log('find err',err);
		}else{
			console.log(doc)
		}
	})
	*/
	/*
	userModel.findOne({name:"Amy"},(err,doc)=>{
		if(err){
			console.log('findOne err',err);
		}else{
			console.log(doc)
		}
	})
	*/

	
})