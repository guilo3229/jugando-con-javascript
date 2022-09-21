
const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", e =>{
    e.preventDefault()
// Te crea un array de los  2 inputs y posteriormente se puede acceder a alguno de los dos y usar get y pasarle el get con el userName y accede directamente al valor sin necesidad de capturarlo con ID
    const inputs = new FormData(formulario)

    for(let item of inputs){
        console.log(item)
    }
    console.log("procesando formulario")

})
