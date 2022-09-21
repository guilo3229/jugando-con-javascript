
// Por querySelector
// const formulario = document.querySelector("#formulario");
// const userName = document.querySelector("input[name='userName']");
// const userEmail = document.querySelector("input[name='userEmail']");
// por get ElementbyID ya que estamos usando los ID dados en el HTML
const formulario = document.getElementById("formulario")
const userName =document.getElementById("userName")
const userEmail =document.getElementById("userEmail")
// letras mayusculas minusculas y con o sin tildes
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
// hay veces que cuando ponesmos nuestra variable indirectamente el formateador se carga caracteres es decir si hacemos un new par auna nueva constante repsecto a otra con su argumento como estos entre barritas puede suceder
 // validacion para email acordarse de las barritas
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
formulario.addEventListener("submit", (e) => {

// la e es para poder usar el preventDefault que hacia que las acciones por defecto del navegador las desactivara o detiene las funciones por defecto por ejemplo usamos funcion de flecha con e.
 // no se procesa el formulario por ejemplo
    e.preventDefault()
// con ese punto value es una propiedad y no tiene parentesis por ello, de esta manera podemos acceder a la informacion , pero lo del value tiene que ser despues del evensto submit  es decir despues despues del add event listerner y en este caso es el submit(dentro del evento  de momento, posteriormente con funciones etc se podra hacer)
    console.log(userName.value)
    console.log(userEmail.value)
// Para detectar lo que escribio el usuario podemos hacer varias ConstantSourceNode, ahora las validaciones
 // En este caso podemos enviarla directamente desde javascript y es de forma dinamica al test , esto nos devolvia un verdadero o falso podemos usarlo en un if:

    if(!regUserName.test(userName.value)){
        console.log("formato no valido")
        // el return aqui es para ahorrarse el else es decir que al realizarse este if al final realiza el return que hace que se salga de la funcion en este punto y no sigue con la linea de abajo de este,por lo tanto nos ahorramos el else
        return
    }
    // el signo de exclamacion antes de la condicion significa el inverso de addEventListener, es decir cuando no se cumpla lo que venga despues osea sea false se ejecutara este if
    if(!regUserEmail.test(userEmail.value)){
        console.log("formato no valido")
        return
    }
    console.log("formulario enviado")

})