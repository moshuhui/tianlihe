/**
 * 名称：基于jQuery的焦点幻灯图文滚动效果
 * 作者：狂小子（QQ:1833596）
 * 说明：保留本文件头部注释信息自由传播及使用
 * 最新更新：2012.12.20
*/
;(function(a){a.fn.extend({wrf_Marquee:function(b){var c={moveing:0,handle:1,setting:{auto:1,img:"#slides li",title:"",btn:"",ltbtn:"",rbbtn:"",to:"left",step:1,mstep:1,speed:500,time:3000,op:"click",curclass:"cur",curidx:0,max:0,w:0,h:0,left:0,debug:0},op:{fx:"left",v:0,wh:0,l:0,step:0},init:function(g){var h=this,e="";
if(g){a.extend(h.setting,g);}h.setting.time+=h.setting.speed;if(a(h.setting.img).length==0){return;}a(h.setting.img).parent().parent().css({position:"relative",overflow:"hidden"}).show();
a(h.setting.img).parent().css({position:"absolute",top:"0px",left:h.setting.left+"px"});h.setting.max=a(h.setting.img).length;h.setting.w=a(h.setting.img).outerWidth(true);
h.setting.h=a(h.setting.img).outerHeight(true);if(h.setting.btn==""){h.op.step=h.setting.step;}else{h.op.step=h.setting.step*h.setting.mstep;}var f=h.setting.max%(h.op.step);
if(f>0){var d=a(h.setting.img+":first").clone();d.css({width:h.setting.w+"px",height:h.setting.h+"px"}).html("");for(i=f;i<h.op.step;i++){d.appendTo(a(h.setting.img).parent());
}}if(h.setting.debug==1){a("body").append('<div id="wrfMarqueeDebug"></div>');}h.op.l=a(h.setting.img).length;h.op.l=Math.ceil(h.op.l/h.setting.step);e=a(h.setting.img).parent().html();
a(h.setting.img).parent().append(e);h.setting.max=Math.ceil(h.setting.max/h.setting.step/h.setting.mstep);h.showinfo();h.bind();if(h.setting.to=="up"){h.op.fx="top";
h.op.v=h.setting.h;}else{h.op.fx="left";h.op.v=h.setting.w;}h.op.wh=h.op.v;h.begin();},begin:function(){var d=this;d.op.v*=d.setting.mstep;if(d.op.fx=="top"){a(d.setting.img).parent().height(2*d.op.v*(d.setting.max));
}else{a(d.setting.img).parent().width(2*d.op.v*(d.setting.max));}d.willPlay();},doMarquee:function(f){var h=this;var g=0;var d="";h.moveing=1;h.setting.curidx++;
d+="moveing:"+h.moveing+"<br/>";d+="curidx:"+h.setting.curidx+"<br/>";if(h.setting.curidx<0){h.setting.curidx+=h.setting.max;d+="--curidx:"+h.setting.curidx+"<br/>";
if(f==""){g=-(h.setting.curidx+1)*h.op.v;d+="----location:"+g+"<br/>";a(h.setting.img).parent().css(h.op.fx,g+"px");}}g=parseFloat(a(h.setting.img).parent().css(h.op.fx));
d+="location:"+g+"<br/>";if(f=="l"){if(g>-h.op.v){g-=h.op.v*h.setting.max;a(h.setting.img).parent().css(h.op.fx,g+"px");}g+=h.op.v;}else{if(f=="r"){g-=h.op.v;
}else{g=-h.setting.curidx*h.op.v+h.setting.left;}}d+="location:"+g+"<br/>";if(h.setting.curidx==h.setting.max){h.setting.curidx=0;}h.showinfo();if(h.op.fx=="left"){var e={left:g+"px"};
}else{var e={top:g+"px"};}a(h.setting.img).parent().animate(e,h.setting.speed,"swing",function(){d+="location:"+g+"<br/>";if(g<=(-h.op.wh*h.op.l)){g+=h.op.wh*h.op.l;
d+="==location:"+g+"<br/>";}a(h.setting.img).parent().css(h.op.fx,g+"px");h.willPlay();h.moveing=0;d+="moveing:"+h.moveing+"<br/>";if(h.setting.debug==1){a("#wrfMarqueeDebug").html(d);
}});},pause:function(){var d=this;if(d.setting.auto==1){clearTimeout(d.handle);}d.handle=0;},play:function(){var d=this;d.doMarquee("r");},willPlay:function(){var d=this;
d.pause();if(d.setting.auto==1){d.handle=setTimeout(function(){d.play();},d.setting.time);}},showinfo:function(){var e=this;if(e.setting.title!=""){a(e.setting.title).hide();
a(e.setting.title+":eq("+e.setting.curidx+")").show();}if(e.setting.btn!=""){a(e.setting.btn).removeClass(e.setting.curclass);a(e.setting.btn+":eq("+e.setting.curidx+")").addClass(e.setting.curclass);
}var d=e.setting.curidx;a(e.setting.img).removeClass(e.setting.curclass);if(e.setting.left!=0){++d;}a(e.setting.img+":eq("+d+")").addClass(e.setting.curclass);
},bind:function(){var e=this;a(e.setting.img).parent().hover(function(){e.pause();},function(){e.willPlay();});if(e.setting.title!=""){a(e.setting.title).hover(function(){e.pause();
},function(){e.willPlay();});}if(e.setting.btn!=""){for(var d=e.setting.btn.length-1;d>=e.setting.max;d--){a(e.setting.btn+":eq("+d+")").remove();}if(e.setting.op=="hover"){a(e.setting.btn).each(function(f){a(this).mouseover(function(){e.toOne(f);
});});}else{a(e.setting.btn).each(function(f){a(this).click(function(){e.toOne(f);});});}}if(e.setting.ltbtn!=""){if(e.setting.op=="hover"){a(e.setting.ltbtn).mouseover(function(){e.toLR(e.setting.curidx-1,"l");
});}else{a(e.setting.ltbtn).click(function(){e.toLR(e.setting.curidx-1,"l");});}}if(e.setting.rbbtn!=""){if(e.setting.op=="hover"){a(e.setting.rbbtn).mouseover(function(){e.toLR(e.setting.curidx+1,"r");
});}else{a(e.setting.rbbtn).click(function(){e.toLR(e.setting.curidx+1,"r");});}}},toOne:function(d){var e=this;if(e.moveing==1){return;}e.pause();e.setting.curidx=d-1;
e.doMarquee("");},toLR:function(d,e){var f=this;if(f.moveing==1){return;}f.pause();f.setting.curidx=d-1;f.doMarquee(e);}};c.init(b);}});})(jQuery);