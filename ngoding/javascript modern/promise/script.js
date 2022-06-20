
//!promise
//!promise adalah object yang mempresantasikan keberhasilan / kegagalan sebuah event yang asyncronus di masa yang akan datang
//!janji (terpenuhi/kegagaan)
//!ttes (dullfiled /rejected/pending)
//!callback (resolve / reject/ finally)
//!aksi(then/catch)
//? let penentu = true
//? const janji = new Promise((resolve, reject) => {
// ?    if (penentu) {
//?         resolve('jalankan')
// ?    }
// ?    else {
// ?        reject('salah')
//     }
// ?})

// ?janji
// ?    .then(a => {
//  ?       console.log('status ' + a);
//  ?   })
//  ?   .catch(b => {
//  ?       console.log('status ' + b);
//  ?   })



//? let status = true
// ?   if (status) {
//  ?       setTimeout(a => {
//   ?          resolve('sehat')

//    ?     }, 2000)
//    ? }
//     ?      reject('sakit')
//    ?     }, 200)
//   ?  }

// ? })
//? console.log('buka');
//? janji1
// ?    .finally(() => {
// ?        console.log('loading');
// ?    })
// ?    .then(m => console.log(m))
//?     .catch(l => console.log(l))
//? console.log('tutup');

let status = true
const janji4 = new Promise((resolve, reject) => {
    if (status) {
        resolve({
            nama: 'jaki',
            umur: 23,
            kelas: '12mm 2'
        })
    }
    else {
        reject('404')
    }
})

const janji3 = new Promise((resolve, reject) => {
    if (status) {
        resolve({
            nama: 'fahri',
            umur: 21,
            kelas: '12 mm2'
        })
    }
    else {
        reject('404')
    }
})
//promise all ketika menagabungkan dua object

Promise.all([janji3, janji4])
    .then(a => {
        a.forEach(b => console.log(b.nama))
    });









let kondisi = true
const janji5 = new Promise((resolve, reject) => {
    if (kondisi) {
        resolve({
            nama: 'fahri',
            kelas: 12,
            umur: 18
        })
    }
    else {
        reject(
            console.log('eror')
        )
    }
})

const janji6 = new Promise((ok, kg) => {
    if (kondisi) {
        ok({
            kota: 'tangerang'
        })
    }
    else {
        kg(
            console.log('error')
        )
    }
})


Promise.all([janji5, janji6])
    .then(response => {
        const [janji5, janji6] = response
        console.log(janji5)
        console.log(janji6);
    })