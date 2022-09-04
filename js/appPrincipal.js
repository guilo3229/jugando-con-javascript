//  funcion declarativa
function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

console.log(numeroAleatorio(10, 21))
// Funcion expresada se guarda en una variable dicha funcion, quiere decir que no se pasa arriba la funcion como las declarativas, es decir sigue el orden como una variable normal es decir qu si hay algo por encima de dichos datos lo ejecutara en orden , no como las dunciones declarativas es decir por lo del Hoisting, es decir una funcion expresada no se puede invocar antes que declararla.
const numAzar = function(min, max){
    return Math.floor(Math.random() * (max - min) + min)

}

console.log(numAzar(100,201))