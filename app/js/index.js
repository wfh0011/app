;(function(){
	document.addEventListener("DOMContentLoaded",function(){
		var $fh=$(".fh-top");
		//利用ajax请求,获取json数据,生成商品列表
		//获取jq对象
		var $goods=$(".produlist");
		//配置全局ajax请求
		$.ajaxSetup({
			type:"get",
			url:"data/index.json",
			dataType:"json",
			success:function(rel){
				$.each(rel, function(idx,item) {
					var $img=$("<img />").attr("src",item.src);
					var $a=$("<a/>").attr("href","#").append($img);
					var $div1=$("<div/>").addClass("proimgs").append($a);
					var $span1=$("<span/>").html(item.title).addClass("s1");
					var $span2=$("<span/>").html("积分价:").addClass("s2");
					var $span3=$("<span/>").html(item.pic).addClass("s3");
					var $span4=$("<span/>").html("起").addClass("s4");
					var $div2=$("<div/>").addClass("item-title");
					$div2.append($span1).append($span2).append($span3).append($span4);
					$goods.append($div1).append($div2);
				});
			}
		});
		//先加载一次
		$.ajax();
		var i=0;
//		console.log($(window).innerHeight(),$(document).height(),$(document).scrollTop());
		//滚动事件,使返回顶部图标显示或隐藏
		$(window).on("scroll",function(){
			if ($(document).scrollTop()>=300) {
				$fh.show();
			}else{
				$fh.hide();
			}
			//懒加载
			if ($(document).height()-$(window).innerHeight()-$(document).scrollTop()<200) {
				if (i<2) {
					$.ajax();
				}
				i++;
			}
		});
		//点击返回顶部图标,返回顶部
		$fh.on("singleTap",function(){
			$("html body").animate({scrollTop:0});
		});
	});
})();
