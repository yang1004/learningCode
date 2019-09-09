/*
* @Author: mac
* @Date:   2019-07-27 10:24:09
* @Last Modified by:   mac
* @Last Modified time: 2019-07-27 10:29:14
*/
class Controller{
	index(req,res,...args){
		res.setHeader('Content-Type','text/html;charset=UTF-8');
		res.end('<a href="/item/index">go ToDoList</a>')
	}
}

module.exports = new Controller();