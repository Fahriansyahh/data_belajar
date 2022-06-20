/*selection adalaha cara menyeleksi html yang nantinya akan di masukan kedalam javascipt melalui dom tree 

berikut ini jenis jenis selection

1.getElementById yaitu elemen yang bersifat element 
2.getElementByTagName yaitu bersifat htmlcolection
3.getElementByClassName yaitu bersifat 
html colecction
4.querry selector yaitu bersifat element 
5.querry selector all yaitu bersifat html colecction*/




//document.getElementById



/*getElementById ini berdasarkan id pada html dan dia bersifat element'

getElementById ini hanya bisa di gunakan oleh satu node */
const judul=document.getElementById('judul')
judul.style.color ="red"
judul.style.backgroundColor ="black"
judul.style.textShadow ="5px 5px 3px darkgrey"
judul.innerHTML="M.fahriansyah"



// document.getElementsByTagName('')



/*getElementByTagName adalah alat untuk menselection tag tag pada html yang nantinya akan di manipulasi oleh javasript melalui dom tree atau pohoin bercabang  getElementByTageName memiliki sifat html colection ya itu node yang hanya bernilai elemen cth p a h1 img*/

const p=document.getElementsByTagName('p')
for(let i=0;i<p.length;i++){
  p[i].style.backgroundColor ="darkgrey"	
}

const h1=document.getElementsByTagName("h1")
h1[0].style.fontSize ="60px"


//document.getElementByClassName

const p1=document.getElementsByClassName('p1')[0]
p1.innerHTML ="ini di buat dengan js"

/*
berikut pendalaman javascript menegenai dom tre atau cabang pohon
1.dom memiliki banyak tipe contoh tipe nya adalah
a.document yaitu document
b.element yaitu h1 p dll
c.text yaitu tulisan" yang ada pada html cth tulisan yang ada didalam p

2.tipe tipe yang di miliki dom
a.nodelist yaitu sesuatu selection yang memanggil element dan text dll
b.htmlcollection yaitu sesuatu yang hanya memanggil element saja

3.penulusuran dom
a.root node
yaitu document
b.parent node
yaitu body yang di dalamnya memiliki p h1 dll
c.child node yaitu h1 yang memiliki induk body 


*/

const li=document.getElementsByTagName('li')
for(let y=0;y<li.length;y++){
  li[y].innerHTML ="hallo dunia"
  li[y].style.color="red"
  li[y].style.transform ="translate(10px,20px)"
}



