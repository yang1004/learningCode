/*
* @Author: mac
* @Date:   2019-07-31 09:50:27
* @Last Modified by:   mac
* @Last Modified time: 2019-07-31 15:34:55
*/
/*
* @Author: mac
* @Date:   2019-07-29 16:02:18
* @Last Modified by:   mac
* @Last Modified time: 2019-07-31 09:33:30
*/
const mongoose = require('mongoose');

const moment = require('moment');

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

	DataModel.findById('5d40f587e7de424525f0c862',(err,result)=>{
		if(err){
			console.log('findById err',err);
		}else{
			// console.log(result)
			const data = new Date(result.createdAt);
			// console.log(data.getHours()+":"+data.getMinutes()+":"+data.getSeconds());

			console.log(data.toLocaleString());
			const d = moment(result.createdAt,).format('YYYY-MM-DD HH:mm:ss');
			// const d = moment(result.createdAt,).format();
			console.log(d)
		}
	})
})