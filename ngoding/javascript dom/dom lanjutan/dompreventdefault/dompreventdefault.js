//preventDefault untuk memberhentikan ancher href=""


const close = document.querySelectorAll(".close")
//parameter e di ambil dari close
close.forEach(function(e){
	//sedangkan parameter el di ambil dari e yang dikhususkan uncuk event click
	e.addEventListener("click",function(el){
	   //kenapa ini di ambil dari e bukan el karena yang e langsung mengarah ke close
		e.parentElement.parentElement.removeChild(e.parentElement)
		//kenapa ini di ambil dari el karena kita mao memberhentikan preventDefault saat di klik 
		el.preventDefault()
		
	})

})