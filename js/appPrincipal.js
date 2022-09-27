console.log("funcionando")
const formulario = document.querySelector("#formulario")
const cardsEstudiantes = document.querySelector("#cardsEstudiantes")
const cardsProfesores = document.querySelector("#cardsProfesores")
// con los template con el . content
const templateEstudiante = document.querySelector("#templateEstudiante").content
const templateProfesor = document.querySelector("#templateProfesor").content

const estudiantes =[]
const profesores = []
// Por si despues ahcemos mas delegaciones las tenemos todas reunidas en una misma parte en el document!Eesto es bueno para evitar el tema del burbujeo y la captura
document.addEventListener("click", (e) => {
    
    // Los dos buttn entran aqui tanto el success como el danger
    if(e.target.dataset.nombre){
    
        if(e.target.matches(".btn-success")){
            // como tengo una rray de estudiante lo voy a recorrer con punto map para encontrar el susodicho estudiante
            estudiantes.map((item) => {
                if(item.nombre === e.target.dataset.nombre){
                    item.setEstado = true
                }
                console.log(item)
                return item
            })
            
        }
        if(e.target.matches(".btn-danger")){
            estudiantes.map((item)=>{
                if(item.nombre === e.target.dataset.nombre){
                    item.setEstado = false
                }
                return item
            })
            
        }
        Persona.pintarPersonaUI(estudiantes, "Estudiante")
    }
})


class Persona {
        constructor(nombre, edad){
            this.nombre = nombre
            this.edad = edad

        }
        // El Persona va a tener la capacidad de pintar la informacion en card estudiantes
        static pintarPersonaUI(personas, tipo){
            if(tipo === "Estudiante"){

                cardsEstudiantes.textContent =""
                const fragment =document.createDocumentFragment()

                personas.forEach((item) =>{
                    fragment.appendChild(item.agregarNuevoEstudiante())
                })
                cardsEstudiantes.appendChild(fragment)
            }
            if(tipo === "Profesor"){
                cardsProfesores.textContent =""
                const fragment =document.createDocumentFragment()
                personas.forEach((item) =>{
                    fragment.appendChild(item.agregarNuevoProfesor())
                })
                cardsProfesores.appendChild(fragment)
            }
        }

}

class Estudiante extends Persona {
    // son propiedades privadas privada con almohadilla#
    #estado = false
    // simulamos que no existe estudiante y hay que llevarlo
    #estudiante = "estudiante"
    // como son propiedades privadas para llamarlas vamos a necesitar un set
    set setEstado(estado){
        this.#estado = estado
    }
    get getEstudiante(){
        // de momento no lo necesitamos
        return this.#estudiante
    }
    agregarNuevoEstudiante() {
        // hay que clonar y ahora nosotros con el clone podemos acceder a cada una de las propiedades
        const clone = templateEstudiante.cloneNode(true)
        // aqui es la class estudiante y luego hacemos el clone y le ponemos el nombre que ha sido metido por la clase Persona,extendido por la clase estudiante y clonado y poseriormente modificado
        clone.querySelector("h5 .text-primary").textContent = this.nombre
        // Aqui probamos que se peude acceder a un getter dentro de un metodo y si que se puede"eliminando Estudiante del HTML apra ver como lo escribe:(clone.querySelector("h6").textContent = this.getEstudiante)
        clone.querySelector("h6").textContent = this.getEstudiante
        clone.querySelector(".lead").textContent = this.edad

        if(this.#estado){
            // En este caso cogemos donde esta el badge en el template Estudiante y quitamos las classes con el className osea se formatean y lo que esta a la derecha del igual son las nuevas clases hay que dejar las que no queramos cambiar tambien, es decir escribirlas.(recordar las clases en queryselector con puntito las clases, almohadilla los id)
            clone.querySelector(".badge").className ="badge bg-success"
            clone.querySelector(".btn-success").disabled = true
            // Si despues clickamos en la siguiente vuelta se pueda cambiar de boton sino acabarian los 2 disabled en un apr de vueltas
            clone.querySelector(".btn-danger").disabled = false
        }else{
            clone.querySelector(".badge").className = "badge bg-danger"
            clone.querySelector(".btn-danger").disabled = true
            // Lo mismo que lo de arriba pero con la otra opcion
            clone.querySelector(".btn-success").disabled = false
        }
        // Asi lo hago dinamico poniendolo fuera, con el interrogante le decimos que si el estado es true se ejerce el interrogante y si es false el de los 2 puntitos
        clone.querySelector(".badge").textContent = this.#estado
        ? "Aprobado"
        : "Suspendido"
        // aqui deberia ir el id envede nomreb porque cuando busque el nombre como este repetido mal
        clone.querySelector(".btn-success").dataset.nombre = this.nombre
        clone.querySelector(".btn-danger").dataset.nombre = this.nombre
        return clone

    }
}

class Profesor extends Persona {
    #profesor = "Profesor"

    agregarNuevoProfesor(){
        const clone = templateProfesor.cloneNode(true)
        clone.querySelector("h5").textContent = this.nombre
        clone.querySelector("h6").textContent = this.#profesor
        clone.querySelector(".lead").textContent =this.edad
        return clone
    }
}

formulario.addEventListener("submit", e => {
    e.preventDefault()
    // El formData como parametro el id del formulario
    const datos = new FormData(formulario)
    // se puede hacer destructuring, para traerte los valores correspondientes y despues le igualamos una array a poder ser con el mismo numero de variable que traiga para asignarles ese valor
    const[nombre, edad, opcion] = [...datos.values()]

    if(opcion === "Estudiante"){

        // hacemos una instancia de Estudiante
    const estudiante = new Estudiante(nombre, edad)
        // datos.keys().forEach(item => console.log(item)
        estudiantes.push(estudiante) 
        // aqui estoy llamando al metodo pero este metodo viene de persona hay que decirle de donde viene
        Persona.pintarPersonaUI(estudiantes, opcion)

    }
    if(opcion === "Profesor"){
        console.log("Profesor")
        const profesor = new Profesor(nombre,edad)
        profesores.push(profesor)

        Persona.pintarPersonaUI(profesores,opcion)
    }
    
})