

// Con esto estamos diciendo carga el DOM y ejecuta con neustra funcion de flecha todo lo de las consoles en este CacheStorage, asi no hara falta poner justo al final del body nuestro scrypt esto es una alternativa
document.addEventListener("DOMContentLoaded",() =>{
    console.log(document.getElementById("tituloWeb"))
    console.log(document.getElementById("tituloWeb").textContent)
})