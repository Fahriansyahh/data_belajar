const express = require('express')
const { arrayBuffer } = require('stream/consumers')
const app = express()
const morgan = require('morgan')


//! belajar mengenai view engine
//! view engine adalah template yang ada pada express js
//! pada kali ini kita beljar template engine ejs

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(morgan('dev'))
app.use((req, res, next) => {
    let jam = new Date()
    console.log(`waktu : ${jam.getHours()} : ${jam.getMinutes()} : ${jam.getSeconds()}`)
    next()
})

app.get('/', (req, res,) => {

    res.send('jalan kan')

})
app.get('/jajal/:id?', (req, res) => {
    res.send(` 
    ini adalah params ke :${req.params.id} yang memiliki query ${req.query.p}`)
})
app.get('/mahasiswa', (req, res) => {
    const mhs = [{
        nama: 'fahri',
        kelas: '12',
        umur: '19',
        jurusan: 'multimedia'


    }, {
        nama: 'iyan',
        kelas: '12',
        umur: '19',
        jurusan: 'multimedia'


    }, {
        nama: 'rian',
        kelas: '12',
        umur: '19',
        jurusan: 'multimedia'


    }]

    res.render('mahasiswa', { mhs, judul: 'web mahasiswa' })

})
app.get('/contact', (req, res) => {

    res.render('contact', { judul: 'web contact' })
})

app.get('/index', (req, res) => {
    let jam = new Date()
    let hari = jam.getHours()
    let menit = jam.getMinutes()
    const waktu = "jam :" + hari + ":" + menit
    res.render('index', {
        judul: 'web index',
        waktu
    })

})

app.use('/', (req, res) => {
    res.send('tidak ada halaman ini')
}).listen('3000', () => {
    console.log('login to browser');
})

