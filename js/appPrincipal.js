
const gato ={
    nombre: "valiente",
    duerme: true,
    edad: 10,
    enemigos:["agua", "perros"]
}
// usamos el for in y no el for of porque este ultimo era para los array y esto es un objeto con sus propiedades es diferente!!
// poner en corchete para que salgan las  definiciones de las propiedades es decir lo que esta a su derecha y no el nombre de las propiedades.
for(let propiedad in gato){
    console.log(gato[propiedad])
    // console.log(gato.propiedad)--> no funciona apareceria undefined
}