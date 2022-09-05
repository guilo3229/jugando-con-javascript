const frutas = []
const fruta = prompt('🍒 Feria Market 🍉 ¿qué fruta desea comprar?')

frutas.push(fruta)

while (confirm('¿Desea agregar otro elemento al 🛒?')) {
    const fruta = prompt('¿qué fruta desea comprar?')
    frutas.push(fruta)
}

console.log('Ustede compró: ')
// for (let fruta of frutas) {
//     console.log(fruta)
// }
// recibe una funcion que va a retomar un elemento, se puede poner el index detro del for each
frutas.forEach((fruta) => console.log(fruta))