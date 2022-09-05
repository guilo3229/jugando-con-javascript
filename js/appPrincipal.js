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
    comer(alimento){
                    // recordemos primero el objeto y luego la propiedad por eso gato.nombre,pero hay otra manera mas elegente de hacerlo con el famoso this!!
                    // this: Hace referencia al objeto contexto de JavaScript en el cual se está ejecutando el código actual(contexto el scout rodo dentro del gato en este caso)
        console.log(`
            ${this.nombre} esta comiendo ${alimento}
        `)
        
    }
};


// tener en cuenta que si ponemos string siempre entre corchetes y si no es es strin osea numero tal cual sin corchetes es una variable sin mas
gato.comer("pez")


// // las propiedades no lleban parentesis los metodos setInterval, javascript nos ayuda a saber si es metodo o propiedad escribiendo las primeras letras etc
// console.log(amigos.push)
