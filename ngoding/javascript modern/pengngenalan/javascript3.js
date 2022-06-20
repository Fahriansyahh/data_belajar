/*function kontruktor*/

/*function Mahasiswa (nama,energi){

    this.nama=nama
    this.energi=energi
    this.makan=function (porsi){

        this.energi+= porsi
        return `hallo ${this.nama} selamat makan`
    }
}
let fahri= new Mahasiswa("fahri",10)*/

/*functoin konctruktor permanfaaattan object prototype*/

// function Mahasiswa (nama,energi){
//   didalam kontruktor funciton menjalan kan object
//   let Mahasiswa ={}
//   let this =Object.create(Mahasiswa.prototype)
//   this.nama=nama
//    this.energi=energi
// return this
// return Mahasiswa
// }
// object dibawah ini berada di dalam object prototype
// Mahasiswa.prototype.makan=function(porsi){

//    this.energi += porsi
//     console(`hallo ${this.nama} selamat makan`)

// }
// let fahri = new Mahasiswa('fhari',10)

/*versi class*/
//class mahasiswa di jalankan oleh prototype di balik layar
//cth proto berada diatas
/*class Mahasiswa {
    constructor(nama,energi){
        this.nama=nama
        this.energi=energi
    }
    makan(porsi){
        this.energi+=porsi
        console.log(`hallo ${this.nama} selamat makan`)
    }

}
let fahri = new Mahasiswa ("fahri",10)*/


/*function declration*/
/*const methodmahasiswa={}

    methodmahasiswa.makan=function (porsi){

        this.energi+= porsi
        return `hallo ${this.nama} selamat makan`
    }



function mahasiswa (nama,energi){
    
    let mahasiswa=Object.create(methodmahasiswa)
    mahasiswa.energi=energi
    mahasiswa.nama=nama

 return mahasiswa
}
let fahri = mahasiswa('fahri',10)
*/

class Mahasiswa{
    constructor(nama,energi){
        this.nama=nama
        this.energi=energi
    }

  makan(porsi){

      this.energi+= porsi
      return `hallo ${this.nama} selamat makan`
  }
}
let fahri= new Mahasiswa('fahri',10)






