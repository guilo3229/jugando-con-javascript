
const gato ={
    // nombre: "valiente",
    duerme: true,
    edad: 10,
    enemigos:["agua", "perros"],
    otros:{
        amigos:["cobarde", "timido", "pegajoso"],
        favoritos:{
            fria: "salmon",
            caliente: "pollo",
        }
    }
}


const{amigos: amigosArray} = gato.otros;
// destructuracion de un array, uso corchetes porque es un array, definimos los elementos que queremos dentro de los corchetes
// es decir sacamos la propiedad a amigosArray, esto es un array que sacaremos, lo que queramos en una constante y despues invocamos dicha constante con el console si queremos uno o varios elementos de esta ultima
const[aUno, aDos, aTres, aCuatro = "no existe"] = amigosArray
console.log(aUno,aDos);
