// Crud
// C-> create
// R->Read
// U->Update
// D->Delete
const gato ={
nombre: "valiente",
duerme: true,
edad: 10,
enemigos:["agua", "perros"]

}

// comprobar si existe o no la propiedad de un objeto
// .hasOwnProperty(propname) determina  si un objeto tiene una propiedad con ese nombre. .hasOwnProperty() devuelve true o false si se encuentra la propiedad o no.
// Parece ser que si es true en un if con una funcion como por ejemplo en este caso hasOwnProperty entra dentro del if si es false no lo realice teer en cuenta esto, es decir esta diciendo que si existe el nombre lo actualiza a flojera
// recuerda el if siempre en minusculas si no se puede joder y con las demas funciones de serie igual cuidado!!
if (gato.hasOwnProperty ("nombre")){
    gato.nombre = "flojera"
}
console.log(gato)
