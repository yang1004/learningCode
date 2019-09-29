/*
* @Author: wenzeyang
* @Date:   2019-09-28 21:57:38
* @Last Modified by:   wenzeyang
* @Last Modified time: 2019-09-29 10:12:00
*/
const path = require('path')

module.exports = {
	//配置环境
	mode: "production",//生产环境
	// mode: "development",//开发环境
	//入口文件
	// entry:'./src/index.js',
	// entry:{main:'./src/index.js'},
	entry:{
		index:'./src/index.js',
		about:'./src/about.js',
		contact:'./src/contact.js',
	},
	//出口文件
	output:{
		//入口分块(entry chunk)」的文件名模板
		// filename: "[name]-[chunkhash]-bundle.js",
		filename: "[name]-[hash]-bundle.js",
		//所有输出文件的目标路径
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			//处理css文件
			{
				test: /\.css$/,
				use: [
				  'style-loader',
				  'css-loader'
				]
			},
			//处理图片
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
			  		{
			    		loader: 'url-loader',
			    		options: {
			      			limit: 10
			    		}
			  		}
				]
			}
		]
	}
}