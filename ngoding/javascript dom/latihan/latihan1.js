//tombol ubah warna
const tmblUbah=document.getElementById('tmblUbah')
  function ubhwarna(){
     document.body.style.backgroundColor="red" }
     tmblUbah.onclick=ubhwarna
//akhir tombol ubah warna

//tombol acak
const tmblacak=document.createElement('button')
const texttmblacak=document.createTextNode('tombol acak')
tmblacak.appendChild(texttmblacak)
tmblacak.setAttribute("type","button")
tmblacak.style.margin="2px"
tmblUbah.after(tmblacak)
//membuat tombol acak

tmblacak.addEventListener("click",function(){
  const r=Math.round(Math.random() * 255 + 1)
    const g=Math.round(Math.random() * 255 + 1)
      const b=Math.round(Math.random() * 255 + 1)
  console.log(r)
  document.body.style.backgroundColor="rgb("+ r +","+ g +","+ b +")"
})
//akhir dari tombol acak
//input range

const imerah=document.querySelector("input[name=imerah]")
const igreen=document.querySelector("input[name=igreen]")
const iblue=document.querySelector("input[name=iblue]")
imerah.addEventListener("input",function(){
  const r=imerah.value;
  const g=igreen.value;
  const b=iblue.value
  document.body.style.backgroundColor="rgb("+r+","+g+",100)"
})
igreen.addEventListener("input",function(){
  const r=imerah.value;
  const g=igreen.value;
  const b=iblue.value;
  document.body.style.backgroundColor="rgb("+r+","+g+",100)"
})

iblue.addEventListener("input",function(){
  const r=imerah.value;
  const g=igreen.value;
  const b=iblue.value;

  document.body.style.backgroundColor="rgb("+r+","+g+","+b+")"
})

//akhir dari input range

//mousemove body

document.body.addEventListener("mousemove",function(){
   const sumbuX= Math.round((event.clientX / window.innerWidth) * 255)
   const sumbuY= Math.round((event.clientY / window.innerHeight) * 255)
   document.body.style.backgroundColor="rgb("+sumbuX+","+sumbuY+",100"
})


document.body.addEventListener("mousemove",function(){

  const garisX=Math.round((event.clientX / window.innerWidth) * 255)
  const garisY=Math.round((event.clientY / window.innerHeight) * 255)
  const h1=document.getElementsByTagName('h1')[0]
  h1.style.color="rgb("+garisY+","+garisX+",100)"
  tmblUbah.style.backgroundColor="rgb("+garisY+","+garisX+",100)"
    tmblacak.style.backgroundColor="rgb("+garisY+","+garisX+",100)"
})


