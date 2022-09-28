// Los export por default no necesitan nombre
// const sandia = "🍉"
// export default  sandia
// Funciona para las funciones
export default function pintarPlatano(){
    console.log("🍌")
}
// Funciona para las funciones de flecha
 const frutilla = () =>{

    console.log("🍓")
    // no se puede exportar dentro de funciones siempre a nivel de la raiz
}
// Funciona para las class
 class Fruta{
    constructor(nombre){
        this.nombre = nombre
    }
}

// Para ser mas rapidos y no escribir mil export ponemos un export y metemos todo

export{ frutilla, Fruta,pintarPlatano

}