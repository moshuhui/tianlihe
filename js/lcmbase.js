function setcurheight(){
	var boxheight=$("#curleft").parent().height();
	if(boxheight<40){
		window.setTimeout('setcurheight();',500);
		return;
	}
	$("#curleft").height(boxheight);
	$("#curright").height(boxheight);
	$("div.curtxt").height(boxheight);
}
function gonext(){
	if(currPage==totalPage){
		if(wrfPreGo=='') return;
		window.location.href=wrfPreGo;
		return;
	}	
	var p=parseInt(currPage)+1;
	window.location.href='detail-'+id+'-'+String(p)+'.html';
}
function gopre(){
	if(currPage=='1'){
		return;
		if(wrfPreGo=='') return;
		window.location.href=wrfPreGo;
		return;
	}
	var p=parseInt(currPage)-1;
	window.location.href='detail-'+id+'-'+String(p)+'.html';
}

	
	$(".content").prepend('<div id="curleft"><div class="curtxt"></div></div><div id="curright"><div class="curtxt"></div></div>');
	window.setTimeout('setcurheight();',500);

	$("#curleft").click(function(){gopre(id)});
	$("#curright").click(function(){gonext(id)});






$(document).ready(function() {
	
	//排行
    $(".right .hot .hot_title span").hover(function() {
		$(this).addClass("current"); 
		$(this).siblings().removeClass("current"); 
		var $dangqian = $(".right .hot ul").eq($(".right .hot .hot_title span").index(this));
		$dangqian.addClass("show_box"); 
		$dangqian.siblings().removeClass("show_box"); 
	});						   
	
	//图说国际旅游岛
	$(".cm_block03 .box01").hover(
			  function(){
				  $(this).find("em").show();
				  $(this).find("p").show();
				  },
			  function(){
				  $(this).find("em").hide();
				  $(this).find("p").hide();
				  }
			 );	
	$(".cm_block03 .box02").hover(
			  function(){
				  $(this).find("em").show();
				  $(this).find("p").show();
				  },
			  function(){
				  $(this).find("em").hide();
				  $(this).find("p").hide();
				  }
			 );	
	$(".cm_block03 .box03").hover(
			  function(){
				  $(this).find("em").show();
				  $(this).find("p").show();
				  },
			  function(){
				  $(this).find("em").hide();
				  $(this).find("p").hide();
				  }
			 );	
		
	//事件发展按钮
	$("#srcoll .left_btn").hover(
			  function(){
				  $(this).css({"background-position-x":-20});
				  },
			  function(){
				  $(this).css({"background-position-x":0});
				  }
			 );	
	$("#srcoll .right_btn").hover(
			  function(){
				  $(this).css({"background-position-x":-20});
				  },
			  function(){
				  $(this).css({"background-position-x":0});
				  }
			 );	
	
	//搜索
		$("#w").focus(function(){
		var $txt_name=$("#w").val();
		if($txt_name=="请输入您要搜索的关键词"){
			$("#w").val("").css("color","#333");
			}
		});
	$("#w").blur(function(){
		var $txt_name=$("#w").val();
		if($txt_name==""){
			$("#w").val("请输入您要搜索的关键词").css("color","#999");
			}
		});	
	

//文字向左滚动 调用方法 imgscroll({speed: 30,amount: 1,dir: "up"});
$.fn.imgscroll = function(o){
	var defaults = {
		speed: 40,
		amount: 0,
		width: 1,
		dir: "left"
	};
	o = $.extend(defaults, o);
	
	return this.each(function(){
		var _li = $("li", this);
		_li.parent().parent().css({overflow: "hidden", position: "relative"}); //div
		_li.parent().css({margin: "0", padding: "0", overflow: "hidden", position: "relative", "list-style": "none"}); //ul
		_li.css({position: "relative", overflow: "hidden"}); //li
		if(o.dir == "left") _li.css({float: "left"});
		
		//初始大小
		var _li_size = 0;
		for(var i=0; i<_li.size(); i++)
			_li_size += o.dir == "left" ? _li.eq(i).outerWidth(true) : _li.eq(i).outerHeight(true);
		
		//循环所需要的元素
		if(o.dir == "left") _li.parent().css({width: (_li_size*3)+"px"});
		_li.parent().empty().append(_li.clone()).append(_li.clone()).append(_li.clone());
		_li = $("li", this);

		//滚动
		var _li_scroll = 0;
		function goto(){
			_li_scroll += o.width;
			if(_li_scroll > _li_size)
			{
				_li_scroll = 0;
				_li.parent().css(o.dir == "left" ? { left : -_li_scroll } : { top : -_li_scroll });
				_li_scroll += o.width;
			}
				_li.parent().animate(o.dir == "left" ? { left : -_li_scroll } : { top : -_li_scroll }, o.amount);
		}
		
		//开始
		var move = setInterval(function(){ goto(); }, o.speed);
		_li.parent().hover(function(){
			clearInterval(move);
		},function(){
			clearInterval(move);
			move = setInterval(function(){ goto(); }, o.speed);
		});
	});
};


});