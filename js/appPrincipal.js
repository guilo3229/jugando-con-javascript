// Funcion constructora = Plantilla = Class

function persona (nombre){
    this.nombre = nombre

    this.saludar = function(){
            // Recuerda lo de la interpolacion 
        return `${this.nombre} dice hola`
    }
    // this.saludarIngles = function () {
    //     return`${this.nombre} says hi!` 

    // }
}
// Esto es instanciar, creamos nuestra plantilla objeto a trabes de una funcion y le añadimos dinamicamente las variable que queramos a esa plantilla para no tener que ir haciendo los objetos uno a uno y de esta manera es mas sencillo y ahorramos codigo, recordar que no se peuden usar funciones de flecha porque utilizamos this!!!

// Lo de arriba no es un objeto, es cuando lo instanciamos aqui abajo es cuando creamos los objetos
// Esto es lo que deciamos antes que aunque existan dichas funcionas no quieren decir que este dentro del contructor del objeto
persona.prototype.saludarIngles =function(){
    return`${this.nombre} says hi!`

}
const juanito = new persona("juanito")
const pedrito = new persona("pedrito")

console.log(juanito)
console.log(pedrito)
console.log(juanito.saludar())
console.log(pedrito.saludarIngles())
