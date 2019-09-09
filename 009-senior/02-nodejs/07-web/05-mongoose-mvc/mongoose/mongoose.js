/*
* @Author: mac
* @Date:   2019-07-30 15:46:49
* @Last Modified by:   mac
* @Last Modified time: 2019-08-01 11:01:05
*/
const mongoose = require('mongoose');

const openP = new Promise((resolve,reject)=>{
	db.once('open',()=>{
		//创建Schema模型
		const TaskSchema = new mongoose.Schema({
			id:Number,
			task:String
		})

		const TaskModel = mongoose.model('task',TaskSchema);

		
	})
})
const indexP = new Promise((resolve,reject)=>{
	TaskModel.find(null,(err,result)=>{
		if(err){
			console.log('mongoose find error::',err);
		}else{
			console.log('result::',result)
			// data1 = result;
			return result;
		}
	})
})

class Mongoose{
	async toData(mode){
		var data;
		//连接数据库
		mongoose.connect('mongodb://localhost/MVC1',{useNewUrlParser:true});
		//创建db
		const db = mongoose.connection;
		db.on('error',()=>{
			console.log('connection db error');
			throw 'connection db error'
		})

		data = await openP;

		data = await indexP;
		// console.log("data::::",data)
	}
}

module.exports = new Mongoose();