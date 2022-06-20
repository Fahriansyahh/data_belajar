
var p=""
for(var i=0;i<=10;i++){

  if(i%2==0){
           for(var k=0;k<=20;k++){
              if(k%2==0){
              	p+='#'
              }
              else{
              	p+=" "
              }
           }
  p+="\n"
  }

  else{
     for(var t=0;t<=20;t++){
     	if(t%2==0){
     		p+=" "
     	}
     	else{
     		p+="#"
     	}
     }

 p+="\n"
  }
   
 



}

console.log(p)