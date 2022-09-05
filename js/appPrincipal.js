// objetos literales
// console.log("vinculado 😍")
// llavecitas para un objeto
// tiene atributos nombre,color, acciones puede comer etc
// lo que separa la propiedad del valor se usa los 2 puntitos
// acordarse de la coma para pasar a la sieguiente propiedad
// no se puede poner los index ya que son propiedades
// se puede poner con comillas o sin comillas
const gato ={
nombre: "valiente",
duerme: true,
edad: 10,
enemigos:["agua", "perros"]

}
// para llamar una propiedad punto y la propiedad
console.log(gato.nombre)
// tambien puede sllamar una propiedad potniendo el bjeto y entre corchetes y comillas dicha propiedad
console.log(gato["nombre"])
console.log(gato.duerme)
console.log(gato["enemigos"])
// primer valor de la propiedad enemigos:
console.log(gato["enemigos"][0])
console.log(gato.enemigos[0])