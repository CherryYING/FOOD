<!--



         //正则表达式，定义用户名规则：中文|数字+字母
         var yz=/^[\u4e00-\u9fa5]+$/;//定义规则
            
        //正则表达式，定义邮箱规则，第一位必须有字母|数字
         var yze=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;//定义规则

         //正则表达式，定义密码规则。数字+字母+字符
          var yzp=/^[(A-Z)(a-z0-9)+!*|@*|#*|$*|%*|&*|_*|.*]+$/; 
          
 

//功能：随机产生4位验证码
	var code;
  function createcode()
   {
   	code="";
   	var codelength=4;
    var checkcode=document.getElementById("checkcode");
    var  selectchar=new Array(0,1,2,3,4,5,6,7,8,9,
    	'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    	'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
     for(var i=0;i<codelength;i++)
   { 
    	var  charindex=Math.floor(Math.random()*62);
    	code+=selectchar[charindex];
    } 
     //alert(code); 
   if(checkcode)
    {
    	checkcode.classname="code";
    	checkcode.value=code;
    }
  }

function validate()
{
	var inputcode=document.getElementById("5").value;
	if(inputcode.length<=0)
	{
		alert("input code!");
	}
	else if(inputcode!=code)
	{
		alert("error");
		document.getElementById("5").value="";
		createcode();
	}
	else
	{
		alert("ok");
	}
}

-->

var uname=$("uname").val();
var upwd=$("upwd").val();
var code=$("code").val();

$(function(){
   //判空
   $("btnok").click(function(){
     if(uname==""||upwd==""||code=="")
  {
   alert("用户名或密码或验证码不能为空");
  }
  else
{
$("uname").focus(function(){
//正则表达式，定义用户名规则：中文|数字+字母
   var rulname=/^[\u4e00-\u9fa5]+$/;//定义规则;
  if(rulname.test(uname))
	{
         $("upwd").focus();
	}
  else{
    alert("用户名应为中文");
    $("uname").focus();
    }
	});
}

 });
  //重置
 $("btncls").click(function(){
  $("uname").val("");
  $("upwd").val("");
  $("code").val("");
});

});

