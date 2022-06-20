//! rest parameter dasar
//? rest parameter mengembalikan array 
function numb(a, b, ...rest) {
    return rest
}

console.log(numb(1, 2, 4, 5, 6));

//! jenis jenis rest parameter

function grup() {
    const [ketua, ...angota] = ['fahri', 'rian', 'yanto', 'pahri']
    return angota
}
const buat = grup()
console.log(buat);

const pendakian = {
    leader: 'fahri',
    tengah: 'rian',
    terakhir: 'iyan'
}
function semeru({ leader, tengah, terakhir }) {
    return leader
}
console.log(semeru(pendakian));

function tambah(...angka) {
    return angka.reduce((a, b) => a + b)
}
console.log(tambah(1, 2, 3, 4, 5));

function kali(...kali) {
    let enol = 1
    kali.forEach(a => {
        return enol *= a
    })
    return enol
}
console.log(kali(1, 2, 3, 4, 5));

function bedain(ok, ...semu) {
    return semu.filter(a => typeof a === ok)
}
console.log(bedain('boolean', 12, true, 'rii', true, 'rii', 989))