
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

// hastag para decir que es privado
    #notas = []
    set setNotas(nota){

        this.#notas.push(nota)
    }
    get getNotas(){
        return this.#notas
    }
    // remplaza el funcionamiento del padre, se sobreescribe osea los metodos se sobreescriben, esto se llama polimorfismo, si un metodo en este caso tiene el mismo nomrbe se soobrescribe

}


const juanito = new Estudiante("juanito", 25)
// los getter y los setter se llaman como a las propiedades  no es muy comun e igual no se usara mucho en otros idiomas si
juanito.setNotas = 7
juanito.setNotas = 5
juanito.setNotas = 1
// getNotas si que funciona pero si ponemos .#notas
// y tambien si ponemos juanito tambien apareceran en el objeto todas las notas dentro, esto es para que nuestros programas no choquen en el frontend, en el backend es mas importante como medida de seguridad,
console.log(juanito)
