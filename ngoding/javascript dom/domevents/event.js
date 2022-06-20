//events(peristiwa)
/*evenst terbagi menjadi dua
event handler(pengendali acara) & addEventListener(tambahkan pendengar acara)


event handler terbagi menjadi dua
1.inline html atribute(jalur html di atribute) untuk no 1 sangat tidak di sarankan karena mengubah code html di dalamnya dan dicampur adukkan oleh javascript
2.elemen method 
*/
//berikut contoh pemakaian jenis jenis event


//event handler

// A.inline html atribute

const p2=document.querySelector(".p2")
//event untuk inlene html atribute ada di text html paragraf dua yang memiliki class p2
function warna(){
	p2.style.backgroundColor="red"
}

//B.elemen method

const p3=document.querySelector(".p3")
function warna2(){
	p3.style.backgroundColor="darkgrey"
	p3.style.color="white"
  const tambah=document.createElement("p")
  const tambahtext=document.createTextNode("ini sedang ada diseri even")
    tambah.appendChild(tambahtext)
   const sectionA=document.querySelectorAll("section#a")[0]
   sectionA.appendChild(tambah)

}
// ini adalah event elemen tidak usa memakai titik karena warna adalah nama dari function
p3.onclick=warna2




//addEventListener

const p4=document.querySelector("section#b p")
//dibawah ini jenis source code addEventListener
p4.addEventListener("mouseenter",function(){
	p4.style.transition="1s"
	p4.style.backgroundColor="blue"
	p4.style.transform="translate(13px,13px)"
});
p4.addEventListener("mouseleave",function(){

	p4.style.backgroundColor="white"
	p4.style.transform="translate(-13px,-13px)"
});



const ul=document.querySelectorAll("section#b ul")
function perbesar(){
	ul[0].style.transition="1s"
	ul[0].style.backgroundColor="red"
	ul[0].style.transform="rotate(360deg)"
}
ul[0].onclick=perbesar




















