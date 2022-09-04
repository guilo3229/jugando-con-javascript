const frutas=[]
// En este caso se podia hacer un for of para que leyese despues del while todo y lo fuese mostrando, es decir el primer promt para el primera fruta y luego rellenaba con mas frutas la constante frutas , posteriormente como se ve y luego el for of las iba leyendo y poniendolas en la consola
const fruta = prompt ("bienvenido al mercado que tipo de fruta desea?")
frutas.push(fruta)
console.log(`compraste:  
${fruta}`)

while(confirm("¿desea agregar otro elemento al carrito?")){
    const fruta = prompt("¿Que fruta desea comprar?")
    frutas.push(fruta)
    console.log (fruta)
}
