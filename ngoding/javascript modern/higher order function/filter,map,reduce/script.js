//filter map dan reduce


//for


// const angka=[1,2,3,4,5,-1,-3,-5,9,10,11]
// const newangka=[]
// for(let a=0; a < angka.length ; a++){
//    if(angka[a] >= 3){
//    	newangka.push(angka[a])
//    }
// }
// console.log(newangka)




//filter
//memfilter


// const angka=[1,2,3,4,5,-1,-3,-5,9,10,11]

// const newangka=angka.filter( a => a >= 3)
// console.log(newangka)



//map

//di kali dua
// const angka=[1,2,3,4,5,-1,-3,-5,9,10,11]

// const newangka=angka.map(a => a * 2)
// console.log(newangka)



//reduce

//reduce memiliki dua argument yaitu acumulator dan curent value
//accumulator untuk menambah atau pekalian pemagian dll sedangkan curent value nilai terkini yang sedang di jalnkan seperti ke 1 abis itu 2 ke 3 dan seterusnya

// const angka=[1,2,3,4,5,-1,-3,-5,9,10,11]

// const newangka=angka.reduce((accumulator,curentValue) => accumulator + curentValue)
// console.log(newangka)



// method chaining

//method chaning seperti mengabungkan method pada aray caranya dibawah ini

const angka=[1,2,3,4,5,-1,-3,-5,9,10,11]

const newangka=angka.filter( a => a >= 3)
  .map( a => a * 4).map(a => a / 2)
  .reduce((acc,cur) => acc + cur)

console.log(newangka)