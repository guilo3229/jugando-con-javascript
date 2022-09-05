let frutas =["manzana","sandia","pera"]
// For Each con index, las llaves se pueden omitir si definimos fruta y luego index en la consola habra que ponerlo al reves pero si ponemos index primero habra que ponerlo segundo en la consola ojo!!
// Tambien se puede hacer añadiendole interpolacion para que quede mas bonito
   
frutas.forEach((fruta,index,array) =>{
        console.log(`${index }: ${fruta}`)
       
        console.log(array)
    }
)