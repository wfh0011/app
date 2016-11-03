;$(function(){

	var arr = sessionStorage.getItem("arr");
	var Arr = JSON.parse(arr);
	console.log(Arr);
	
	var src,wz,money;
	
	$.each(Arr, function(idx,item) {
		jl();
		src = item.src;
		wz = item.wz;
		money = item.money;
		console.log(item);
		console.log(src);
		console.log(wz);
		console.log(money);
	var $ct = $(".center").eq(idx);
		var $img = $("<img/>").attr("src",src);
		var $wz = $("<span/>").addClass("wz").html(wz);
		var $money = $("<span/>").addClass("money").html(money);
		
		$img.appendTo($ct);
		$wz.appendTo($ct);
		$money.appendTo($ct);
		
		
	});
		
	function jl(){
		var $div = $("<div/>").addClass("content");
		
		var $top = $("<div/>").addClass("top");
		var $h4 = $("<h4/>").html("店铺1");
		var $topsp = $("<span/>").html("交易成功");
		$top.append($h4).append($topsp)
		
		var $ct = $("<div/>").addClass("center");
		var $ctsp = $("<span/>").addClass("sl").html("x2");
		$ct.append($ctsp);
		
		var $foot = $("<div/>").addClass("foot");
		var $p = $("<p/>").html("共1商品，合计：￥");
		var $psp = $("<span/>").html("100");
		$p.append($psp);
		$foot.append($p);
		
		var $footer = $("<div/>").addClass("footer");
		var $btn1 = $("<button/>").html("查看物流");
		var $btn2 = $("<button/>").html("删除订单");
		var $btn3 = $("<button/>").html("付款");
		$footer.append($btn1).append($btn2).append($btn3);
		
		$div.append($top).append($ct).append($foot).append($footer);
		
		$("section").append($div);
		
		$btn2.click(function(){
			$(this).parent().parent().remove();
		})
	}

});

