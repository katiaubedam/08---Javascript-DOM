let num1 = parseInt(prompt("Dime un número"))
let num2 = parseInt(prompt("Dime otro número"))

let div = document.createElement('div')

let p1 = document.createElement('p')
let p2 = document.createElement('p')
let p3 = document.createElement('p')
let p4 = document.createElement('p')
let p5 = document.createElement('p')

p1.innerHTML = `${num1} + ${num2} = ${num1 + num2}`
p1.style.color = "PapayaWhip"
p1.style.backgroundColor = "DarkOliveGreen"

p2.innerHTML = `${num1} - ${num2} = ${num1 - num2}`
p2.style.color = "DarkCyan"
p2.style.backgroundColor = "LightCyan"

p3.innerHTML = `${num1} * ${num2} = ${num1 * num2}`
p3.style.color = "	RebeccaPurple"
p3.style.backgroundColor = "LightBlue"

p4.innerHTML = `${num1} / ${num2} = ${num1 / num2}`
p4.style.color = "Navy"
p4.style.backgroundColor = "Cornsilk"

p5.innerHTML = `${num1} % ${num2} = ${num1 % num2}`
p5.style.color = "Maroon"
p5.style.backgroundColor = "LavenderBlush"

let divElement = document.body.appendChild(div)

divElement.appendChild(p1)
divElement.appendChild(p2)
divElement.appendChild(p3)
divElement.appendChild(p4)
divElement.appendChild(p5)