/*contoh closure dan cara pengerjaan execution context*/

/*
contoh pengunaan closure

1.pertama java script akan meninjau argument terlebih dahulu
2.lalu akan menghoisitng fc pangilnama
3.dan membuat var nama menjadi fahri
4.lalu akan memanggil panggil nama
5.dan akan mengarah ke parent atau closure var fahri
6.setelah mengarah akan direturn 

function pangil(){
 
    let nama='fahri' (3)
    function panggilnama(){ (2)
       console.log(nama) (5-6)
    }
    
    panggilnama() (4)
}

pangil()  (1)


*/

/*
1.dimulai dari argument function let aku
2.lalu ke let saya dan membuat var undefined menjadi aku
3.mengembalikan function menjadi isinya tanpa di eksekusi
4.mengembalikan function kek aku dan mengisi parameter nama menjadi fahri
5. lalu menegmbalikan nilai sebelum mengembalikan nilai console akan berada di parent atau mengarah ke closure var lokal

function init(){
let saya="aku"  (2)
return function(nama){ (3)
console.log(nama+saya) (5)
    }
}
let aku=init()  (1)
aku('fahri')    (4)
*/

/*
1. dimulai dari argument salem
2.lalu melakukan return unutk mengembalikan nilai function tanpa di eksekusi
3.fase mencari argument
4.mengisi argument menjadi fahri
5.berada di fase parent mengarah ke lokal scope
6.mereturn nilai tersebut
function salam(waktu){
      return function(nama){ (2-3)
       console.log(`hallo ${nama},selamat ${waktu}`) (5-6)
      }
}

let selamatpagi=salam('pagi')  (1)
selamatpagi('fahri') (4)
*/
/*
1.di mulai dari let func
2.dan mengarah ke argumen func
3.lalu mengubah var angka dari undefined menjadi 0
4.mengembalikan isi function tapi tidak di ekxecusion
5.lalu mengacu ke parameter oke untuk menjalani function anonymouse
6.lalu berada di pase parent mengacu ke scopr lokal dan balik lagi ke no 5 unutk menjalankan function kembali dengan nilai angka bertambah setiap function di pangil


     let add=function(){    (1)
   let angka=0                   (3)
   return function(){         (4)
    return ++angka          (6)
   }
} 
let oke = add()             (2)
console.log(oke())           (5)
console.log(oke())           (5-6)
console.log(oke())           (5-6)
                         */  

              /*jika lupa konsep bisa di 5eps js modern 
              jika ingin membedah jalur dalam kunjungi
              https://pythontutor.com/javascript.html#mode=edi*/ 

function nams(){
    let  nama='fahri'
    let energi=10
   return function(porsi){
      energi+=porsi
      console.log(`hallo ${nama} selamat makan energi anda ${energi}`)
    }

}                         
let fahri=nams()
fahri(10)       
fahri(20)                                                                                                                                                                                                                                                                                                                                                                                                                             