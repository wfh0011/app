;(function(){
	document.addEventListener("DOMContentLoaded",function(){
		var $main=$(".vault_main");
		$.ajax({
			type:"get",
			url:"../data/vault.json",
			dataType:"json",
			success:function(rel){
				console.log()
				$.each(rel, function(idx,item) {
					var $span1=$("<span/>").html(item.sz);
					var $span2=$("<span/>").html(item.yue);
					var $span3=$("<span/>").html(item.bz);
					var $span4=$("<span/>").html(item.time);
					var $div1=$("<div/>").addClass("details");
					var $div2=$("<div/>").addClass("col-xs-3").append($span1);
					var $div3=$("<div/>").addClass("col-xs-3").append($span2);
					var $div4=$("<div/>").addClass("col-xs-3").append($span3);
					var $div5=$("<div/>").addClass("col-xs-3").append($span4);
					$div1.append($div2).append($div3).append($div4).append($div5);
					$main.append($div1);
				});
			}
		});
	});
})();
