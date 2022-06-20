/*object literal */
 
//object ini tidak efektif jika digunakan dengan banyak nama
/*
let Mahasiswa={
  
   nama:"fahri",
   energi:10,
   makan:function(porsi){
        this.energi+=porsi
        console.log(`hallo ${this.nama} selamat makan`)
   }
}
let Mahasiswa1={
  
   nama:"yanto",
   energi:10,
   makan:function(porsi){
        this.energi+=porsi
        console.log(`hallo ${this.nama} selamat makan`)
   }
}*/

/*function konstruktor*/
/*
function Mahasiswa(nama,energi){


    this.nama=nama
    this.energi=energi
    this.makan=function(porsi){
        this.energi+=porsi
        console.log(`hallo ${this.nama} selamat makan fahri`)
    }
    this.main=function(jam){
        this.energi-=jam
        console.log(`hallo ${this.nama} selamat main`)
    }
}
var fahri= new Mahasiswa("fahri",10)*/

/*function declration*/

const methodmahasiswa={

  makan:function(porsi){

          this.energi+=porsi
          console.log(`hallo ${this.nama} selamat makan`)
  },
  main:function(jam){

          this.energi-= jam
          console.log(`hallo ${this.nama} selamat main`)
  },
  sakit:function(hari){

          this.energi/= hari 
          console.log(`hallo ${this.nama} semoga sembuh`)
  },
  tidur:function(jam){
          this.energi+= jam * 2
          console.log(`hallo ${this.nama} selamat tidur`)
  }
}

function mahasiswa(nama,energi){
  let mahasiswa=Object.create(methodmahasiswa)
  mahasiswa.nama=nama
  mahasiswa.energi=energi
 
  
  return mahasiswa


}
let fahri= mahasiswa("fahri",20)

