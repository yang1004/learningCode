/*
* @Author: mac
* @Date:   2019-07-25 15:18:08
* @Last Modified by:   mac
* @Last Modified time: 2019-07-25 17:15:24
*/
(function($){
	var $input = $('.todo-input');
	$input.on('keydown',function(ev){
		if(ev.keyCode == 13){
			//发送ajax请求
			$.ajax({
				url:"/add",
				type:"post",
				dataType:"json",
				data:{
					task:$input.val()
				},
				success:function(result){
					console.log(result);
				}
			})
		}
	})
})(jQuery);