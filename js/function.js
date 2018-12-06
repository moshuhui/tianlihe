// flashShow
function flashShow(url,w,h,id,bg,win){
	var flashStr=
	"<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0' width='"+w+"' height='"+h+"' id='"+id+"' align='middle'>"+
	"<param name='movie' value='"+url+"' />"+
	"<param name='wmode' value='"+win+"' />"+
	"<param name='menu' value='false' />"+
	"<param name='quality' value='high' />"+
	"<param name='bgcolor' value='"+bg+"' />"+
	"<embed src='"+url+"' wmode='"+win+"' menu='false' quality='high' bgcolor='"+bg+"' width='"+w+"' height='"+h+"' name='"+id+"' align='middle' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' />"+
	"</object>";
	document.write(flashStr);
}

/**
 * 全选checkbox,注意：标识checkbox id固定为为check_box
 * @param string name 列表check名称,如 uid[]
 */
function selectall(name,check_box) {
	if ($("#"+check_box).attr("checked")==false) {
		$("input[name='"+name+"']").each(function() {
			this.checked=false;
		});
	} else {
		$("input[name='"+name+"']").each(function() {
			this.checked=true;
		});
	}
}

//判断是否选择
function getCheckboxItem(id)
{
	var allSel="";
	var items= document.getElementsByName(id);
	if(items.value) return items.value;
	for(i=0;i<items.length;i++)
	{
		if(items[i].checked)
		{
			if(allSel=="")
				allSel=items[i].value;
			else
				allSel=allSel+","+items[i].value;
		}
	}
	return allSel;	
}

//全选
function GetAllCheckBox(CheckAll,id)
{
	var items= document.getElementsByName(id);
	 for(i=0;i<items.length;i++)
	{
	  items[i].checked=CheckAll.checked;
	}
}


//div的隐藏与显示
function divFunSH(divid,type)
{
	if(type){
		document.getElementById(divid).style.display = "block";
	}else{
		document.getElementById(divid).style.display = "none";	
	}
}


//判断字数，还剩几个可以输入,一个中文等两个英文
//区分中英文的正则检测
String.prototype.len=function(){ 
	return this.replace(/[^\x00-\xff]/g,"**").length; 
} 
//截止字符串方法
function CutStr(Str,Len) 
{ 
	var CurStr = ""; 
	for(var i = 0;i<Str.length;i++) 
	{ 
		CurStr += Str.charAt(i); 
		if(CurStr.len()>Len) 
		{ 
			return Str.substring(0,i); 
		} 
	} 
	return CurStr ; 
}

//type为true的时候，开启中英文区分判断，否则不区分中英文,还可以输入几个
function strlen_input(obj,id,num,type){
	if(type){
		document.getElementById(id).innerHTML = parseInt(obj.value.len());
		if(obj.value.len()>num){
			obj.value = CutStr(obj.value,num);
		}
	}else{
		document.getElementById(id).innerHTML = parseInt(obj.value.length);
		if(obj.value.length>num){
			obj.value = obj.value.substring(0,num);
		}	
	}
}

//已经输入了几位字符，多的自动截断
function strlen_verify(obj,id,num,type){
	if(type){
		document.getElementById(id).innerHTML = parseInt(num) - parseInt(obj.value.len());
		if(obj.value.len()>num){
			document.getElementById(id).innerHTML = 0;
			obj.value = CutStr(obj.value,num);
		}
	}else{
		document.getElementById(id).innerHTML = parseInt(num) - parseInt(obj.value.length);
		if(obj.value.length>num){
			document.getElementById(id).innerHTML = 0;
			obj.value = obj.value.substring(0,num);
		}	
	}
}

//只能输入数字
function isNum(obj){
	obj.value = obj.value.replace(/\D/g,'');
}

//可以输入数字与小数点，并只能有一个小数点，可定义小数点后有多少位数
function isNumDecimal(obj,num,tip){
	var re = /^\d+(?=\.{0,1}\d+$|$)/;
	if(re.test(obj.value)){
		document.getElementById(tip).className = "input-price1";
		document.getElementById(tip).innerHTML = "输入正确";
	}else{
		document.getElementById(tip).className = "input-price0";
		document.getElementById(tip).innerHTML = "输入错误，只能是数字，并且只能有一个小数点！";
	}
	if(obj.value==""){
		document.getElementById(tip).innerHTML = "";
	}
}