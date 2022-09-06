
const gato ={
    nombre: "valiente",
    duerme: true,
    edad: 10,
    enemigos:["agua", "perros"]
}
// Este comando por decirlo de alguna manera devuelve un array correspondiente a las propiedades enumerables de un objeto es el Object.values("aqui el bnombre del objeto en este caso gato")
console.log(Object.values(gato))
// Otra forma para hacerlo , se puede utilizar el objetct+ for each +funcion de flecha, esto solo sirve como podemos ver en la consola 
Object.values(gato).forEach((i) => console.log(i))

// hay otros metodos como:Object.entries()
// Object.key()
// Object.getOwnPropertyNames()