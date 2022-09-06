
const gato ={
    // nombre: "valiente",
    duerme: true,
    edad: 10,
    enemigos:["agua", "perros"]
}
// destructuring es  para hacer esta operacion de aqui abajo de manera mucho mas sencilla
const nombreGato = gato.nombre
// el objeto debe ir despues del igual y entre las llaves la propiedad que queremos, si tenemos otra constante con el nombre de dicha propiedad 2 puntitos y le ponemos otro nombre para poder invocarla despues y que no de error es decir hacemos un alias
// si no existe la propiedad nombre usamos la propeidad por defecto es decir le decimos a nombre que sacara en consla si no tiene la propeidad dicha y probamos poniendo en texto dicha propiedad
const{ nombre: nombreSuperGato = "sin  nombre", duerme: duermeGato, edad} = gato
console.log(nombreSuperGato, duermeGato, edad)