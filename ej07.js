let header = document.createElement('header')
let main = document.createElement('div')
let footer = document.createElement('footer')

header.id = "header"

let nav = document.createElement('nav')
nav.innerHTML = "<a href='#div1'>Noticia 1</a> <a href='#div2'>Noticia 2</a> <a href='#div3'>Noticia 3</a>"

header.appendChild(nav)

let div1 = document.createElement('div')
div1.id = "div1"
div1.innerHTML = "<h2>Extra! Extra!</h2> <p>Ayuso dice que si hace calor, que te tomes unas cañitas</p>"
let div2 = document.createElement('div')
div2.innerHTML = "<h2>Bombazo informativo!</h2> <p>Microsoft compra todas las empresas del mundo excepto Hacendado</p>"
div2.id = "div2"
let div3 = document.createElement('div')
div3.innerHTML = "<h2>Notición!</h2> <p>Los jueces meterán en la cárcel a las mujeres acosadas para evitar que coincidan en la calle con sus acosadores</p>"
div3.id = "div3"

main.appendChild(div1)
main.appendChild(div2)
main.appendChild(div3)

let divFooter = document.createElement('div')
divFooter.innerHTML = "<a href='#header'>Inicio<a>"

footer.appendChild(divFooter)

document.body.appendChild(header)
document.body.appendChild(main)
document.body.appendChild(footer)