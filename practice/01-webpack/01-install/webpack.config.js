/*
* @Author: wenzeyang
* @Date:   2019-09-28 21:57:38
* @Last Modified by:   wenzeyang
* @Last Modified time: 2019-09-28 22:03:00
*/
const path = require('path')

module.exports = {
	//配置环境
	mode: "production",//生产环境
	// mode: "development",//开发环境
	//入口文件
	entry:'./src/index.js',
	//出口文件
	output:{
		//入口分块(entry chunk)」的文件名模板
		filename: "bundle.js",
		//所有输出文件的目标路径
		path: path.resolve(__dirname, "dist"),
	}
}