
class Persona {
    constructor(nombre){
        this.nombre = nombre
    }
    // estoe s para los programadores horientada a objetos, hay que poenrle un getter
    get getNombre(){
        return this.nombre
    }
    set setNombre(nombre){
        this.nombre = nombre
    }
    saludar(){
        return `${this.nombre} dice hola`;
    }
}

const juanito = new Persona("juanito")
// lo sobreescribe y no hay problema porque es un objeto literal, esto para los programadores horientada a objetos es horrible para ellos esta el getter y el setter.
// juanito.nombre = "pedrito"
// En este caso los getter y setter no usan n metodos!
// El setter sirve para cambiar normalmente no se usa mucho pero tambien se puede usar en algunos casos
juanito.setNombre = "pedrito"
console.log(juanito.getNombre)

console.log(juanito.saludar())

