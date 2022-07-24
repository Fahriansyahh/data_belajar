//! cara mengunakan nulish operators


//! ini jika mengunakan if biasa jika hasilanya adalah undifened
let cth1;

if (cth1 === undefined || cth1 === null) {
    document.writeln('nama tidak ada')
}
//! ini mengunakan operator nulish
const jwb1 = cth1 ?? "nama belum ada"
document.writeln(`<br> ${jwb1}`)