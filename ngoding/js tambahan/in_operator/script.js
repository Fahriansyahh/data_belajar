//! ini adalah operator in pada js

const obj = {
    nama: 'fahri',
    kelas: 'multimedia',
    saya: undefined,
    why: NaN
}

//! jika namaini ada di obj hasil nya true jika tidak akan bernilai false
const jika = 'nama' in obj
const kalo = 'sdaas' in obj
const merka = 'why' in obj
document.writeln('jika namaini ada di obj hasil nya true jika tidak akan bernilai false' + '<br> ')
document.writeln(`${kalo} <br>`)
document.writeln(`${jika} <br>`)
document.writeln(`${merka} <br>`)
//!berbeda jika bernilai undefined
const kita = 'saya' in obj
document.writeln(`${kita} <br>`)
//! pemakaian in pada array
const arr = ['fahri', 'rian', 2]
//! untuk mengecek apakah index arr ada
const lagi = [3] in arr
const num = [2] in arr
//! kenapatype of bernilai bollean karena di dalam in bersifat bollean
console.log(typeof lagi + lagi);
console.log(typeof num + num);

//!pwmakaian typeof
const jajal = typeof obj
console.log(typeof obj.why);
