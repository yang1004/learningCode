/*
* @Author: mac
* @Date:   2019-07-29 16:02:18
* @Last Modified by:   mac
* @Last Modified time: 2019-07-31 09:12:18
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
	//3.4删除
	/*
	UserModel.deleteOne({age:{$gt:28}},(err,result)=>{
		if(err){
			console.log('deleteOne user err::',err);
		}else{
			console.log(result);
		}
	})
	*/
	UserModel.deleteMany({age:{$gt:28}},(err,result)=>{
		if(err){
			console.log('deleteOne user err::',err);
		}else{
			console.log(result);
		}
	})
	

})