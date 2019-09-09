(function(w){
	function kQuery(selector){
		// console.log(111);
		return new kQuery.prototype.init(selector);
	}
	kQuery.fn = kQuery.prototype = {
		constructor:kQuery,
		init:function(selector){
			//布尔值为false
			if(!selector){
				return this;
			}
			//参数为函数时
			else if(kQuery.isFunction(selector)){
				this[0] = document;
				this.context = document;
				this.length = 1;
				document.addEventListener("DOMContentLoaded",selector)
				return this;
			}
			//字符串
			else if(kQuery.isString(selector)){
				if(kQuery.isHTML(selector)){
					//字符串为代码片段
					var tempDiv = document.createElement('div');
					tempDiv.innerHTML = selector;
					// console.log(tempDiv.children)
					for(var i=0;i<tempDiv.children.length;i++){
						this[i] = tempDiv.children[i];
					}
					this.length = tempDiv.children.length;

					return this;
				}else{//选择器
					var doms = document.querySelectorAll(selector);
					// console.log(doms)
					for(var i=0;i<doms.length;i++){
						this[i] = doms[i];
					}
					this.length = doms.length;

					return this;
				}
			}
			//数组
			else if(kQuery.isArray(selector)){
				for(var i=0;i<selector.length;i++){
					this[i] = selector[i];
				}
				this.length = selector.length;
				return this;
			}
			//对象(其他)
			else{
				this[0] = selector;
				this.context = document;
				this.length = 1;
				return this;
			}
		},
		get:function(index){
			//判断是否有参数
			if(index || index == 0){
				//判断参数是否为数字
				if(kQuery.isNumber(index)){
					if(index >= 0){
						return this[index];
					}else{
						return this[this.length + index];
					}
				}else{

				}
			}else{
				var arr = [];
				// console.log(this);
				for(var i=0;i<this.length;i++){
					arr[i] = this[i];
				}
				return arr;
			}
		}
	}

	kQuery.extend = kQuery.prototype.extend = function(options){
		// console.log(this);
		for(var key in options){
			this[key] = options[key];
		}
	}

	//kQuery的静态方法
	/*
	kQuery.isFunction = function(str){
		return typeof str == 'function';
	};
	kQuery.isString = function(str){
		return typeof str == 'string';
	};
	kQuery.isHTML = function(str){
		return /<[^<>]+>/.test(str);
	};
	kQuery.isArray = function(str){
		return typeof str == 'object' && (length in str);
	};
	kQuery.isNumber = function(str){
		return typeof str == 'number';
	};
	*/

	kQuery.extend({
		isFunction : function(str){
			return typeof str == 'function';
		},
		isString : function(str){
			return typeof str == 'string';
		},
		isHTML : function(str){
			return /<[^<>]+>/.test(str);
		},
		isArray : function(str){
			return typeof str == 'object' && (length in str);
		},
		isNumber : function(str){
			return typeof str == 'number';
		}
	})


	kQuery.fn.init.prototype = kQuery.fn;
	w.kQuery = w.$ = kQuery;
})(window)