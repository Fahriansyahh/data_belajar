//! spread operator

//* memecah interbels pada spread operator

// ? const mhs = ['fahri', 'rian', 'iyan']
//! ketika const mhs1 di console dia tidak memecah karena const hanya menyimpan
//? const mhs1 = [...mhs]
// ? console.log(...mhs);

//*mengabungkan 2 array

//? const mhs = ['fahri', 'rian', 'iyan']
// ?const mhs1 = ['fahri', 'rian', 'iyan']
//! jadi const mhs dan mhs1 di spreed dan akan di gabung jika di console
//? const orang = [...mhs,'juki' ...mhs1]
//? console.log(orang);

//* mengabungkan mengunakn method concat pada array
//? const mhs = ['fahri', 'rian', 'iyan']L
//? const mhs1 = ['fahri', 'rian', 'iyan']
//? const orang = mhs.concat(mhs1)
//? console.log(orang);

//! mengcopy mengunakan spread operator
// ? const mhs = ['fahri', 'rian', 'iyan']
// ? const gab = [...mhs]
//? gab[1] = 'tata'
// ? console.log(gab);
// ? console.log(object);]

//! perbedaan mengunakn copy pada source ini di bawah ini adalah hal yang keliru penjelasanya ada di bawah
//? const mhs = ['fahri', 'rian', 'iyan']
//! berbeda ketika mengunakan ini const org hanya menunjuk mhs bukan mengcopy
//? const org = mhs
//? org[0] = 'fahri'
//? console.log(org);


