// 头部
var closeTop = $(".head-top-right");
var headTop = $(".head-top")
closeTop.onclick = function(){
    closeTop.style.display = "none";
    headTop.style.display = "none";
}
// 轮播图
var $box = $("#banner");
var $img = $("#banner ul img");
var $box1 = $("#banner ul li",true);
var $box2 = $("#banner ol");
var $length = $box1.length;
var current = 0;
var str = "";
	for(var i =0;i<$length;i++){
		if(i==0){
			str +="<li class='on'>";
		}else{
			str += "<li>";
		}
    }
    $box2.innerHTML = str;
var timer;
   timer = setInterval(go,1000);
   function go(){
    for(var j =0;j<$length;j++){
        $box1[j].style.display = "none";
        $box2.children[j].className = "";
    }
    if($length == current){
        current = 0;
    }
    $box1[current].style.display = "block";
    $box2.children[current].className = "on";
    current++;
}
    //自动轮播
    for(var k=0;k<$length;k++){
		$box1[k].onmouseover = function(){
			clearInterval(timer);
		}
		$box1[k].onmouseout = function(){
			timer = setInterval(go,1000);
		}
    }
    // 清除轮播
    // for(var j = 0;j<$length;j++){
    //     var li = document.createElement("li");
    //     $box2.appendChild(li);
    // }   
    // // 动态添加小圆点
    for(var u =0;u<$length;u++){
		$box2.children[u].index  = u;
		$box2.children[u].onmouseover = function(){
			clearInterval(timer);
			for(var j=0;j<$length;j++){
				$box1[j].style.display = "none";
				$box2.children[j].className = "";
			}
			this.className = "on";
			$box1[this.index].style.display = "block";
			current = this.index +1;
		}
		$box2.children[u].onmouseout = function(){
			timer = setInterval(go,1000);
		}
	} 



    
// 倒计时
var timer = null;
    window.onload = function(){	
        // 开启定时器	
        timer = setInterval(show,100);	
        //回调函数	
        function show(){		
            var d1 = new Date();
            //获取到当前的时间		
            var d1Ms = d1.getTime();		
            var d2 = new Date("11 11,2019");		
            var d2Ms = d2.getTime();		
            var differMs = d2Ms-d1Ms;
            //相差的毫秒数			
            var hours = parseInt((differMs%(3600*24*1000))/(3600*1000));//1小时=3600s		
            var minutes =parseInt((differMs%(3600*1000))/(60*1000));//分钟		
            var seconds = parseInt((differMs%(60*1000))/1000);//秒		
            hours = hours<10?"0"+hours:hours;		
            minutes = minutes<10?"0"+minutes:minutes;		
            seconds = seconds<10?"0"+seconds:seconds;		
            document.getElementById("spanTime").innerHTML = hours+"h："+ minutes+"m："+ seconds+"s！";	
         }	
        }

    // 工具箱
    function $(selector){
        if(arguments[1] == true){
            return document.querySelectorAll(selector);
        }else{
            return document.querySelector(selector);
        }
    }

