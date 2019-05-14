////魔兽争霸
$(function(){
	//获取对象元素节点
	var circle = $(".hero_btn");
    var i =0;
    
    circle.each(function(n,ele){
//  	console.log(n);
    	$(ele).click(function(){
    		$(this).parent().parent().parent().parent(".bg").css("background-image","url(../img/Warcraft/hero"+(n+1)+".png)");
    	});
    });
 });
