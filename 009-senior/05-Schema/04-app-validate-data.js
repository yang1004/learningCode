/*
* @Author: mac
* @Date:   2019-07-31 09:50:27
* @Last Modified by:   mac
* @Last Modified time: 2019-07-31 15:34:47
*/
/*
* @Author: mac
* @Date:   2019-07-29 16:02:18
* @Last Modified by:   mac
* @Last Modified time: 2019-07-31 09:33:30
*/
const mongoose = require('mongoose');

const DataModel = require('./models/data.js');

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
	DataModel.insertMany({
		name:"Amy",
		age:18,
		major:"Computer",
		phone:"13923048576",
		isLocked:true
	})
	.then(data=>{
		console.log(data)
	})
	.catch(err=>{
		console.log("insertMany error",err.message);
	})
})