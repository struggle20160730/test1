$(function(){
	//默认进入页面加载中间内容
	var url="one.html";
	$.ajax({
		type:"get",
		url:url,
		async:true,
		success:function(data){
			$("#Centent").html(data);
		}
	});
//	底部菜单
	$("footer>div").click(function(){
		var className=$(this).attr("class");
		if(className.indexOf("one")>-1){
			$(this).siblings().removeClass("fotterBackColor");	
			var url="one.html";
			$.ajax({
				type:"get",
				url:url,
				async:true,
				success:function(data){
					$("#Centent").html(data);
				}
			});
		}else{
			$(this).addClass("fotterBackColor").siblings().removeClass("fotterBackColor");	
			if(className.indexOf("weitao")>-1){
				var url="weitao.html";
			}
			if(className.indexOf("Information")>-1){
				var url="Information.html";
			}
			if(className.indexOf("shopppingCat")>-1){
				var url="shopppingCat.html";
			}
			if(className.indexOf("Mybaby")>-1){
				var url="Mybaby.html";
			}
			$.ajax({
				type:"get",
				url:url,
				async:true,
				success:function(data){
					$("#Centent").html(data);
				}
			});
		}
	});
});