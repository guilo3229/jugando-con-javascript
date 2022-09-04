const frutas=[]

const fruta = prompt ("bienvenido al mercado que tipo de fruta desea?")
frutas.push(fruta)
console.log(`compraste:  
${fruta}`)

while(confirm("¿desea agregar otro elemento al carrito?")){
    const fruta = prompt("¿Que fruta desea comprar?")
    frutas.push(fruta)
    console.log (fruta)
}
