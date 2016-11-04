  ;document.addEventListener("DOMContentLoaded",function(){
			  	
			  	       var username=document.querySelector("#username");
			  	      
			  	
			  	
			  	    var str=  localStorage.getItem("username");
			  	      
			  	      if (str) {
			  	      	      username.innerHTML=str;
			  	      }
			  	      
			  	$(".dt").on("singleTap",function(){
			  		 console.log("aaa");
			  		   location.href="wanshan.html";
			  		
			  	});
			  	 
			  	var $sideList = $(".side-list");
				var $iconFenlei = $(".icon-fenlei");
				$iconFenlei.click(function(){
					$sideList.toggle();
				})
				
				
				
			  });
			  	