
//scroll fonction

 function () {
			
			var x  	= document.getElementById("nav");
			
			if (document.body.scrollTop >= 200 ) 
				x.style.backgroundColor="rgba(0,0,0,0.6)"
			 else if (document.body.scrollTop < 200)
				x.style.backgroundColor="rgba(1,1,1,0)"
			}