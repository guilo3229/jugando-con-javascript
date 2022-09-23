
// primero necesito una constante con la url
const url ="https://jsonplaceholder.ty2picode.com/posts/1"
// El fetch es una nueva promesa, puedo usar por elllo el then, cuando usemos el then de esto hay que acordarse hay que retornar esa respuesta en Json, podemos ver nuestro Json de nuestra web como un archivo o una imagen lo formateo a Json
fetch(url)
// ahora respuesta y luego formateo sabiendo que es un json y pinto la data en mi sito web
    .then((res) =>  res.json())
    .then(data=> console.log(data) )
    .catch(e => console.log(e))
    .finally(() => console.log("finalizo"))
// de acuerdo a ese responde tenemos metodos disponible apra definir el contenido del cuerpo en este caso es un Json que aun no le hemos dado formato.
