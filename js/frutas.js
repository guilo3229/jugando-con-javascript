
 const sandia = "🍉"
// Funciona para las funciones
 function pintarPlatano(){
    console.log("🍌")
}
// Funciona para las funciones de flecha
 const frutilla = () =>{

    console.log("🍓")
}
// Funciona para las class
 class Fruta{
    constructor(nombre){
        this.nombre = nombre
    }
}

// Para ser mas rapidos y no escribir mil export ponemos un export y metemos todo

export{ sandia, frutilla, Fruta,pintarPlatano

}