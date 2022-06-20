

// const close =document.querySelectorAll(".close")

// close.forEach(function(e){
// 	e.addEventListener("click",function(el){
// 		e.parentElement.parentElement.removeChild(e.parentElement)
// 		el.preventDefault()
// 		el.stopPropagation()
// 	})
// })

// const card = document.querySelectorAll(".card")
// card.forEach(function(e){
// 	e.addEventListener("click",function(){
// 		alert("oke")
// 	})
// })


//eventBUbling
//event bubling akan menjalannkan sesuatu di luar elemen pembungkusnya cth seperti h1 dan div jika h1 di berikan event dan pembungkusnya div diberikan event juga maka itu akan mnjadi maslah ketika ingin menjalankan h1 karena otomatis element pembungkusnya akan ngikut kedalam h1 yang ingin di jalankan untuk menangngani ini bisa menggunakn method stopPropagation

const contain=document.querySelector(".container")
contain.addEventListener("click",function(e){
	if(e.target.className == 'close'){

       e.target.parentElement.parentElement.removeChild(e.target.parentElement)
       //kedua method dibawh  penting
       e.preventDefault()
       e.stopPropagation()
	}
})
contain2=document.querySelector(".container")

contain.addEventListener("click",function(event){
	if(event.target.className == 'card'){
	   alert("halo")
	}
})

const tombol=document.querySelectorAll(".tombol")
tombol[0].style.width="50px"
tombol[0].style.height="50px"

tombol.forEach(function(e){
	e.addEventListener("click",function(event){
    e.style.transition="1s 1s"
		if(event.target.className == "tombol"){
		 e.parentElement.removeChild(e.previousElementSibling)
        e.style.marginLeft="20px"	
		}
       
	})
})