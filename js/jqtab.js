// JavaScript Document
$(document).ready(function() {		
	
	$(function(){
		$(".nav li").hover(function(){
			$(this).find("div").slideToggle("slow");
		},function(){
			$(this).find("div").slideToggle("slow");
		});
	});
	
	$(".index_1_1 span").hover(function() {
		$(this).addClass("iconavbg01"); //为被点击的选项卡添加"now_focus"类
		$(this).siblings().removeClass("iconavbg01"); //去掉其它选项卡的"now_focus"类
		var $dangqian = $(".index_1_2 > dd").eq($(".index_1_1 span").index(this)); //获取到和被点击选项卡顺序相同的内容容器
		$dangqian.addClass("showdiv01"); //为这个内容容器添加"now_focus"类
		$dangqian.siblings().removeClass("showdiv01"); //去掉其它内容容器的"now_focus"类
	});
	
	
	$(function(){
		$(".index_1_2_2 li").hover(function(){
			$(this).find("em").css("color","#2e8908");
		},function(){
			$(this).find("em").css("color","#DDDDDD");
		});
	});
	
	
	$(function(){
		$(".index_2_1 li").hover(function(){
			$(this).find("span").css("color","#dd7206");
			$(this).find("em").css("color","#dd7206");
		},function(){
			$(this).find("span").css("color","#bfbfbf");
			$(this).find("em").css("color","#bfbfbf");
		});
	});
			
	
});


