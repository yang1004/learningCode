/*
* @Author: mac
* @Date:   2019-07-31 09:25:53
* @Last Modified by:   mac
* @Last Modified time: 2019-07-31 09:29:22
*/
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  age:Number,
  major:String
});

//2.根据Schema定义数据模型
//2.1model方法第一个参数指定集合名称,mongoose会默认转换为复数
//2.2model方法第二个参数指定Schema
const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;