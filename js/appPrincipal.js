// const formulario = document.querySelector("#formulario");
const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", e=>{

    // la e es para poder usar el preventDefault que hacia que las acciones por defecto del navegador las desactivara o detiene las funciones por defecto por ejemplo usamos funcion de flecha con e.
    // no se procesa el formulario por ejemplo
    e.preventDefault()

    console.log("formulario procesado")
    // Para detectar lo que escribio el usuario podemos hacer varias ConstantSourceNode, ahora las validaciones
})