
const gato ={
    // nombre: "valiente",
    duerme: true,
    edad: 10,
    enemigos:["agua", "perros"],
    otros:{
        amigos:["cobarde", "timido", "pegajoso"],
        favoritos:{
            fria: "salmon",
            caliente: "pollo",
        }
    }
}
// primera forma de desestructuracion anidada que funciona
const{amigos: amigosGatos} = gato.otros;
console.log(amigosGatos);
// otra forma de desestructuracion que funciona
// la primera forma que esta mas arriba es mejor que la inmediata de aqui abajo
// const {otros: {amigos: amigosGatos}} = gato;
// console.log(amigosGatos);