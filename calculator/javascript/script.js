var res=0;
			var oper=0;
			var chck=0;
			
			function digit(a){
			var box=document.getElementById("box");
			if(box.innerHTML==0&&chck==0){
			box.innerHTML=a;
				}
			else {
				box.innerHTML=box.innerHTML+a;
			}
			}
			
			function rst(){
				var box=document.getElementById("box");
				var disp=document.getElementById("disp");
				box.innerHTML=0;
				res=0;
				oper=0;
				chck=0;
			}
			
			function zero(){
				var box=document.getElementById("box");
				if(box.innerHTML!=0){
					box.innerHTML=box.innerHTML+0;
				}
				else if(box.innerHTML==0&&chck==1){
					box.innerHTML=box.innerHTML+0;
				}
			}
			
			function add(){
				var box=document.getElementById("box");
				var b=0;
				b=1*box.innerHTML;
					if(oper==0){
						res=b;					
						}
					else if(oper==1){
						res=res+b;
					}
					else if(oper==2){
						res=res-b;
					}
					else if(oper==3){
						res=res*b;
					}
					else if(oper==4){
						res=res/b;
					}
					if(b==0&&oper==0){
				res=0;
			}
			if(b==0&&oper==4){
				box.innerHTML="infinity";
			}
					
					box.innerHTML=0;
					chck=0;
				oper=1;
					}
					
				function multi(){
					var box=document.getElementById("box");
					var b=0;
					b=1*box.innerHTML;
					if(oper==0){
						res=b;					
						}
					else if(oper==1){
						res=res+b;
					}
					else if(oper==2){
						res=res-b;
					}
					else if(oper==3){
						res=res*b;
					}
					else if(oper==4){
						res=res/b;
					}
					if(b==0&&oper==3){
				res=0;
			}
			if(b==0&&oper==4){
				box.innerHTML="infinity";
			}

				box.innerHTML=0;
				chck=0;
				oper=3;
				}

				function divd(){
					var box=document.getElementById("box");
					var b=0;
					b=1*box.innerHTML;
					if(oper==0){
						res=b;					
						}
					else if(oper==1){
						res=res+b;
					}
					else if(oper==2){
						res=res-b;
					}
					else if(oper==3){
						res=res*b;
					}
					else if(oper==4){
						res=res/b;
					}
					if(b==0&&oper==3){
				res=0;
			}
			if(b==0&&oper==4){
				box.innerHTML="infinity";
			}
				box.innerHTML=0;
				chck=0;
				oper=4;
				}

			function subs(){
			var box=document.getElementById("box");
				var b=0;
				b=1*box.innerHTML;
				if(oper==0){
						res=b;
					}						
				else if(oper==1){
						res=res+b;
					}
					else if(oper==2){
						res=res-b;
					}
					else if(oper==3){
						res=res*b;
					}
					else if(oper==4){
						res=res/b;
					}
					if(b==0&&oper==3){
				res=0;
			}
			if(b==0&&oper==4){
				box.innerHTML="infinity";
			}
				box.innerHTML=0;
				chck=0;
				oper=2;
			}
			
			function eqlto(){
				var box=document.getElementById("box");
				var b=1*box.innerHTML;
				if(b==0){
				box.innerHTML=res;
				}
				else if(b!=0){
					if(oper==1){
						res=res+b;
					}
					else if(oper==2){
						res=res-b;
					}
					else if(oper==3){
						res=res*b;
					}
					else if(oper==4){
						res=res/b;
					}
				box.innerHTML=res;	
				}
			if(b==0&&oper==3){
				box.innerHTML=0;
			}
			if(b==0&&oper==4){
				box.innerHTML="Error";
			}
			oper=0;
			res=0;
			}
			
			function deci(){
				var box=document.getElementById("box");
				if(chck==0){
					box.innerHTML=box.innerHTML+".";	
				}
				chck=1;
			}
			
