const h1 = document.getElementById("tituloWeb")
// normalmente con button es mejor usar eById pero vamos a probar con todos
const boton = document.querySelector(".btn-primary")
// seleccionamos el evento y una vez que este seleccinado le metemos la aplicacion
boton.addEventListener("click", () => {
    console.log("me diste click");
    h1.textContent = "texto desde js"
    h1.style.color = "red"
})
