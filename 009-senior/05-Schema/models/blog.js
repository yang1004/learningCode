/*
* @Author: mac
* @Date:   2019-07-31 09:25:53
* @Last Modified by:   mac
* @Last Modified time: 2019-07-31 15:38:19
*/
const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title:{
    type:String
  },
  content:{
    type:String
  },
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"data"
  }
});

BlogSchema.statics.findBlogs = function(query){
	return this.findOne(query)
	.populate('author',"name -_id")
}

//2.根据Schema定义数据模型
//2.1model方法第一个参数指定集合名称,mongoose会默认转换为复数
//2.2model方法第二个参数指定Schema
const BlogModel = mongoose.model('blog', BlogSchema);

module.exports = BlogModel;