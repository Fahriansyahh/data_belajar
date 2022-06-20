//?contoh callback
// function showNames(name) {
//     alert(`nama saya ${name}`);
// }

// function prom(call) {
//     let name = prompt('masukan nama')
//     call(name)
// }
// prom(showNames)
//?contoh callback
//? syncrounus
// const almt = [{
//     nama: 'fahri',
//     kota: 'jakarta',
//     kp: 'pondok jaya',
//     jl: 'masjid nurul fajri',
//     id: 2

// },
// {
//     nama: 'iyan',
//     kota: 'tangerang',
//     kp: 'pladen',
//     jl: 'jl unta raya',
//     id: 3
// }, {
//     nama: 'rian',
//     kota: 'tangsel',
//     kp: 'english',
//     jl: 'paris',
//     id: 4
// }]
// console.log('hai');
// almt.forEach(m => {
//     for (let a = 0; a < 10000; a++) {
//         console.log(m.nama)
//     }
// }
// )
// console.log('uy');
//?tutup SYNCROUNUS
// //?asyncrounus pada js murni
// function getDataAlamat(url, succes, error) {
//     let xhr = new XMLHttpRequest()

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 succes(xhr.response)
//             }
//             else if (xhr.status === 404) {
//                 error()
//             }
//         }
//     }
//     xhr.open('get', url)
//     xhr.send()
// }
// console.log('mulai');

// getDataAlamat('data/mahasiswa.json', (result) => {
//     let name = JSON.parse(result)
//     name.forEach(a => {
//         return console.log(a.nama);
//     });
// }, () => {
//     console.log('file json tidak conect');

// })
// console.log('selesai');
//? asyncrounus pada js murni
//? asyncrounus pada jquery

$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(a => {
            console.log(a.nama);

        });
    },
    error: (b) => {
        console.log(b + 'eror');

    }

})

//?tutup asyncrounus pada jquery
