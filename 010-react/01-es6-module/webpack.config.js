/*
* @Author: mac
* @Date:   2019-08-08 19:06:43
* @Last Modified by:   mac
* @Last Modified time: 2019-08-09 10:57:22
*/

const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
	//指定环境
	mode:'development',//开发环境
	//入口
	// entry: './src/index.js',
	// entry: {main:'./src/index.js'},
	entry:{
		index:"./src/index.js",
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
  	},
  	plugins:[
	    new htmlWebpackPlugin({
	        template:'./src/index.html',//模板文件
	        filename:'index.html',//输出的文件名
	        inject:'head',//脚本写在那个标签里,默认是true(在body结束后)
	        hash:true,//给生成的js/css文件添加一个唯一的hash
	        // chunks:["common","index"]
	    }),
	    new CleanWebpackPlugin()
	],
	devServer:{
		contentBase: './dist',//内容的目录
		port:8080//服务运行的端口
	}
}

