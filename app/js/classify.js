;$(function(){
		var $sideList = $(".side-list");
		var $iconUlist = $(".icon-uilist");
		$iconUlist.on("tap",function(){
			$(".side-list").toggle();
		})
		var idx=0;
		var $main_right=$(".main_right");
		var $top_list=$(".top_list");
		var $bottom_list=$(".bottom_list");
		$.ajaxSetup({  
		   type: "GET",//请求方式  
		   url: "../data/classify.json",//地址，就是action请求路径  
		   data: "json",//数据类型text xml json  script  jsonp  
		   success: function(res){//返回的参数就是 action里面所有的有get和set方法的参数  
		      //$.each(msg.items, function(i,item){});  
		     console.log(res[idx].brands);
		     $.each(res[idx].brands,function(i,item){
		     	console.log(item.brand_src);
		     	if ($top_list.children().length<6) {
		     		$("<li id='"+item.id+"'><a href='produclist.html'><img src='"+item.brand_src+"'/><span>"+item.brand_name+"</span></a></li>").appendTo($top_list);
		     		$("<li id='"+item.id+"'><a href='produclist.html'><img src='"+item.brand_src+"'/><span>"+item.brand_name+"</span></a></li>").appendTo($top_list);
		     	}
		     	if ($bottom_list.children().length<80) {
		     		for (var i=0;i<4;i++) {
			     		$("<li id='"+item.id+"'><a href='produclist.html'><img src='"+item.brand_src+"'/><span>"+item.brand_name+"</span></a></li>").appendTo($bottom_list);
			     	}
		     	}
		     	console.log($top_list.children().length)
		     });
		     //给生成的每个品牌li绑定事件，点击时保存id
		     $main_right.find("ul").children("li").on("tap",function(){
					console.log($(this).attr("id"));
					var id=$(this).attr("id");
					localStorage.setItem("id",id);
			 });
		   }  
		});
		$.ajax();
		//点击切换分类并加载该分类品牌
		$(".left_nav").children("li").on("tap",function(){
			idx=$(this).index();
			$(this).css("background","#f1f5f5").siblings().css("background","white");
			console.log(idx)
			$top_list.empty();
		    $bottom_list.empty();
			$.ajax();
			
		})
		//根据滚动条位置触发加载事件（懒加载）
		var $main_left=$(".main_left")
		var dh=$(document).height();
		$(window).scroll(function(){
			var s=dh-$(window).scrollTop();
			console.log($(window).height()+","+$(document).height()+","+$(window).scrollTop())
			if (s<$(window).height()) {
				$.ajax();
			}

		});
		
	});	