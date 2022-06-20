//!   for of string array arguments nodelist type array map set user-fdefined trubles






//*macam macam array pada pengulangan

// ? const arr = [1, 2, 3, 4]
//! array pada for
//? for (let a = 0; a < arr.length; a++) {
// ?    console.log(arr[a])
//? }

//! array pada forEach

// ? arr.forEach(a => console.log(a))

//! array pada for of

//? for (const a of arr) {
//?     console.log(a)
//? }

//! pada forEach
// ? const name = ['fahri', 'ixul', 'opoppp']

//?  name.forEach((a, i) => {
//?     console.log(`hallo nama saya ${a} mahasiswa ke ${ + 1}`);

//?  });
//!pada for of  entries di bawah untuk menampilakn index
// ? for (const [i, b] of name.entries()) {
// ?    console.log(`hallo nama saya ${a} mahasiswa ke ${+ 1}`)
//? }
//*macam macam string pada pengulangan
//! forEach tidak bisa di gunakan karena dia bawaan dari array

const a = 'fahri'
//!pada for
// ?  for (let b = 0; b < a.length; b++) {
// ?    console.log(a[b])
// ? }
//!pada for of
//? for (const x of a) {
// ?    console.log(x)
//? }

//*macam macam node list dom pada pengulangan
const nama = document.querySelectorAll('.name')
//! pada forEach
//?  nama.forEach(a => {
//?     console.log(a.innerHTML)
//? });
//! for of
// ? for (const [a, b] of nama.entries()) {
// ?    console.log(`saya adalah ${b.textContent} mahasiswa ke ${a}`)
//?  }
//!pada for
//?  for (let o = 0; o < nama.length; o++) {
//?     console.log(nama[o].textContent)
//? }

//* argument pada pengulangan for of
//!hall ini hanya bisa di alkukan oleh for of dan for

//?  function name() {
// ?    for (const a of arguments) {
// ?        console.log(a)
// ?    }
//? }

//? const oke = name(1, 2, 3, 4, 5)

//! (for in hanya bisa digunakan untuk object)

const oke = {
    saya: 'fahri',
    tingal: 'jakarta',
    tempat: 'tangerang'
}

for (const a in oke) {
    console.log(a)
}
console.log('hallo');