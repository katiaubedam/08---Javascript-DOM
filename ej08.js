let edad = parseInt(prompt("Indica tu edad"))
let carnet
let nombre
let apellidos
let ciudad
let dias
let coste

let contenido = document.createElement('p')

if (edad >= 18) {
    carnet = prompt("¿Tienes carnet de conducir? (Y/N)").toUpperCase()

    if (carnet === "Y") {
        nombre = prompt("Indica tu nombre")
        apellidos = prompt("Indica tus apellidos")
        ciudad = prompt("Indica la Ciudad de recogida")
        dias = parseInt(prompt("Indica los días que vas a alquilar el coche"))

        coste = (150 * parseInt(dias / 7)) + (25 * (dias % 7))

        contenido.innerHTML = `Nombre: ${nombre} ${apellidos}. Ciudad de recogida: ${ciudad}. Días de alquiler: ${dias}. Coste: ${coste}`

    } else {
        contenido.innerHTML = "No puedes alquilar un vehículo si no tienes carnet"
    }

} else {
    contenido.innerHTML = "No puedes alquilar un vehículo si eres menor"
}

document.body.appendChild(contenido)