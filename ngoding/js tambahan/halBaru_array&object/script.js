
//! cara baru exekusi array
const arr = ['1', 'dasdas', 'efe']
arr.push('joi')
//?cara menganti array index keberaapa
arr[0] = 'yes'
//? cara menghapus array
delete arr[2]
console.table(arr);

//! cara baru exekusi object
const obj = {}
//! cara menambahkan object dan menghapus object
obj['fahri'] = 'fahri'
obj['iyan'] = 'iyan'
obj['rian'] = 'rian'
console.table(obj);
//!cara mengahapus sama dengan array
delete obj['iyan']
console.table(obj);
console.log(obj.rian);

//! cara baru memangiil obj

const objt = {
    'nama': 'fahri',
    kelas: 'mm',
    namaPangilan: 'rian',
    'kota manah': 'jakarta'
}
//!memangil dengan cara string ini memungkinkan nama obj ada spasi nya cth di bawah ini
console.log(objt['nama']);
console.log(objt['kota manah']);

//! jika di atas adalah cara str di bawah cara biaasa
console.log(objt.kelas);
console.log(objt.namaPangilan);