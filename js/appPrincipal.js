


// este es con element BYID
    console.log(document.getElementById("tituloWeb"))
// este es con query selector, el query selecto coje por defecto el primero que esta definido para poder coger todos los definidos con dicho nombre hay que añadirle un All al final de querySlector!!, para seleccionar solo lo que este dentro del container hay que especificar .el nodo especifico(sino lo tiene le creamos una clase en HTML) osea donde estan metido lo que queremos sacar, sirve para ambos tanto para el sin All como con el sin All
    console.log(document.querySelectorAll(".container .text-danger"))