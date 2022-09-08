const lista =document.querySelector("#lista")
// const arrayPaises =["peru","bolivia","colombia"]
// const fragment = document.createDocumentFragment();
// vale aqui lo que hace, vemos el template que tiene ya un document, sacamos el query slector y luego clonamos dicho contenido y le ponemos true
const liTemplate = document.querySelector('#liTemplate')
const clone = liTemplate.content.cloneNode(true)
// despues de colonarlo nos metemos dentro del objeto y modificamos la clase del span metiendonos dentro y poniendo textcontent para modificar dicho text
clone.querySelector(".text-primary").textContent = "agregue a atraves de un template"

// es decir hacemos un liTemplate, luego lo podemos definir en javascript modificarlo etc y luego lo inserrtamos en nuestro html, en este caso en el ul que tenemos para ello lo hacemos con appendchild de lista y asi lo insertamos.
lista.appendChild(clone)