//constructor function

// const Salam=function(){
// 	this.nama="fahri"
// 	this.umur=19
// 	this.jenis="pria"
// 	this.muncul=function(){
// 		console.log(`nama saya ${this.nama} umur saya ${this.umur} saya seorang ${this.jenis}`)
// 	}

// }
// const fahri = new Salam()


// this mengunakan arowfunction

// arow function tidak memiliki this
/*const Salam =function(){
	//dan dia menemukan this nama dan umur ber beda dengan cth diats kloobject diatas dia akan langsung mencarinya di window
	this.nama="fahri"
	this.umur=19
	//bedakan this arow di bawah ini dia tidak memiliki this tapi dia mencarinya ke atas
	this.sayhelo= () => {console.log(`hallo nama saya ${this.nama} dan umur saya ${this.umur}`)}
}
let fahri =  new Salam()*/

//pengertian this untuk yang memiliki fungsi this

// const mahasiswa={
// 	nama:"fahri",
// 	umur:18,
// 	sayhelo:function(){
// 		console.log(`hallo nama saya ${this.nama} saya berumur ${this.umur}`)
// 	}
// }

// penegertian arow function yang tidak mempunyaikonsep this

// const mahasiswa={
// 	nama:"fahri",
// 	umur:18,
      //hal ini tidak bisa karena tidak ada this di arow function
// 	sayhelo: () => {console.log(`hallo nama saya ${this.nama} saya berumur ${this.umur}`)}
// }


//pengertian arow lebih dalam

// const Salam =function(){
// 	//dan dia menemukan this nama dan umur ber beda dengan cth diats kloobject diatas dia akan langsung mencarinya di window
// 	this.nama="fahri"
// 	this.umur=19
// 	//bedakan this arow di bawah ini dia tidak memiliki this tapi dia mencarinya ke atas
// 	this.sayhelo= () => {console.log(`hallo nama saya ${this.nama} dan umur saya ${this.umur}`)}
//    //kita membutuhkan arow function pada waktu yangtepat bukan asal pakai saja
// 	this.oke =setInterval(() => {
//       console.log(this.umur++)
//       if(this.umur > 50){
//       	clearInterval(this.oke)
//       }
// 	},500)

// }
// let fahri =  new Salam()

//contoh pemakaian arow di dunia nyata




const box =document.querySelector(".box")
box.addEventListener("click",function(a){
   let satu ='size'
   let dua="caption"
 
  if(this.classList.contains(satu)){
  	[satu,dua] = [dua,satu]
  }

	this.classList.toggle(satu)
  setTimeout( () => {
    this.classList.toggle(dua)
  },600)

})








