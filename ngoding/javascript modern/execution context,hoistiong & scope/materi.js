
function satu(){
	var nama="sandhika"
	console.log(nama)
}
function dua (){
	console.log(`${arguments[0]} ini`)
	console.log(nama)
}

console.log(nama)
var nama="erik";
satu();
dua("dody")
console.log(nama)

/*execution content, hoisting & scope*/

//pertama  yang dilakukan js adalaah

//creation atau penciptaan berikut dibawah ini

/*1.var akan menjadi undefined

  2.function akan di ambil isi dari function tersebut tapi tidak di jalan

lalu kedua hal ini akan di hoisting atau di angkat di dalam data yang tidak terlihat kedua hal ini akan selalu di utamakan

3.window =window global
4.this=window

sedangkan nomor 3 & 4 adalah sebuah object yang ada di dalam javascript yang memang menjadi bawaan untuk menjalan sebuah javascript*/





/*function execution content, hoisting $ scope lokal*/
/*function memiliki execution -- lokal sendiri sedangkan hal yang di atas adalah execution global*/

//cara kerja

/*1.var akan menjadi undefined

  2.function akan di ambil isi dari function tersebut tapi tidak di jalan
 

  3.arguments ini adalah hal yang berbeda dari window global 
   

lalu kedua hal ini akan di hoisting atau di angkat di dalam data yang tidak terlihat kedua hal ini akan selalu di utamakan

4.window =window global
5.this=window

sedangkan nomor 3 & 4 adalah sebuah object yang ada di dalam javascript yang memang menjadi bawaan untuk menjalan sebuah javascript*/










