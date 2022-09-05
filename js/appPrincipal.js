// Crud
// C-> create
// R->Read
// U->Update
// D->Delete
const gato ={
nombre: "valiente",
duerme: true,
edad: 10,
enemigos:["agua", "perros"],
// Objetos anidados, es decir objetos deontro de objeto dentro de objetos con su spropiedades
otros:{
    amigos: ["cobarde", "timido"],
    favoritos:{
        comida: {
            frio: "salmon",
            caliente: "pollo"
            
        }
    }

}
};

const amigos =["cobarde", "timido"]



// Optional chaining (opens new window): El operador de encadenamiento opcional "?"". permite leer el valor de una propiedad ubicada dentro de una cadena de objetos conectados sin tener que validar expresamente que cada referencia en la cadena sea válida.
console.log(gato.otros.favorito?.comida.frio)
