/*
* @Author: mac
* @Date:   2019-08-08 19:06:43
* @Last Modified by:   mac
* @Last Modified time: 2019-08-09 08:42:15
*/

const path = require('path');

module.exports = {
	//指定环境
	mode:'development',//开发环境
	//入口
	// entry: './src/index.js',
	// entry: {main:'./src/index.js'},
	entry:{
		index:"./src/index.js",
		about:"./src/about.js",
		contact:"./src/contact.js",
	},
	//出口
	output: {
		//「入口分块(entry chunk)」的文件名模板
		// filename: '[name]-bundle.js',
		// filename: '[name]-[hash]-bundle.js',//每一次打包的模块hash值都不同
		filename: '[name]-[chunkhash]-bundle.js',//每一个chunkhash值都不同
		//所有输出文件的目标路径
		path: path.resolve(__dirname, 'dist')
	},
	module: {
	    rules: [
	    //处理css
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

