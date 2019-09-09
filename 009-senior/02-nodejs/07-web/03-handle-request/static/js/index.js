/*
* @Author: mac
* @Date:   2019-07-25 15:18:08
* @Last Modified by:   mac
* @Last Modified time: 2019-07-26 15:13:01
*/
(function($){
	var $input = $('.todo-input');
	var $wrap = $('.todo-wrap');
	$input.on('keydown',function(ev){
		if(ev.keyCode == 13){
			//1.发送ajax请求
			$.ajax({
				url:"/add",
				type:"post",
				dataType:"json",
				data:{
					task:$input.val()
				},
				success:function(result){
					//2.根据后台的返回结果做相应的处理
					//2.1成功情况下后台返回任务对象，根据任务对象生存DOM节点并插入
					if(result.code == 0){
						//成功
						var data = result.data;
						var $dom = $(`<li class="todo-item" data-id="${data.id}">${data.task}</li>`);
						$wrap.append($dom);
						$input.val('');
					}else{
						//失败
						//2.2失败的情况下弹出失败信息
						console.log(result.message);
					}
					
				}
			})
		}
	})

	$wrap.on('click','.todo-item',function(){
			var $this = $(this);
			$.ajax({
				url:"/remove",
				dataType:"json",
				data:{
					id:$this.data('id')
				},
				success:function(result){
					//2.根据后台的返回结果做相应的处理
					//2.1成功情况下后台返回任务对象，根据任务对象生存DOM节点并插入
					if(result.code == 0){
						//成功
						$this.remove()
					}else{
						//失败
						//2.2失败的情况下弹出失败信息
						console.log(result.message);
					}
				}
			})
	})
})(jQuery);