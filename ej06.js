const suma = 1
const resta = 2
const mult = 3
const division = 4
const resto = 5

let contenido = document.createElement('div')

let op = parseInt(prompt("Indica qué operación deseas realizar:\n1 - Suma\n2 - Resta\n3 - Multiplicaicón\n4 - División\n5 - Resto"))

if (op > 0 && op <= 5) {
    let num1 = parseInt(prompt("Dime un número"))
    let num2 = parseInt(prompt("Dime otro número"))

    if (op === suma) {
        contenido.innerHTML = `${num1} + ${num2} = ${num1 + num2}`
    } else if (op === resta) {
        contenido.innerHTML = `${num1} - ${num2} = ${num1 - num2}`
    } else if (op === mult) {
        contenido.innerHTML = `${num1} * ${num2} = ${num1 * num2}`
    } else if (op === division) {
        contenido.innerHTML = `${num1} / ${num2} = ${num1 / num2}`
    } else if (op === resto) {
        contenido.innerHTML = `${num1} % ${num2} = ${num1 % num2}`
    }

} else {
    
    contenido.innerHTML = '<p>La operación seleccionada no es válida</p>'

}

document.body.appendChild(contenido)