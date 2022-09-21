
const formulario = document.getElementById("formulario")
const userName =document.getElementById("userName")
const userEmail =document.getElementById("userEmail")
// Sobre las alertas podriamos haber construido un array con queryslectorall de todas las alertas y despues invocando cada una por su id de nombre o su posicion o clase, pero como lo hicimos por getElementById 1 a 1 majete xD
const alertSuccess = document.getElementById("alertSuccess")
const alertName = document.getElementById("alertName")
const alertEmail = document.getElementById("alertEmail")

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const pintarMensajeExito = () => {
    // con el classlist podemos remover la clase si ponemos remove 
    alertSuccess.classList.remove("d-none")
    alertSuccess.textContent= "Mensaje enviado con éxito"
}
// lo que busco es que si todas las validaciones pasan pintar las alertas de success... por lo tanto majete a realizar su modificacion etc
formulario.addEventListener("submit", (e) => {
    e.preventDefault()
// Despues de classList.añadimos add para agregar dicha clase, en este caso si se vuelve a pulsar desapareceralo de mensaje enviado con exito, 
    alertSuccess.classList.add("d-none")
    // ahora tenemos que hacer los errores del name y del email
    const errores =[]
    // vamos a ir añadiendo los valores en un array si solo se cumple 1 pues ese solo si no se cumple el 2 pues mal

    // el metodo de trim va a sacar los caracteres en blanco tanto al principio y al final.
    // Esto devuelve true si existe solo espacios ya que esta en negado, esto lo podemos usar luego en el if .
    console.log(!userName.value.trim())
    console.log(userName.value)
    console.log(userEmail.value)

    // cualaquiera que sea verdadero cualquiera de las dos condiciones entra en el if si fuese && seria el y y deberian cumplirse ambas condiciones recordar!! 
    if(!regUserName.test(userName.value)||!userName.value.trim()){
        console.log("formato no valido")

        return
    }

    if(!regUserEmail.test(userEmail.value)){
        console.log("formato no valido")
        return
    }
    console.log("formulario enviado")
    pintarMensajeExito()
})