;$(function(){
		var $sideList = $(".side-list");
		var $iconUlist = $(".icon-uilist");
		$iconUlist.on("tap",function(){
			$sideList.toggle();
		})
		
		var $products_list=$('.products_list');
	 	var id=localStorage.getItem("id");
		$.ajaxSetup({  
		   type: "GET",//请求方式  
		   url: "../data/classify.json",//地址，就是action请求路径  
		   data: "json",//数据类型text xml json  script  jsonp  
		   success: function(res){//返回的参数就是 action里面所有的有get和set方法的参数  
		      //$.each(msg.items, function(i,item){});  
			     console.log(res);
			     console.log(id)
			     for(var j=0;j<10;j++){
			    	 $.each(res[j].brands,function(i,item){
			    	 	if(item.id==id){
			    	 		console.log(item.products.length);
			    	 		console.log(item.brand_name);
			    	 		//本地保存当前商品列表的品牌名
			    	 		localStorage.setItem("brand_name",item.brand_name);
			    	 		console.log(item.products)
			    	 		//遍历生成li
			    	 		$.each(item.products,function(i,obj){
			    	 			console.log(obj);
			    	 			$("<li class='"+item.brand_name+"'><a href='detail.html'><img src='"+obj.product_brand_src1+"' class='product_big'/><div class='title'>"+obj.product_name+"</div><div class='price'><img src='../img/gold.png' /><span class='price_val'>"+obj.product_price+"</span></div></a></li>").appendTo($products_list);
			    	 		});			    	 		
			    	 	}
				     });
			     }
			     $products_list.children("li").on("tap",function(){
						var brand_name=$(this).attr("class");
						var product_src1=$(this).find("img").attr("src");
						var product_name=$(this).find(".title").html();
						var product_price=$(this).find(".price_val").html();
						localStorage.setItem("brand_name",brand_name);
						localStorage.setItem("product_src1",product_src1);
						localStorage.setItem("product_name",product_name);
						localStorage.setItem("product_price",product_price);
				 });
		    }  
		});
		$.ajax();
		
});