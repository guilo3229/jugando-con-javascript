
const gato ={
    nombre: "valiente",
    duerme: true,
    edad: 10,
    enemigos:["agua", "perros"],
    // los get no reciben parametros nada dentro de los parentesis
    get nombreMayuscula(){
        return this.nombre.toUpperCase()
    },
    // El set toma un solo parametro y puede modificar los valores que tiene esa propiedad
    set agregarEnemigo(nuevoEnemigo){
        this.enemigos.push(nuevoEnemigo)
    }
    
}

// para llamar al set es un poco diferente como veremos
gato.agregarEnemigo = "batman"
console.log(gato)

console.log(gato.nombreMayuscula)

// get : Enlaza la propiedad de un objeto con una función que será llamada cuando la propiedad es buscada.
// set : La sintaxis set asocia la propiedad de un objeto a una función que será llamada cuando haya un intento de asignar valor a esa propiedad.
// GET: Tenga en cuenta lo siguiente al trabajar con la sintaxis get:

// Debe tener exactamente cero parametros.
// No debe haber múltiples getters para una misma propiedad.
// SET: Tenga en cuenta lo siguiente al trabajar con setters:

// Debe tener exactamente un parámentro