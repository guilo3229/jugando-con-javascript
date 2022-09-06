
const gato ={
    nombre: "valiente",
    duerme: true,
    edad: 10,
    enemigos:["agua", "perros"]
}
// destructuring es  para hacer esta operacion de aqui abajo de manera mucho mas sencilla
const nombreGato = gato.nombre

const{ nombre: nombreSuperGato, duerme, edad} = gato
console.log(nombreSuperGato, duerme, edad)