/*
* @Author: mac
* @Date:   2019-07-31 09:25:53
* @Last Modified by:   mac
* @Last Modified time: 2019-07-31 19:29:29
*/
const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  name:{
  	type:String,
  	required:[true,"姓名必须输入"],
  	minlength:[3,"用户名最小长度为3位"],
  	maxlength:[5,"用户名最大长度为5位"]
  },
  age:{
  	type:Number,
  	min:[10,"年龄最小值为10"],
  	max:[150,"年龄最大值为150"]
  },
  major:{
  	type:String,
  	enum:["Art","Computer","PlayBall"]
  },
  phone:{
  	type:String,
  	validate:{
  		validator:function(val){
  			return /1[358]\d{9}/.test(val)
  		},
  		message:"{VALUE}手机号不合法"
  	}
  },
  isLocked:{
  	type:Boolean,
  	validate:{
  		validator:function(val){
  			return /true/.test(val);
  		},
  		message:"输入的为false"
  	}
  },
  createdAt:{
  	type:Date,
  	default:Date.now
  },
  friends:{
  	type:Array
  }
});

//需要用到调用时到对象，所以不能使用箭头函数
DataSchema.methods.findBlogs = function(cb){
	// console.log(this)
	this.model('blog').find({author:this._id},cb)
}

DataSchema.statics.findByPhone = function(val,cb){
	// console.log(this) //DataModel
  // console.log(this.model('data') == this) //true
	this.findOne({phone:val},cb)
}

DataSchema.statics.findByName = function(val,cb){
	this.findOne({name:val},cb)
}

//2.根据Schema定义数据模型
//2.1model方法第一个参数指定集合名称,mongoose会默认转换为复数
//2.2model方法第二个参数指定Schema
const DataModel = mongoose.model('data', DataSchema);



module.exports = DataModel;