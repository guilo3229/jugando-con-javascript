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
    // funcion de flecha dentro del objeto
    comer(alimento) {
                    // recordemos primero el objeto y luego la propiedad por eso gato.nombre,pero hay otra manera mas elegente de hacerlo con el famoso this!!
                    // this: Hace referencia al objeto contexto de JavaScript en el cual se está ejecutando el código actual(contexto el scout rodo dentro del gato en este caso)
                    // con flecha no se puede porque hay un this dentro de la flehca y te sale undefined
                    // VAle ante la duda de porque esta el console log dentro de una propiedad de un objeto quiero recordar que para poder sacar dicha propiedad solo se ponia el nomrbe del objeto punto y su propiedad pero al querer escribor mas cosas tenemos que decir el string total que nos de el metodo dentro de la funcion en este caso por eso el console log que pasara a la salida de la funcion y posterirmente a la salida de la propiedad del objeto deseada
        console.log(`
            ${this.nombre} esta comiendo ${alimento}
        `)
        
    },
    
    // como ya sabemos el for each hace un recorrido
    listarEnemigos(){
    // en este caso se puede usar la funcion de flecha dentro de nuestro metodo, pero no como un metodo.
        this.enemigos.forEach((item) => console.log(item));

    },
};
// acordarse que los string entre comillas sino no funciona
gato.comer("pecesces")
gato.listarEnemigos();


// tener en cuenta que si ponemos string siempre entre corchetes y si no es es strin osea numero tal cual sin corchetes es una variable sin mas
// gato.comer("pez")
