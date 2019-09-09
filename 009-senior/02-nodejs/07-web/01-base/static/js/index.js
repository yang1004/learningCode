/*
* @Author: mac
* @Date:   2019-07-26 10:52:00
* @Last Modified by:   mac
* @Last Modified time: 2019-07-29 09:51:21
*/
(function($){
	var $input = $('.todo-input');
	var $wrap = $('.todo-wrap');


	$input.on('keydown',function(ev){
		if(ev.keyCode == 13){
			$.ajax({
				url:"/Item/add/"+$input.val(),
				type:"post",
				dataType:"json",
				success:function(result){
					if(result.code == 0){
						let $dom = $('<li class="todo-item" data-id="'+ result.data.id +'">'+ result.data.task +'</li>');
						$wrap.append($dom);
						$input.val('')
					}
				}
			})
		}
	})

	$wrap.on('click','.todo-item',function(){
		var $this = $(this);
		$.ajax({
			url:"/Item/remove/"+$this.data('id'),
			dataType:"json",
			success:function(result){
				console.log(result)
				if(result.code == 0){
					$this.remove();
				}
			}
		})
	})
})(jQuery);
