//  funcion declarativa
function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

console.log(numeroAleatorio(10, 21))

// funcion de azarFlecha, parentesis donde van nuestros parametros y la flechita, ventajas:atajos, sacar el return y quitando las llaves,ya que lo que esta a la derecha de la flechita va a ser retornada,puedes usar aprentesis por comodidad.
// cosas malas , que no podemos acceder "this" o "super"
const azarFlecha = (min,max) =>
     Math.floor(Math.random() * (max - min) + min)


console.log(azarFlecha(1,10))