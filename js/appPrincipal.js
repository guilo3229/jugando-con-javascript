

const frutas = [
    {
        nombre: "🍌",
        color: "amarillo",
    },
    {
        nombre: "🍒",
        color: "rojo",

    },
    {
        nombre:"🍏",
        color: "verde",
    }
]
// Como despues de la key tenemos que meter un string utilizaremos Json.stringify esto convierte un objeto o valor de Javascript en una cadena de texto JSON
localStorage.setItem("frutas", JSON.stringify(frutas) )
// aqui viene como un Json entonces hacemos el camino opuesto usando JSON.parse para volverlo a su estado inicial

// Recordar que viene del local Storage si borramos lo anterior despues de un ciclo queda guardado


if (localStorage.getItem("frutas")){
    const frutasDesdeLocal = JSON.parse(localStorage.getItem("frutas"))
    console.log(frutasDesdeLocal)
}