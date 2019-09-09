/*
* @Author: mac
* @Date:   2019-07-15 16:16:37
* @Last Modified by:   mac
* @Last Modified time: 2019-07-15 16:26:39
*/
(function(win,doc){
	var html = document.getElementsByTagName('html')[0];
	function refres(){
		//获取视口宽度
		var width = doc.body.clientWidth || doc.documentElement.clientWidth;
		//设置根元素fantasize为宽度/10
		var fontSize = width/10 + 'px';
		// 设置html根元素fantasize
		html.style.fontSize = fontSize;
	}
	win.addEventListener('DOMContentLoaded',refres,false);
	win.addEventListener('resize',refres,false);
})(window,document);