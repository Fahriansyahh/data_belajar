//penjelasan tombol warna
//awal dari tombol
const tmblbutton=document.getElementById('tmblbutton')

tmblbutton.addEventListener("click",function(){
	//event ini mengubah body 
	document.body.style.backgroundColor="red"
})
//

const tmblacak=document.createElement("button")
const textacak=document.createTextNode("tombol acak")
tmblacak.appendChild(textacak)
tmblacak.setAttribute("type","button")
tmblacak.style.margin="2px"
//after ini membuat sesudah tombolbutton fungsinya sama seperti insertBefore
tmblbutton.after(tmblacak)
  
tmblacak.addEventListener("click",function(){       //math random ini adalah math interger javascript yang berfungsi untuk memberi nilai random sedang math round menjadikan nilai random itu menjadi bilangan bulat
	const r=Math.round(Math.random()* 255 + 1)
                          // hal ini di lakukan agar nilai yang di keluarkan tidak kurang dan lebih dari 255	 
	const g=Math.round(Math.random()) * 255 + 1
		const b=Math.round(Math.random()) * 255 + 1
		//lalu masukan nilainya kedalam rgb
	document.body.style.backgroundColor="rgb("+ r +","+g+","+b+")"
})
//akhir dari tombol
//input

const imerah=document.querySelector("input[name=imerah]")
//lihat quey selector tanda kurung di dalam menandakan atribute di dalamnya bisa di pakai sebagai selection
const ihijau=document.querySelector("input[name=ihijau]")
const ibiru=document.querySelector("input[name=ibiru]")

imerah.addEventListener("input",function(){
//di bawah ini membuat value yang sudah di min dan max di source html lihat cource input html	
   const r=imerah.value;
   const g=ihijau.value;
   const b=imerah.value;
document.body.style.backgroundColor="rgb("+r+","+g+","+b+")"
})

ihijau.addEventListener("input",function(){
   const r=imerah.value;
   const g=ihijau.value;
   const b=imerah.value;
document.body.style.backgroundColor="rgb("+r+","+g+","+b+")"
})

ibiru.addEventListener("input",function(){
   const r=imerah.value;
   const g=ihijau.value;
   const b=ibiru.value;
document.body.style.backgroundColor="rgb("+r+","+g+","+b+")"
})

//akhir input
//mousemove jenis event unutk mengatur mouse kita posisinya ada dimana
document.body.addEventListener("mousemove",function(){
	//event clientx dan clienty untuk mengatur sumbu horizontal dan vertikal 
	const sumbuX = Math.round((event.clientX / window.innerWidth) * 255 )
	//windowiner untuk mengukur ukuran dari document
	const sumbuY = Math.round((event.clientY / window.innerHeight) * 255 )
	document.body.style.backgroundColor="rgb("+sumbuX+","+sumbuY+",100)"
})



/*materi materi di atas banyak hal yang pentinng hal yang harus di pelajari adalh membuat website di ngobar unpas dan pelajari semua hal yang berguna*/

