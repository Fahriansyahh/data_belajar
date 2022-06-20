/*object literal*/

 /*var mahasiswa={

 	nama:"fahri",
 	energi:10,
 	makan:function(porsi){
    
      this.energi+=porsi
      console.log(`hallo ${this.nama} hallo semuanya`)
 	}
 }*/

 /*function declration*/
/*
function mahasiswa(nama,energi){
  
   let mahasiswa={}
   mahasiswa.nama=nama
   mahasiswa.energi=energi
   mahasiswa.makan=function(porsi){
           
           this.energi+=porsi
         console.log(`hallo ${this.nama} selamat makan`)

   }
return mahasiswa

}
let mahasiswa1= mahasiswa('fahri',20)*/


/*function konstruktor*/

function Mahasiswa (nama,energi){

   this.nama=nama
   this.energi=energi
   this.makan=function(porsi){
       
          this.energi+=porsi
          console.log(`hallo ${this.nama} selamat makan`)

   }


}
let Mahasiswa1=new Mahasiswa('iyan',10)













