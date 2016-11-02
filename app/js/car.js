;$(function(){
	var $gb = $(".gb");
	var $all = $(".all");
	var $div = $("section div");
	
	//全选
	$all.click(function(){
		var name = $(".gb").attr("class")
		console.log(name);
		
		if(name != "iconfont icon-gou gb"){
			$all.removeClass("icon-yuan");
			$all.addClass("icon-gou");
			$gb.removeClass("icon-yuan");
			$gb.addClass("icon-gou");
			i = $div.length;
			var zs = sessionStorage.getItem("js");
			$pay.html(zs*i);
		}else{
			$gb.addClass("icon-yuan");
			$all.addClass("icon-yuan");
			i = 0
			var zs = sessionStorage.getItem("js");
			$pay.html(zs*i);
		}
		
	});

	var $pay = $(".pay");
	var i = 2;
	var arr = [];
	console.log($pay.html())
	//单选
	
	$gb.click(function(){
		var name = $(this).attr("class");
		console.log(name);
		
		if(name == "iconfont gb icon-gou"||name == "iconfont icon-gou gb"){
			$(this).addClass("icon-yuan");
			i--;
		}else{
			$(this).removeClass("icon-yuan");
			$(this).addClass("icon-gou");
			i++;
			var $img = $(this).parent().find("img");
			var $src = $img.attr("src");
			console.log($src);
//			sessionStorage.setItem("src",$src);
			var $wz = $(this).parent().find(".wz").html();
			console.log($wz);
//			sessionStorage.setItem("wz",$wz);
			var $money = $(this).parent().find(".money").html();
			console.log($money);
//			sessionStorage.setItem("money",$money);
			
			var goods = {
				src : $src,
				wz : $wz,
				money : $money
			}
			arr.push(goods);
			console.log(arr.length);
			sessionStorage.setItem("arr",JSON.stringify(arr));
		}
			var money = $(this).parent().find(".money").html();
			var Money = money.replace("￥","");
			var inp = $(this).parent().find("input").val();
			console.log(inp);			
			var hj = Money * inp;
			sessionStorage.setItem("js",hj);
			$pay.html(hj*i);
			console.log(i);
			
			
	})
	
	
	var $add = $(".add");
	var $dec = $(".dec");
	var $del = $(".del");
	
	//商品数量增加
	
	$add.click(function(){
		var inp = $(this).parent("p").find("input");
		var sl = $(this).parent("p").find("input").val();
		sl++;
		inp.val(sl);
		console.log(sl);

	})
	
	
	//商品数量减少
	$dec.click(function(){
		var inp = $(this).parent("p").find("input");
		var sl = $(this).parent("p").find("input").val();
		sl--;
		if(sl < 1){
			sl = 0;
		}
		inp.val(sl);
	})
	
	//删除
	$del.click(function(){
		$(this).parent().parent().remove();

		var zs = sessionStorage.getItem("js");
		var name = $(".gb").attr("class");
		console.log(name);
		
			i--;
			console.log(i);
			if(i < 1){
				i = 0;
			}
			$pay.html(zs*i);

	})
	
//	$pay.click(function(){
//		var name = $(".gb").attr("class")
//		console.log(name);
//		if(name == "iconfont icon-gou gb"){
////			sessionStorage.setItem("src",)
//		}
//	})
	
	
});



