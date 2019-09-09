/*
* @Author: mac
* @Date:   2019-07-29 16:02:18
* @Last Modified by:   mac
* @Last Modified time: 2019-07-29 17:22:37
*/
const mongoose = require('mongoose');

const getRadom = (min,max)=>{
	return Math.round(min+(max-min)*Math.random())
}

const names = ["Amy","Tom","Leo","Peter","Jack","Jane","Rick","Edmun","King","Lucy"];
const majors = ["Art","Computer","English","Music","Sports"];

const getName = ()=>names[getRadom(0,names.length-1)];
const getMajor = ()=>majors[getRadom(0,majors.length-1)];

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
	//3.1新增
	/*
	const user = new UserModel({name:"Tom",age:18,major:"Computer"});
	user.save((err,doc)=>{
		if(err){
			console.log("err:::",err);
		}else{
			console.log(doc)
		}
	})
	
	user.save()
	.then(doc=>{
		console.log(doc)
	})
	.catch(err=>{
		console.log("err:::",err);
	})
	
	UserModel.insertMany([{name:"Peter",age:19,major:"Art"},{name:"Amy",age:30,major:"Sport"}],(err,docs)=>{
		if(err){
			console.log('insertMany err::',err);
		}else{
			console.log(docs)
		}
	})//一次性生成全部
	

	UserModel.insertMany([{name:"Peter",age:19,major:"Art"},{name:"Amy",age:30,major:"Sport"}])
	.then(docs=>{
		console.log(docs)
	})
	.catch(err=>{
		console.log('insertMany err::',err);
	})
	

	UserModel.create([{name:"Tony",age:19,major:"Art"},{name:"Lumi",age:30,major:"Sport"}],(err,docs)=>{
		if(err){
			console.log('insertMany err::',err);
		}else{
			console.log(docs)
		}
	})
	*/

	let arr = [];
	for(let i=0;i<100;i++){
		arr[i] = {
			name:getName(),
			age:getRadom(10,30),
			major:getMajor()
		}
	}
	// console.log(arr)

	UserModel.insertMany(arr)
	.then(docs=>{
		console.log(docs)
	})
	.catch(err=>{
		console.log('insertMany err::',err);
	})
})