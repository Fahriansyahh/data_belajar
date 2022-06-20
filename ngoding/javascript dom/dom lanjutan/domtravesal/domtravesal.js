// macam macam traversal
/*
1.parentNode (simpul induk) node
2.parentElement(elemen induk) element
3.nextSibling
4.nextElementSibling
5.previousSibling
6.previousElementSibling
*/


//parentNode (simpul induk) node
//parent node akan mencari parentnya
const nama=document.querySelector(".nama")
console.log(nama.parentNode)

//parentELement element
//parentElement akan mencari parentnya
console.log(nama.parentElement)
//nextSibling node
//karena next sibling bersifat node bukan element dia akan mencari yang benar benar di samping nya seperti spasi
console.log(nama.nextSibling)

//nextElementSibling element
//next sibling akan mencari element adik sodara kandungnya dia bersifat element jadi mencari element bukan node
console.log(nama.nextElementSibling)

//previousSibling node
//dia sama sifat nya seperti nextSibling tapi dia mencari kaka sodara kandung
console.log(nama.previousSibling)

//previousElementSibling element
//dia sama sifatnya seperti nextElementSibling cuman yang ini mencari kaka kandungnya
console.log(nama.previousElementSibling)





 //cara awal
 // const tmblX=document.querySelector(".close")

 // tmblX.addEventListener("click",function(){
 // 	const hapus=document.querySelector(".card")
 //    const container =document.querySelector(".container")
 // 	container.removeChild(hapus)
 // })
 //cara awal

//cara kedua
// const tmblX=document.querySelectorAll(".close")
// for(let i=0;i<tmblX.length;i++){

// tmblX[i].addEventListener("click",function(){
//   const hapus=document.querySelector(".card")
//     const container =document.querySelector(".container")
//      container.removeChild(hapus)    
// })
// };

//cara akhir
// code ketiga

// const tmblX = document.querySelectorAll(".close")
// tmblX.forEach(function(e){
//     e.addEventListener("click",function(){
//         const hapus=document.querySelector(".card")
//     const container =document.querySelector(".container")
//      container.removeChild(hapus)
//       alert("sudah di apus")
//     })

//akhir ketiga



const tmblX = document.querySelectorAll(".close")
tmblX.forEach(function(e){
    e.addEventListener("click",function(){
        e.parentElement.parentElement.removeChild(e.parentElement)
    })    
})


const tombolbtn=document.querySelectorAll(".tombol")
tombolbtn.forEach(function(event){
    event.addEventListener("click",function(){
       event.parentElement.removeChild(event.previousElementSibling)

    })
})



