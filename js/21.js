var x = parseInt(prompt("Enter the value"))
var i=1;
a=x
while(a>0){
     rem=a%10
     a=(a-rem)/10
     if (rem==1)
	 {
	document.write("One"+"<br>");
     }
	 else if (rem==2)
	  {
	document.write("Two"+"<br>");
     }
	 else if (rem==3)
	 {
	document.write("Three"+"<br>");
     }
	 else if (rem==4)
	  {
	document.write("Four"+"<br>");
     }
	 else if (rem==5)
	 {
	document.write("Five"+"<br>");
     }
	 else if (rem==6)
	 {
	document.write("Six"+"<br>");
     }
	 else if (rem==7)
	  {
	document.write("Seven"+"<br>");
     }
	 else if (rem==8)
	  {
	document.write("Eight"+"<br>");
     }
	 else if (rem==9)
	 {
	document.write("Nine"+"<br>");
     }
	 else
	  {
	document.write("Zero"+"<br>");
     }
 }
