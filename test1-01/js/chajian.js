(function ($) {
	jQuery.fn.changecolor = function(data){
		$(this).click(function(){
			var arr=["black","orange","#ccc","#ddd"];
			var arr2=["15px","25px","35px","45px",];
			var newData=data.color.concat(arr);
			var newData2=data.size.concat(arr2);
			$.unique(newData); 
			$.unique(newData2);
			var num=Math.floor(Math.random()*newData.length);
			var num2=Math.floor(Math.random()*newData2.length);			
			var val=newData[num];
			var val2=newData2[num2];
			$(this).css("color",val);
			$(this).css("font-size",val2);
		})
	  //你自己的插件代码
	};
})(jQuery);