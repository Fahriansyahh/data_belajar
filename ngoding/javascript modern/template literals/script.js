const umur ="umur"
let angka = 19
let name = "fahri"

//template bisa memangil expresion
console.log(`nama saya ${name} saya ber${umur} ${angka}`)
//template literal juga bisa menjalnkan ini
console.log(`${(angka % 2 == 1) ?  "true" : "salah"}`)
//bisa juga melakukan penjumlhhan matematika
console.log(`${1+1}`)
//dan dia juga bisa mengunakan enter tanpa harus /n
console.log(`halo nama saya fahri ansyah
	saya orang jakarta
	umur saya 90 tahun
	saya lahir di mars`)

//dia juga bisa memangil function 
const salam = (a) => `asalamualikum`
console.log(`${salam()}`)

//bisa juga memangil var yang berisi tambah lalu di jalankan ketika di pangil
let tambah = 5 * 6

console.log(`jumlah nya segini ${9 * 5 / 2} bukan ${tambah}`)

const array =[4,2,1,3]
//3 5 7 5
array.sort().map(e => e+1 <= array.length ? e + (e+1) : e + 1)