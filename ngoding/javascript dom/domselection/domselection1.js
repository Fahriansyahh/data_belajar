// document.querySelector

/*
querySelector bersifat element atau bersifat hanya menselection satu elemen saja */
const p4=document.querySelector("section#b p")
p4.style.color ="red"

const li2=document.querySelector("section#b ul li:nth-child(2)")
li2.innerHTML="ini dibuat oleh javascirpt"

// document.querySelectorAll

/*document.quertSelectorAll
document query selector memiliki node list atau dia bisa di pangiil lewat element dan tet sedangkan html colection dia hanya bisa di pangiil dengan element */

const li3=document.querySelectorAll("#b ul li")
for(let i=0;i<li3.length;i++){
li3[i].style.fontSize ="20px"
li3[i].style.backgroundColor ="red"
}

const a=document.getElementsByTagName("a")
a[0].innerHTML="hallo muhammad fahriansyah"

//cara mengannti rootnode



/*cara mengganti root node mengunakn logika dan harus memperhatikan masing masing fungsi dari selector tersebut masing masing selector di gunakan sesuai kondisi */

const secti=document.getElementById("a")
const aa=secti.getElementsByTagName("a")[0]
const pa=secti.querySelectorAll("p")
aa.style.backgroundColor="orange"
for(let u=0 ; u<pa.length;u++){
pa[u
].style.backgroundColor="red"
pa[u].style.fontFamily ="serif"
}

const secitonB=document.getElementById('b')
const pb=secitonB.getElementsByTagName('p')
pb[0].style.backgroundColor="blue"

/*jenis jenis selection 

1.getElementById bersifat element
2.getElementsByTagName bersifat HTMLcolection
3.getElementsByclassName bersifat HMTLcolection
4.querySelector bersifat element
5.querySelector bersifat nodelist

cara kerja sifat selection
1.element artinya hanya bisa menseleksi satu element html
2.html colection hanya bisa mengseleksi tag tag html yang memiliki nilai element selain itu tidak bisa
3.node list bisa  menseleksi tag html yang memiliki nilai element maupun nilai text


*/


/*jika suatu saat lupa pembahssan ini ada di seri dom selection part 2*/

