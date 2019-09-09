/*
* @Author: mac
* @Date:   2019-07-29 16:02:18
* @Last Modified by:   mac
* @Last Modified time: 2019-07-31 09:33:30
*/
const mongoose = require('mongoose');

const UserModel = require('./models/users.js');

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
	console.log('model open...')

	//3.使用模型(CRUD)

	UserModel.distinct("name",{age:{$gt:26}},(err,result)=>{
		if(err){
			console.log('distinct user err::',err);
		}else{
			console.log(result);
		}
	})
})