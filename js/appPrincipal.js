const lista =document.querySelector("#lista")
// En el caso de abajo hemos puesto un li, pero podemos poner un package, una etiqueta a h1...li. etc
const li =document.createElement("li")
li.textContent = "elemento desde js"
console.log(li)
// ahora que ya esta la consola tenemos que empujarlo a nuestro DOM HTML
// ahora identificado el nodo PannerNode(el ID)
lista.appendChild(li)
lista.appendChild(li)