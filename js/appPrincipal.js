const lista =document.querySelector("#lista")
// const arrayPaises =["peru","bolivia","colombia"]
// const fragment = document.createDocumentFragment();
// vale aqui lo que hace, vemos el template que tiene ya un document, sacamos el query slector y luego clonamos dicho contenido y le ponemos true
const liTemplate = document.querySelector('#liTemplate')
const clone = liTemplate.content.cloneNode(true)
// despues de colonarlo nos metemos dentro del objeto y modificamos la clase del span metiendonos dentro y poniendo textcontent para modificar dicho text
clone.querySelector(".text-primary").textContent = "agregue a atraves de un template"
// para finalizar mostramos todo el clone con el anterior texto modificado
console.log(clone)