const lista =document.querySelector("#lista")
// En el caso de abajo hemos puesto un li, pero podemos poner un package, una etiqueta a h1...li. etc
const li =document.createElement("li")
li.textContent = "elemento desde js"
console.log(li)
// ahora que ya esta la consola tenemos que empujarlo a nuestro DOM HTML
// ahora identificado el nodo PannerNode(el ID)
lista.appendChild(li)
// Si el child hace una referencia a un nodo existente en el documento, el método appendChild se mueve de su posición actual a su nueva posición.
// Ésto significa que el nodo no puede estar en dos puntos del documento de manera simultánea.
// Así que si el nodo ya contiene un padre, primero es eliminado, y después se añade a la nueva posición.
// Se puede usar Node.cloneNode (opens new window)para hacer una copia del nodo antes de añadirlo debajo de su nuevo elemento padre.
