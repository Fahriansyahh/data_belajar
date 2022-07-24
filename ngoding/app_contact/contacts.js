const fs = require('fs')
const validator = require('validator')
const chalk = require('chalk')

if (!fs.existsSync('./data')) {
    fs.mkdirSync('data')
}
if (!fs.existsSync('./data/contact.json')) {
    fs.writeFileSync('./data/contact.json', '[]', 'utf-8')
}


const data = (nama, email, noHP) => {
    const contact = { nama, email, noHP }
    const file = fs.readFileSync('data/contact.json', 'utf-8')
    const contacts = JSON.parse(file)
    const duplikat = contacts.find((contact) => contact.nama === nama)
    if (duplikat) {
        console.log(chalk.red('nama anda sudah terdaftar'));
        return false
    }
    if (!validator.isEmail(email)) {
        console.log(chalk.red('email ini salah'));
        return false
    }
    if (!validator.isMobilePhone(noHP, 'id-ID')) {
        console.log(chalk.green('nomor anda salah'));
    }
    contacts.push(contact)
    //! untuk mengubah contact menjadi string
    fs.writeFileSync('data/contact.json', JSON.stringify(contacts))

}
module.exports = { data }