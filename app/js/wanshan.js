;document.addEventListener("DOMContentLoaded",function(){
	 
	   var sheng=document.querySelector("#sheng");
	   var shi=document.querySelector("#shi");
	   var xian=document.querySelector("#xian");
	 
	   var slist=document.querySelector("#slist");
	   var xlist=document.querySelector("#xlist");
	 
	   var Btn=document.querySelector("#btn");
	   var username=document.querySelector("#username");
	 
	  var str1,str2,str3,str4;
	 
	 
	   sheng.onblur=function(){
	   	  
	   	      str1=sheng.value;
	   	      
	   	      switch(str1){
	   	      	  case str1="广东省":
	   	      	     slist.innerHTML="<option value='深圳市'>深圳市</option><option value='广州市'>广州市</option><option value='佛山市'>佛山市</option><option value='东莞市'>东莞市</option>";
	   	      	     
	   	      	     break;
	   	      	     
	   	        case str1="广西壮族自治区":
	   	      	     slist.innerHTML="<option value='南宁市'>南宁市</option><option value='桂林市'>桂林市</option><option value='玉林市'>玉林市</option><option value='钦州市'>钦州市</option>";
	   	      	     
	   	      	     break;   
	   	      	     
	   	       	 case str1="福建省":
	   	      	     slist.innerHTML="<option value='厦门市'>厦门市</option><option value='泉州市'>泉州市</option><option value='福州市'>福州市</option><option value='漳州市'>漳州市</option>";
	   	      	     
	   	      	     break;	 
	   	      	     
	   	      	 case str1="湖南省":
	   	      	     slist.innerHTML="<option value='长沙市'>长沙市</option><option value='株洲市'>株洲市</option><option value='常德市'>常德市</option><option value='衡阳市'>衡阳市</option>";
	   	      	     
	   	      	     break;	
	   	      }
	   	      
	   	
	   }
	   
	   
	   shi.onblur=function(){
	   	       
	   	        str2=shi.value;
	   	        
	   	        switch(str2){
		   	        case str2="深圳市":
		   	      	     xlist.innerHTML="<option value='南山区'>南山区</option><option value='宝安区'>宝安区</option><option value='罗湖区'>罗湖区</option>";
		   	      	     
		   	      	     break;
		   	      	     
	   	           case str2="广州市":
		   	      	     xlist.innerHTML="<option value='天河区'>天河区</option><option value='白云区'>白云区</option><option value='海珠区'>海珠区</option>";
		   	      	     
		   	      	     break;
		   	       case str2="佛山市":
		   	      	     xlist.innerHTML="<option value='南海区'>南海区</option><option value='禅城区'>禅城区</option>";
		   	      	     
		   	      	     break;
		   	      	     
		   	      	 case str2="东莞市":
		   	      	     xlist.innerHTML="<option value='厚街镇'>厚街镇</option><option value='长安镇'>长安镇</option><option value='虎门镇'>虎门镇</option>";
		   	      	     
		   	      	     break;     
		   	      	     
		   	      	 case str2="南宁市":
		   	      	     xlist.innerHTML="<option value='青秀区'>青秀区</option><option value='兴宁区'>兴宁区</option><option value='江南区'>江南区</option>";
		   	      	     
		   	      	     break;    
		   	      	     
		   	        case str2="桂林市":
		   	      	     xlist.innerHTML="<option value='秀峰区'>秀峰区</option><option value='临桂区'>临桂区</option><option value='叠彩区'>叠彩区</option>";
		   	      	     
		   	      	     break;     
		   	      	     
		   	      	 case str2="玉林市":
		   	      	     xlist.innerHTML="<option value='玉州区'>玉州区</option><option value='北流市'>北流市</option><option value='兴业县'>兴业县</option>";
		   	      	     
		   	      	     break;      
		   	      	     
		   	      	case str2="钦州市":
		   	      	     xlist.innerHTML="<option value='钦北区'>钦北区</option><option value='钦南区'>钦南区</option>";
		   	      	     
		   	      	     break;      
		   	      	     
		   	      	case str2="厦门市":
		   	      	     xlist.innerHTML="<option value='湖里区'>湖里区</option><option value='思明区'>思明区</option><option value='海沧区'>海沧区</option>";
		   	      	     
		   	      	     break;                       
		   	      	    
		   	      	 case str2="泉州市":
		   	      	     xlist.innerHTML="<option value='丰泽区'>丰泽区</option><option value='洛江区'>洛江区</option><option value='鲤城区'>鲤城区</option>";
		   	      	     
		   	      	     break;         
		   	      	     
		   	        case str2="福州市":
		   	      	     xlist.innerHTML="<option value='仓山区'>仓山区</option><option value='台江区'>台江区</option><option value='晋安区'>晋安区</option>";
		   	      	     
		   	      	     break;           	    
		   	      	    
		   	       case str2="漳州市":
		   	      	     xlist.innerHTML="<option value='龙文区'>龙文区</option><option value='文泰县'>文泰县</option>";
		   	      	     
		   	      	     break;           	    
		   	      	    	    
		   	       case str2="长沙市":
		   	      	     xlist.innerHTML="<option value='开福区'>开福区</option><option value='长沙县'>长沙县</option><option value='天心区'>天心区</option>";
		   	      	     
		   	      	     break;       
		   	      	    
		   	   case str2="株洲市":
		   	      	     xlist.innerHTML="<option value='天元区'>天元区</option><option value='石峰区'>石峰区</option><option value='荷塘区'>荷塘区</option>";
		   	      	     
		   	      	     break;       
		   	      	     
		   	   case str2="常德市":
		   	      	     xlist.innerHTML="<option value='武陵区'>武陵区</option><option value='鼎城区'>鼎城区</option>";
		   	      	     
		   	      	     break;     	        
		   	      	   
		   	      case str2="衡阳市":
		   	      	     xlist.innerHTML="<option value='蒸湘区'>武陵区</option><option value='雁峰区'>雁峰区</option>";
		   	      	     
		   	      	     break;     	        
		   	      	      	   
		   	      	   
		   	      	    
	   	        }
	   	      
	   	
	   }
	   
	 
	
		
			$("#btn").on("singleTap",function(){	
				
				  console.log("sfdf");
		         var str=username.value;
		 	   
			 	   localStorage.setItem("username",str);
			 	   
			 	   location.href="personal.html";
			})
		

			var $sideList = $(".side-list");
				var $iconFenlei = $(".icon-fenlei");
				$iconFenlei.click(function(){
					$sideList.toggle();
				})
	
	
	
});