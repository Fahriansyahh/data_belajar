
//pembagian pada array

const salam=['hallo','hay','apaKabar']
//nama bebas
const [a,b,c]=salam
console.log(c)

//langsunf melakukan 
const [one,,...re]=['1','2','3','5','7']
console.log(re)


//pembagian pada object
const mhs={
	nama:'fahri',
	kelas:12,
	umur:17,
	tingi:"180cm",
	jurusan:'multimedia'
}
//melakukan rest paremeter ada object
const {nama:j,kelas:k,...nilai}=mhs
console.log(nilai)

const {nama:saya,...value}={
	nama:'fahri',
	kelas:12,
	umur:17,
	tingi:"180cm",
	jurusan:'multimedia'
}
 console.log(value)
//ketika email tidak ada akan digantikan
const {tlp,email:plplp='fahri@gmail.com',pw}={
	tlp:'0898887',
	pw:'sadsa'
}
console.log(plplp)

//memnagil object pada function

const mahasiswi={
	dina:'jakarta',
	rara:'palembang',
	indi:'surabaya'
}
function getMhs({...value}){
	return value
}
console.log(getMhs(mahasiswi))


// //swap
// let lagu='1'
// let agu='2'
// console.log(lagu)
// console.log(agu)
// [lagu,agu] = [agu,lagu];
// console.log(agu)
// console.log(lagu)




function coba(){
	return ['hallo','hay']
}
let [kol, lol]=coba()
console.log(kol)




function fahri(){
	let {nama,umur,tingi}={
		nama:'fahri',
		umur:19,
		tingi:180
	}
console.log(`hallo nama saya ${nama}
	umur saya ${umur} tingi saya ${tingi}`)
}
const panngil=fahri()

