//导入模块
//返回引入文件的module.exports对象

// const {str,fn,obj} = require('./m5.js')
// fn()

const m5 = require('./m5.js');
console.log(m5)
m5.fn()
console.log(m5.obj)