		/* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
		var IE = (function() {
			if (document.documentMode) {
				return document.documentMode;
			} else {
				for (var i = 7; i > 4; i--) {
					var div = document.createElement("div");

					div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";

					if (div.getElementsByTagName("span").length) {
						div = null;

						return i;
					}
				}
			}

			return undefined;
		})();
    
		// js类型检查
		var Type = (function(){
			var Type = {}
      for(var i = 0, type; type =['String', 'Array', 'Number', 'Object', 'Array', 'Function', 'Date', 'RegExp'][i++];) {
				(function(type){
					Type['is' + type] = function(obj) {
						return Object.prototype.toString.call(obj) === '[object '+ type +']'
					}
				})(type)
			}
			return Type
		})()