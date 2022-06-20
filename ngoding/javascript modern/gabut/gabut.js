var h=""
for(var i=0;i<=10;i++){

     for(var o=0;o<=i;o++){
        h+="*"
     }
     for(var k=10;k>=i;k--){
        h+="."
     }
     
   h+="\n"
}
console.log(h)