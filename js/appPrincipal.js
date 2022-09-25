
class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
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
    static probarSaludo(nombre){
        // El static sirve para poder en este caso utilizar un metodo de nuestra clase de persona
        return`${nombre} probando saludo`
    }
}

class Estudiante extends Persona {
    // si queremos meter nuestras propiedades dentro de estudiante llamar al nombre edad y a las notas, pero como la asignacion viene desde arriba usamos el super y en este tenemos que poner lo que se va a mantener.
    // tras el igaul array vacio para decirle otra cosa cuando no se la metemos o se puede modificar esas notas posteriromente.
    constructor(nombre,edad,notas = []){
        super(nombre, edad)
        this.notas = notas 
    }
    set setNotas(nota){
        this.notas.push(nota)
    }
    get getNotas(){
        return this.notas
    }
    // remplaza el funcionamiento del padre, se sobreescribe osea los metodos se sobreescriben, esto se llama polimorfismo, si un metodo en este caso tiene el mismo nomrbe se soobrescribe
    saludar(){
        return `${this.nombre} desde persona`;
    }
}


const juanito = new Estudiante("juanito", 25)
// los getter y los setter se llaman como a las propiedades  no es muy comun e igual no se usara mucho en otros idiomas si
juanito.setNotas = 7
juanito.setNotas = 5
juanito.setNotas = 1
// el getter nunca se llama con parentesis
console.log(juanito.getNotas)
// lo sobreescribe y no hay problema porque es un objeto literal, esto para los programadores horientada a objetos es horrible para ellos esta el getter y el setter.
// juanito.nombre = "pedrito"
// En este caso los getter y setter no usan n metodos!
// El setter sirve para cambiar normalmente no se usa mucho pero tambien se puede usar en algunos casos
// juanito.setNombre = "pedrito"
// console.log(juanito.getNombre)

// console.log(juanito.saludar())

