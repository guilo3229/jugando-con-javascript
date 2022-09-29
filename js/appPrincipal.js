
// Siempre lo primero es capturar los elementos en este caso tenemos 3 (el formulario, el section y el template)
// Recordar con queryselector # para las id y . para las clases
// para el getelementbyID sin # para id
const formulario =document.querySelector("#formulario")
const pintarTodo =document.querySelector("#pintarTodo")
// Cuando trabajamos con template hay que clonarlo por eso siempre content despues del parentesis
// Recordar sui tenemos algun elmento que se va a ir repitiendo aunque este dentro del template no podemos usar el id porque este se repetira tambien y se fastidia a menos que se agregen de forma dinamica en cada elemento
const templateTodo =document.querySelector("#templateTodo").content
// Como es solo un alert lo podemos capturar aqui arriba cuidado !! si hay varios cada uno especificado mejor
const alert =document.querySelector(".alert")
let todos =[]

const agregarTodo = todo => {
    const objetoTodo = {
        nombre : todo,
        id: `${Date.now()}`

    }

    todos.push(objetoTodo)
}

const pintarTodos =() =>{

    localStorage.setItem("todos", JSON.stringify(todos))

    pintarTodo.textContent = ""
    // para evitar el reflow recordar fragment
    const fragment = document.createDocumentFragment()
    todos.forEach(item =>{
        const clone = templateTodo.cloneNode(true)
        clone.querySelector(".lead").textContent = item.nombre
// Con el dataset.id es que estamos agregando un id dinamico a cada uno para poder borrar crear aumentar o lo que sea de objetos que aun no han sido creados dinamicamente asociandolos a sunombre por ejemplo que tambien es dinamico e igualamos al id del item haiendolo un string porque el DatasSey siempre hace id
        clone.querySelector(".btn").dataset.id = item.id
        fragment.appendChild(clone)
    })
    pintarTodo.appendChild(fragment)
}

// Ahora usaremos la delegacion de eventos para que funcionen botones que aun no han aparecido
document.addEventListener("click", e=>{
    // console.log(e.target.dataset.id) 
    // Las clases como querySelector acordarse del punto
    // console.log(e.target.matches(".btn-danger")) 
    if(e.target.matches(".btn-danger")){
        // todo lo que no se cumpla esto lo devuelve filtra el array, por eso denominamos con let todos porque con const no puedes sobreescribir una rray
        todos = todos.filter(item=> item.id !== e.target.dataset.id)
        // Recordar que el pintarTodos ya te limpia al principio todo asi que chill
        pintarTodos()
    }
})


formulario.addEventListener("submit", e=>{

    e.preventDefault()
    alert.classList.add("d-none")
    console.log("funcionando formulario")
    // Con el formData nosotros lo que hacemos es capturar atraves del name todos los input que tengas en un formulario mas rapido que estar capturando todos por IDBCursor.value si son muchos 
    const data = new FormData(formulario)
    // necesitamos hacer una destructuracion
    const[todo] = [ ...data.values()]
    // Como acepta espacios lo que podemos hacer es meterle una pequeña validacion
    if(!todo.trim()){
        console.log("te equivocaste mandaste vacio")
        alert.classList.remove("d-none")
        // recordar el return apra que nos iga con nuestro codigo
        return
    }
    
    agregarTodo(todo)
    pintarTodos()

})

document.addEventListener("DOMContentLoaded", (e)=>{
    // Aqui le decimos que si existe algo en el local storage entra dentro del if osea que entra dentro del if
    if(localStorage.getItem("todos")){
        todos =JSON.parse(localStorage.getItem("todos"))
        // aqui pintamos todo,parece ser que al ser un array que lo machaca con el mismo nombre lo destruye dentro del localstorage tambien por eso lo borra y no queda
        pintarTodos()
    }
   
})