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
    // dos metodos
    comer: function() {
    console.log("gato comiendo")
    },
    comerDos(){
        console.log("gato comiendoDos")
    }
};


// como no es una propiedad "comer" es decir es un metodo colocamos paretesis
gato.comer()
gato.comerDos()

// // las propiedades no lleban parentesis los metodos setInterval, javascript nos ayuda a saber si es emtodo o propiedad escribiendo las primeras letras etc
// console.log(amigos.push)
