// 1-que tenemos que capturar es el carrito donde se van a pintar los elementos,entonces ahremos una constante que se llame carrito y pudemos usar getElementById o queryselector.
// multiplico estas lineas porque tambien necesito el template y el fragment posterior para evitar el reflow

const carrito = document.getElementById("carrito")
const template = document.getElementById("template")
const fragment = document.createDocumentFragment() 
// y ahora vamos a seleccionar todos los botones que tienen su data, en este caso usamos queryselector all porque queremos todos y ponemos sus clases del HTML
const btnesBotones =document.querySelectorAll(".card .btn")  
// lo probamos a ver si nos lo muestra una vez probado seguimos hacia delante
console.log(carrito)
console.log(template)
console.log(fragment)
console.log(btnesBotones)