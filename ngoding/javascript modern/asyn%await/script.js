//! asyn & await bisa di jalankan ketika jenis source code bersifat syncronus


// //? contoh

function Promisee() {
    return new Promise((resolve, reject) => {
        const value = prom()
        if (value == true) {
            resolve([{
                nama: 'fahri',
                sekolah: 'smk letris indonesia 1',
                kelas: 12,
                jurusuan: 'multimedia'
            }, {
                nama: 'iyan',
                sekolah: 'smk letris indonesia 1',
                kelas: 12,
                jurusuan: 'wirausaha'
            }, {
                nama: 'rian',
                sekolah: 'smk letris indonesia 1',
                kelas: 12,
                jurusuan: 'teknik komputer'
            }])
        }
        else {
            reject({
                salah: 'salah'
            })
        }
    })
}
//!fungsi try di jalankan ketika mengunanakan asyn dan await sedangkan jika tidak ada asyn dan await mke .then dan .catch
console.log('buka');
async function munculProm() {
    try {
        const hay = await Promisee()
        hay.forEach((a, b) => {
            + 1
            console.log(`${a.nama} mahasiswa ke ${b + 1}`)
        })
    }
    catch (err) {
        console.error(err);
    }

}
munculProm()

function prom() {
    return confirm('halo')
}
console.log('tutup');

