// //tag template literals


// const nama='fahri'
// const umur =23
// //untk menamplkan cont lakukan titik3 dan nama parameternya  

// function sayHello(str,...value){
// 	let i=``
// 	str.forEach((a,b) => i+= `${a}${value[b] || ``}`)
// 	return i
// }


// const salam =sayHello`halo nama saya ${nama} saya sekarang berumur ${umur}`
// console.log(salam)


//tag template literals


// const nama='fahri'
// const umur =23
// //untk menamplkan cont lakukan titik3 dan nama parameternya  

// function sayHello(str,...value){          
//     return str.reduce((a,b,c) =>{
//        return`${a}${b}<span class="hl">${value[c] || ``}</span>`
//     },'')

// }

// const salam =sayHello`halo nama saya ${nama} saya sekarang berumur ${umur}`
// document.body.innerHTML=salam


 
let name =['fahri','iyan','yanto','rian']
let tingi=[160,150,160,190]



for(let a=3;a<name.length;a++){
let prom =prompt(`masukan nama`)

let promp =prompt(`masukan tinggi badan`)  
   if(prom){
name.push(prom)
tingi.push(promp)
}
}

const oke =name.map((a,b) => `<li>nama saya adalah <span class='hl'>${a}</span> tinggi saya <span class='hl'>${tingi[b]}</span></li>`)




document.body.innerHTML='<ol>'+oke+'</ol>'



