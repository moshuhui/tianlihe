// JavaScript Document
$(function() {
	$.fn.extend({  
		manhuaCountDown : function(isDay) {  
			var $this = $(this);	
			var dstr = $this.attr("date");
			var end_time = new Date(dstr).getTime();//月份是实际月份-1
			var sys_second = (end_time-new Date().getTime())/1000;			
			var day,hour,minute,second;		
			var timer = setInterval(function(){
				sys_second -= 1;	
				if (sys_second >= 0) {	
					day = Math.floor((sys_second / 3600) / 24);	
					hour = Math.floor((sys_second / 3600) % 24);
					minute = Math.floor((sys_second / 60) % 60);
					second = Math.floor(sys_second % 60);
					if(isDay){
						day = day+"天 ";//计算天
					}else{
						day = "";
					}
					hour = (hour<10?"0"+hour:hour)+"时 ";//计算小时
					minute = (minute<10?"0"+minute:minute)+"分 ";//计算分
					second = (second<10?"0"+second:second)+"秒";// 计算秒
					$this.text(day+hour+minute+second);
				} else { 
				
					$this.text("时间已经结束");					
					clearInterval(timer);
				}
			}, 1000);
		}  
	})  
	$("#test1").manhuaCountDown(true);
	$("#test2").manhuaCountDown(true);
	$("#test3").manhuaCountDown(true);
});