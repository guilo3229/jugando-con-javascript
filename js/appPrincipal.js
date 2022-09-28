// el localstorage vive en el navegador de neuestro ordenador,de momento siempre el valor va a ser un string no se puede guardar un array la key seria platano y mostraria lo de la derecha en este caso lka imagen platanito(habra otras cosas en el futuro)
localStorage.setItem("sandia", "🍉")
localStorage.setItem("platano", "🍌")
// Aqui usulmente le decimos que si existe que lo pintemos en consola sirve para guardar anteriores keys etc
if(localStorage.getItem("platano")){
    const platano = localStorage.getItem("platano")
    console.log(platano)
}
// Para capturarlo es con getItem

// se puede remover el platanito
// localStorage.removeItem("platano")

