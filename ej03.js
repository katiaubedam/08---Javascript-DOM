let nombre = prompt("Dime tu nombre")
let edad = parseInt(prompt("Dime tu edad"))

let contenido = document.createElement('p')

// Opción con if

if (edad >= 18) {
    contenido.innerText = `Holaaaa, ${nombre}, eres mayor de edad`
} else {
    contenido.innerText = `Holaaaa, ${nombre}, eres menor de edad`
}

// Opción con switch

switch (edad) {
    case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17:
        contenido.innerText = `Holaaaa, ${nombre}, eres menor de edad`
        break
    
    default:
        contenido.innerText = `Holaaaa, ${nombre}, eres mayor de edad`
}

// Opción con ternario

contenido.innerText = edad >= 18 ? `Holaaaa, ${nombre}, eres mayor de edad` : `Holaaaa, ${nombre}, eres menor de edad`


document.body.appendChild(contenido)