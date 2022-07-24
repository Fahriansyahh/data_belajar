//! optional chaining padajs hal ini sudah diajarkan pada vidio lanjutan unpas tetapimengenai chaining ini ada hal yang baru dan pentingyang harus di ingatdan dipraktekan!


const obj = {}


//! ini mengunakan cara yang agak panjangdan ribet
if (obj.kota === undefined) {
    document.writeln('ini salah <br>')
}
//! cara mudahnya 
//akan mengahsilkan undefined
let cth = obj?.kota?.nama
const ok = cth ?? 'nama belom di isi'
document.writeln(ok)