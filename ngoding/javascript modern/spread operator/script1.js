

const li = document.querySelectorAll('.oke')
//? const list = [...li].map(a => console.log(`${a.textContent}`))

const judul = document.querySelector('h1')

const ubh = [...judul.textContent].map(a => `<span>${a}</span>`).join('')

judul.innerHTML = ubh