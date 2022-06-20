/*manipulation node
manipulasi pada dom ada dua yaitu
manipulation element dan manipulaiton pada node

jenis jenis manipulation pada node

1.document.createElement(pencipttaan elemen)
2.document.createTextnode(penciptaan text node)
3.node.appendChild(menambahkan child)
4.node.insertBefore(sisipkan sebelum)
5.parentnode.removeChild(menghapus anak)
6.parentnode.replaceChild(mengganti anak)

*/








// createElement(pembuatan element) creatTextNode(pembuatan text node) & appendChild(menambahkan anak)


//masa pembuataan elemen dan text
const pBaru =document.createElement("p")
const textP=document.createTextNode("ini dibuat dengan manipulation")
//masa penyatuan elemen dan text
pBaru.appendChild(textP)
//masa pemasangan elemen yang sudah di susun
const sectionA=document.getElementById('a')
sectionA.appendChild(pBaru)



//yang di bawah cuma contoh kalo yang di atas sudah paham

const pBaru2 = document.createElement("a")
const textp2 =document.createTextNode("klik untuk ke facebook")
pBaru2.appendChild(textp2)

const sectionB=document.querySelector("section#b")
sectionB.appendChild(pBaru2)
const atributA=sectionB.querySelector("a")
atributA.setAttribute("href","https://www.facebook.com/campaign/landing.php?&campaign_id=1661741489&extra_1=s%7Cc%7C513502597352%7Ce%7Cfacebook%7C&placement=&creative=513502597352&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D1661741489%26adgroupid%3D65609010858%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D9056654%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=EAIaIQobChMIlo_j67qt9wIVxZhmAh0IzgyyEAAYASAAEgJbkPD_BwE")


//cara mengunakan insertBefore (sisipkan sebelum)




//pembuatan dan penyatuan dari sini
const liBaru=document.createElement("li")
const liText=document.createTextNode("list ini dibuat dengan manipulation pada dom menggunakan javascript")
  liBaru.appendChild(liText)
//sampai sini
//selanjutnya
//ketika mengunakan insert before carikan dulu parent node dari node yang mau di sisipkan pada kasus ini ul adalah parent dari li
 const ul=document.querySelector("ul")
 //lalu bikin li2 ini untuk di jadikan before nanti
 const li2=ul.querySelector("li:nth-child(2)")
 //lalu masukan parent nodenya ul lalu lakukan object insertbefore lalu akan di eksekusi nantinya. masukan li baru untuk apa yang mau disisipkan(insert) dan li2 untuk sebelum(before)
   ul.insertBefore(liBaru,li2)

//yang dibawah cnth insert before

const pbaru3=document.createElement("p")
const textp3=document.createTextNode('paragraf ini dibuat dengan dom')

pbaru3.appendChild(textp3)

const p2=document.getElementsByClassName('p2')[0]
sectionA.insertBefore(pbaru3,p2)





//removeChild(hapus anak)



//karena removeChild untuk menghapuus jadi dia tidak membutuhkan pembuatan dan penyatuan mengunakan. createElement(pembuatan element) createTextNode(pembuatan text node) & appendChild(menambahkan anak)

//arahkan node manah yang mau di apus
const p3=sectionA.getElementsByClassName('p3')[0]
//lalu gunakan parent node dan arahkan exekusinya ke node yang mau di hilangkan
sectionA.removeChild(p3)







//spliceChild(mengganti anak)


const h2=document.createElement("h2")
const h2text=document.createTextNode("judul dibuat javascript dom")
   h2.appendChild(h2text)

  p4=sectionB.getElementsByTagName('p')[0]

sectionB.replaceChild(h2,p4)


//gabut

const item1=ul.querySelector("li")
ul.removeChild(item1)

const h3=document.createElement("h3")
const h3text=document.createTextNode("telusuri")

h3.appendChild(h3text)

const link=sectionB.getElementsByTagName("a")[0]

sectionB.insertBefore(h3,link)











