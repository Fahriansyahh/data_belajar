// cara peratama melakukan masuakan kedalam body html

// const mahasiswa={
// 	nama:`fahri`,
// 	umur:`18`,
// 	jurusan:`teknologi informasi`
// }

// const el = `<div>
//     <h1>Mahasiswa</h1>
//      <ul>
//      <li>nama   :${mahasiswa.nama}</li>
//      <li>umur   :${mahasiswa.umur}</li>
//      <li>jurusan:${mahasiswa.jurusan}</li>
//      </ul>
// </div>`

// document.body.innerHTML=el


//cara kedua melakukan looping

// const mahasiswa=[{
// 	nama:`fahri`,
// 	umur: 18,
// 	kelahiran:`tangerang`
// },
// {
// 	nama:`fahri`,
// 	umur: 18,
// 	kelahiran:`tangerang`
// },
// {
// 	nama:`fahri`,
// 	umur: 18,
// 	kelahiran:`tangerang`
// }
// ]

// const el =mahasiswa.map(mahasiswa => `	<div>
// 	  <ul>
// 	   <li>nama  : ${mahasiswa.nama}</li>
// 	   <li>umur   : ${mahasiswa.umur}</li>
// 	   <li>kelahiran :${mahasiswa.kelahiran}</li>
// 	  </ul>
// 	</div>`)
// document.body.innerHTML=el



//melakukan pengkondisian


// const mahasiswa =[{
// 	nama:`fahri`,
// 	kelas:`multimedia`,
// 	kelulusan:`naik kelas`,
// 	prestasi:`web devalopment`
// },
// {
// 	nama:`iyan`,
// 	kelas:`multimedia`,
// 	kelulusan:`tidak lulus`
// },{
// 	nama:`rian`,
// 	kelas:`multimedia`,
// 	kelulusan:`dikeluarkan`
// }]


// const el = mahasiswa.map(mahasiswa => `<div>
// 	  <ul>
//          <li>nama  :${mahasiswa.nama}</li>
//          <li>kelas :${mahasiswa.kelas}</li>
//          <li>kelulusan : ${mahasiswa.kelulusan}</li>
//          ${mahasiswa.prestasi ?  `<li> prestasi :${mahasiswa.prestasi}</li>`:``}
// 	  </ul>
// 	</div>`)
// mahasiswa.join('')

// document.body.innerHTML=el


// cara ke empat bersarang

const mahasiswa = {
	nama: `fahri`,
	kelas: 12,
	umur: 19,
	alamat: [{
		jl: `untaraya`,
		rtrw: `03 06`,
		kp: `pladen`
	}, {
		jl: `nurul fajri`,
		rtrw: `06 03`,
		kp: `pondok jaya`,
		kota: `tangsel`
	}]
}

let alamatMahasiswa = mahasiswa.alamat.map(alamat => `<h2>Alamat</h2>
	              <ul>
	              <li>jl  : ${alamat.jl}</li>
	              <li>rtrw : ${alamat.rtrw}</li>
	              <li>kp  :${alamat.kp}</li>
	              ${alamat.kota ? `<li>kota  : ${alamat.kota}</li>` : ``}
	              
	              </ul>
	              `)
//! tag baru
const el = /*html*/`<div>
		<h1>mahasiswa</h1>
		<ul>
		<li><h2>nama  :${mahasiswa.nama}</h2></li>
		<li><h2>kelas  :${mahasiswa.kelas}</h2></li>
		<li><h2>umur : ${mahasiswa.umur}</h2></li>
		</ul>	
		${alamatMahasiswa}
</div>`

document.body.innerHTML = el



//jika lupa caranya bisa di lihat di web programing unpas bagian ke2

// :)

