/**/
/*function arow adalah fucntion yang di buat untuk menyingkat function expresion */



/*funciton expresion*/



/*
let hallo=function(nama){
     return `hallo nama saya ${nama}`
}
console.log(hallo("fahri"))*/









/*function arrow
fucntion arrow adalah sesuatu ringkasan dari function expresion*/



// let hallo = nama => `hallo nama saya ${nama}`
// console.log(hallo("fahri"))

// let hallo = (nama,waktu) => `hallo nama saya ${nama} selamat ${waktu}`
// console.log(hallo('fahri','pagi'))










/* dibawah ini adalah perbedaan cara membuat mengunakan function expresion arow function*/



/*di bawah ini function xpresion*/
/*let mahasiswa=["fahri","iyan","yanto"]


let jumlahmahasiswa=mahasiswa.map(function(nama){
	return name.length
})
console.log(jumlahmahasiswa)*/







/*arrow function*/


/*let mahasiswa=["fahri","iyan","pahri","gox"]
let iya = mahasiswa.pop()

let jumlahmahasiswa=mahasiswa.map((nama,oke) => nama.length,iya)

console.log(jumlahmahasiswa)
*/










/*di bawah ini function xpresion*/
/*
let mahasiswa=["fahri","iyan","yanto"]

let jumlahmahasiswa=mahasiswa.map(function(nama){
	return nama={
                 nama:nama,
                 jmlmhasiswa:nama.length,
	}
})
console.table(jumlahmahasiswa)

*/





/*dibawah ini dalah cara arow function*/




let mahasiswa =["fahri","iyan","yanto"]
let jumlahmahasiswa=mahasiswa.map(nama => ({nama, jmlh:nama.length}))
console.table(jumlahmahasiswa)

