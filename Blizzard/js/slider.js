function slider(name1){
	
	var n=0;
	var inter=null;
	//调用定时器
	inter = setInterval(moveStart,3000);
	
	//获取对象
	var obj = $("."+name1);
	//获取轮播区域的宽高
	var wid = obj.parent().width();
	var hei = obj.parent().height();
	//获取轮播对象的个数
	var num = obj.children("img").length;
    //轮播区域的样式
    obj.css({
    	"width":num*wid+"px",
    	"height":hei+"px",
    	"position":"absolute",
    	"top":"0",
    	"left":"0",
    	"background-color":"red"
    });
    //轮播区域子级的样式
    obj.children("img").each(function(n,ele){
//		alert(n);
    	$(ele).css({
        	"width":wid+"px",
        	"height":hei+"px",
        	"position":"absolute",
	      	"top":"0px",
	      	"z-index":"98",
	      	"left":(n*wid)+"px"
        });
    });
    
    function moveRight(){
    	//大于等于num 重置所有状态
	   	  if(n<=0){
	   	  	n=num-1;
	   	  	obj.css("left",-(num-1)*wid+"px");
	   	  }
	   	   n--;
	   	   moveTo();
    }
    //开始轮播对象
    function moveStart(){
//  	alert("ok");
    	if(n>num-2){
    		n=0;
    		obj.css("left","0px");
    	}
    	n++;
    	console.log(n);
    	moveTo();
    }
    //自动轮播
    function moveTo(){
    	obj.animate({
    		"left":(-n*wid)+"px"
    	},500);
    };
}
