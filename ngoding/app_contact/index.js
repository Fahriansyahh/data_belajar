
const dataUser = require('./contacts')
//! perhatikan yargs ini satu persatu dan fungsinya jika suatu saat lupa
//!pelajari cara kerja modul ini
const yargs = require('yargs')
//!cara pemakaian yargs sederhana
// console.log(yargs.argv);
//? jika kita tuliskan di termminal node index add --nama="fahri" maka akan memunculkan nama dan si add yang ketika ketikan ini perintahnya dan --nama ="" adalah isinya

//! cara pemakaian yargs mengunakan command
yargs.command({
    command: 'add',
    describe: 'masukan nama anda',
    //!builder bisa di jadikan arow function atau object builder berfungsi untuk menyimpan data yang nantinya akan di exekusi oleh handler
    builder: {
        //! buka dokumentasi yargs di bagian dogs lalu cari option untuk mendapatkan fungsi fungsi dibawah
        nama: {
            describe: 'masukan nama anda ',
            demanOption: true,
            type: 'string'
        },
        email: {
            describe: 'masukan email anda ',
            demanOption: true,
            type: 'string'
        },
        nohp: {
            describe: 'masukan email anda ',
            demanOption: true,
            type: 'string'

        },
    },
    //! handler harus memiliki parameter argv untuk memangil argv nya
    handler(argv) {
        return dataUser.data(argv.nama, argv.email, argv.nohp)
    }
})
//! parse untuk mengubah string menjadi object
yargs.parse()



// const main = async () => {
//     const nama = await dataUser.pertanyaan('masukan nama anda : ')
//     const email = await dataUser.pertanyaan('masukan email anda : ')
//     const noHP = await dataUser.pertanyaan('masukan no hp anda : '
//     )
//     dataUser.data(nama, email, noHP)
// }
// main()
//! ini awal nya

// rl.question('masukan nama anda : ', (nama) => {
//     rl.question('masukan no tlp anda : ', (tlp) => {
//         const contact = { nama, tlp }
//         const file = fs.readFileSync('data/contact.json', 'utf-8')
//         const contacts = JSON.parse(file)
//         contacts.push(contact)
//         //! untuk mengubah contact menjadi string
//         fs.writeFileSync('data/contact.json', JSON.stringify(contacts))
//         rl.close()
//     })
// })