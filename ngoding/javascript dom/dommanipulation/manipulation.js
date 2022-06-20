/*macam macam manipulation
1.innerHTML
2.style.{property css}
3.setAttribute
4.clasList.add*/

//innerHTML
/*inner html adalah sebuah manipulation yang bisa mengannti tulisan tanpa mengganti html dan dia bisa menambahkan tag tag pada html seperti a h1 br

berikut contoh di bawah ini*/

const h1=document.getElementsByTagName('h1')[0]
h1.innerHTML ="<em>hello world<em/>"

//style.property
/*style property adalah manipulattion untuk menambahkan property css dengan javascript tanpa mengubah css */

const p2=document.querySelector("section#a .p2")
p2.style.backgroundColor ="red"


/*Attribute

macam macam Atribute
setAttribute
getAttribute
removeAtrribute
*/


const ko=document.querySelector("h1")
// fungsi setAttribute untuk menambahkan atribut pada elemen html
ko.setAttribute("class","jika")
ko.setAttribute('name','judul')
//getAttribute untuk mengecek apakah ada Attribute di element yang di tuju oleh selection
ko.getAttribute("id")
//removeAttribute adalah untuk menghapus Attribute pada elemen yang di selection
ko.removeAttribute("name")


/*classList
jenis jenis manipulation classList
1.classList.add
2.classList.remove
3.classList.toggle
4.classList.item
5.classList.contains
6.classList.replace

*/

const p3= document.getElementsByClassName('p3')
//classList.add untuk menambahkan class
p3[0].classList.add("saTU")
p3[0].classList.add("dua")
p3[0].classList.add("tiga")
//classList.remove untuk menghapus class
p3[0].classList.remove("tiga")
// fungsi classList.toggle jika dia menambahkan class dan nama clas belum ada maka akan di tambahkan jika nama class suda ada akan di hilangkan 
p3[0].classList.toggle("warna")
//classList.item untuk menumukan class berada di index ke berapa
p3[0].classList.item('2')
//classList.contains untuk menemukan sebuah nama class di suatu elemen  yang di selection
p3[0].classList.contains('saTU')
//fungsi replace untuk mengganti class cth yang tadi class judul menjadi class leader
p3[0].classList.replace("tiga","3")

/*pembahasan ini ada di seri javascript dom part 5*/


const ul=document.querySelectorAll("section#b ul")
ul[0].setAttribute("class","list")
ul[0].classList.add("daftar")

const li1=document.querySelector("section#b ul li:nth-child(1)")
li1.setAttribute("class","list1")

const li2=document.querySelector("section#b ul li:nth-child(2)")
li2.setAttribute("class","list2")

const li3=document.querySelector("section#b ul li:nth-child(3)")
li3.setAttribute("class","list3")

const a=document.getElementsByTagName('a')
a[0].setAttribute("name","hyperlink")



