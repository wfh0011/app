;$(function(){
		//提取本地储存当前浏览商品数据
		var detail_src=localStorage.getItem("product_src1");
		var detail_brand=localStorage.getItem("brand_name");
		var detail_product=localStorage.getItem("product_name");
		var detail_price=localStorage.getItem("product_price");
		
		//轮播图片更换
		$(".swiper-slide").children("img").first().attr("src",detail_src);
		//价格更换
		$(".detail_price").children("span").last().html(detail_price);
		//品牌名称
		$(".detail_brand").html(detail_brand);
		//商品名称变换
		$(".detail_product").html(detail_product);
		//初始化Swiper：最好是挨着</body>标签
		var mySwiper = new Swiper ('.swiper-container', {
			//可选选项，自动滑动
			autoplay: 2000,//可选选项，自动滑动
			//方向：垂直
//		    direction: 'vertical',
		    //是否循环（轮播）
		    loop: true,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    //分页器是否可点击切换
		    paginationClickable :true,
		    // 如果需要前进后退按钮
//		    nextButton: '.swiper-button-next',
//		    prevButton: '.swiper-button-prev',
		    // 如果需要滚动条
		//  scrollbar: '.swiper-scrollbar'
		})  
		//点击加入购物车
		var shoppingCar=$(".shoppingCar");
		var inCar=$(".inCar");
		var buyNow=$(".buyNow");
		//创建空数组
		var arr=[];
		//如果之前添加过商品就会读取保存的商品数量和商品信息数组
		if (localStorage.getItem("car_number")) {
			shoppingCar.children("span").html(localStorage.getItem("car_number"));
			arr=JSON.parse(localStorage.getItem("car_info"));
			//console.log(arr)
		}
		//点击加入购物车购物车
		inCar.on("tap",function(){
			//创建对象保存当前浏览商品的主要信息
			var obj={
				"detail_src":detail_src,
				"detail_product":detail_product,
				"detail_price":detail_price
			}
			arr.push(obj);
			var length=arr.length;
			shoppingCar.children("span").html(length);
			console.log(arr);
			//即时保存当前购物车商品数量
			localStorage.setItem("car_number",arr.length)
			//将数组转化为json字符串保存起来
			localStorage.setItem("car_info",JSON.stringify(arr));
		});
		//点击切换详情和评论
		var detail=$(".detail");
		var detail_comment=$(".comment");
		var detail_main1=$(".detail_main1");
		var detail_main2=$(".detail_main2");
		var $commentlist=$(".commentlist");
		detail.on("tap",function(){
			$(this).css("background","white").siblings().css("background","#8E488E");
			detail_main1.show();
			detail_main2.hide();
		});
		detail_comment.on("tap",function(){
			$(this).css("background","white").siblings().css("background","#8E488E")
			detail_main2.show();
			detail_main1.hide();
			//ajax加载评论内容
			$.ajaxSetup({  
			   type: "GET",//请求方式  
			   url: "../data/comment.json",//地址，就是action请求路径  
			   data: "json",//数据类型text xml json  script  jsonp  
			   success: function(res){//返回的参数就是 action里面所有的有get和set方法的参数  
			   //$.each(msg.items, function(i,item){});  
			   		$commentlist.empty();
			   		console.log(res)
			   		for (var i=0;i<8;i++) {
				   		$.each(res, function(i,item) {
				   				$("<li><div class='comment_name'><img src='"+item.face_src+"'/><span>"+item.user_name+"</span><span>"+item.pulish_time+"</span></div><div class='comment_star'><img src='"+item.comment_star+"'/></div><p class='comment_info'>"+item.comment_info+"</p><p class='buy_date'>"+item.buy_date+"</p></li>").appendTo($commentlist);
				   				
				   		});
				   		
			  	 	}
			   }
			});
			$.ajax();
			
		})
		
});		