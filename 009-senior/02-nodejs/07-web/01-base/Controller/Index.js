/*
* @Author: mac
* @Date:   2019-07-29 10:39:12
* @Last Modified by:   mac
* @Last Modified time: 2019-07-29 10:43:10
*/
class Controller{
	index(req,res,...args){
		res.setHeader("Content-Type","text/html;charset=UTF-8");
		res.end('<a href="/Item/index">go ToDoList</a>')
	}
}

module.exports = new Controller();