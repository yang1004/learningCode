/*
* @Author: mac
* @Date:   2019-07-30 15:46:49
* @Last Modified by:   mac
* @Last Modified time: 2019-07-30 15:59:22
*/
const mongoose = require('mongoose');

class Mongoose{
	toData(){
		//连接数据库
		mongoose.connect('mongodb://localhost/MVC1',{useNewUrlParser:true});
		//创建db
		const db = mongoose.connection;
		db.on('error',()=>{
			console.log('connection db error');
			throw 'connection db error'
		})

		db.once('open',()=>{
			//创建Schema模型
			const TaskSchema = new mongoose.Schema({
				id:Number,
				task:String
			})

			const TaskModel = mongoose.model('task',TaskSchema);

			const user = new UserModel({name:"Tom",age:18,major:"Computer"});

			user.save((err,docs)=>{
				if(err){
					console.log('mongoose save error::',err);
				}else{
					console.log('docs::',docs)
				}
			})

			UserModel.find({name:"Tom"},(err,result)=>{
				if(err){
					console.log('mongoose find error::',err);
				}else{
					console.log('result::',result)
				}
			})
			
			UserModel.deleteOne({name:"Leo"},(err,result)=>{
				if(err){
					console.log('mongoose deleteOne error::',err);
				}else{
					console.log('result::',result)
				}
			})
		})
	}
}

module.exports = new Mongoose();