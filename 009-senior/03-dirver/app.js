/*
* @Author: mac
* @Date:   2019-07-29 15:32:06
* @Last Modified by:   mac
* @Last Modified time: 2019-07-30 10:59:14
*/
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://127.0.0.1:27017/";

const client = new MongoClient(uri, { useNewUrlParser: true });

const dbName = 'qudong';

//连接数据库
client.connect(err => {

	if(err){
		console.log('connect db error:::',err);
		throw err
	}
	console.log('connect db success...');

	//生成db 如果数据库中有就切换，没有就新建
	const db = client.db(dbName);
	//生成集合 如果数据库中有就切换，没有就新建
	const collection = db.collection("user")
	/*
	//生成
	collection.insertMany([{name:"Tom",age:18},{name:"Leo",age:20}],(err,docs)=>{
		if(err){
			console.log('insertMany error:::',err);
		}else{
			console.log(docs)
		}

		client.close();
	})
	*/

	//查找
	/*
	collection.find({},(err,docs)=>{
		if(err){
			console.log('find error:::',err);
		}else{
			console.log(docs.toArray())
		}

		client.close();
	})
	*/
	/*
	collection.find({}).toArray((err,docs)=>{
		if(err){
			console.log('find error:::',err);
		}else{
			console.log(docs)
		}

		client.close();
	})
	*/

	/*
	//更新
	collection.updateOne({name:"Tom"},{$set:{age:39}},(err,result)=>{
		if(err){
			console.log('updateOne error:::',err);
		}else{
			console.log(result)
		}

		client.close();
	})
	*/

	//删除
	collection.remove({name:"Tom"},(err,result)=>{
		if(err){
			console.log('updateOne error:::',err);
		}else{
			console.log(result)
		}

		client.close();
	})

	
});