
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
const pintarMensajeError = (errores) => {
    // Usamos un forEach para recorrerlo
    errores.forEach(item => {
        // como el item es el objeto que estamos recorriendo su primera propiedad hemos dicho que era tipo, es decir sacamos el alert Email del document.getElementById lo metemos esa constante como una propiedad de los objetos y al recorrer dichos objetos en el array modificamos esa propiedad del objeto que esta siendo modificado en el HTML por dicha constante al principio del javaScript
        item.tipo.classList.remove("d-none")
        // En este segundo le vamos a meter su propiedad en lo que se escribe en HTML osea lo que va en texto, podriamos hacerlo directamente en el parrafo dinamicamente pero si queremos hacerlo para todos quiza esta forma es mejor
        item.tipo.textContent = item.msg
        
    })
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

        userName.classList.add("is-invalid")
        // lo que voy a hacer es empujar los errores.push(empujaremos un mensaje)lo pintaremos en el alertName y podemos podemos meterle un mensaje, es un objeto que lo empujamos al array de encima con sus susodichas propiedades para que posteriormente lo lancemos
        errores.push({
            tipo: alertName,
            msg: "formato no valido en el campo nombre, solo letras"
        })
    }else{
        // En el caso que pase vamos a cambiarlo, remueve el invalido anterior le da valido y le pone el d-none que hace que desaparezca la alerta ya que es valido
        userName.classList.remove("is-invalid")
        userName.classList.add("is-valid")
        alertName.classList.add("d-none")
    }

    if(!regUserEmail.test(userEmail.value)||!userEmail.value.trim()){
        userEmail.classList.add("is-invalid")
        errores.push({
            tipo: alertEmail,
            msg: "Escriba un correo valido"
        })
    } else{
        userEmail.classList.remove("is-invalid")
        userEmail.classList.add("is-valid")
        alertEmail.classList.add("d-none")
    }
    // Como hemos quitado los return entonces si o si se va a mostrar la funcion de pintarmensajeExito por lo tanto para solucionarlo
    if (errores.length !== 0 ){
        pintarMensajeError(errores)
        return
       
    }
    pintarMensajeExito()
})