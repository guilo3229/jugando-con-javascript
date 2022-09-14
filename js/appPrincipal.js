// // 1-que tenemos que capturar es el carrito donde se van a pintar los elementos,entonces ahremos una constante que se llame carrito y pudemos usar getElementById o queryselector.
// // multiplico estas lineas porque tambien necesito el template y el fragment posterior para evitar el reflow

// const carrito = document.getElementById("carrito")
// const template = document.getElementById("template")
// const fragment = document.createDocumentFragment() 

// // y ahora vamos a seleccionar todos los botones que tienen su data, en este caso usamos queryselector all porque queremos todos y ponemos sus clases del HTML

// const btnesBotones =document.querySelectorAll(".card .btn")  

// // lo probamos a ver si nos lo muestra una vez probado seguimos hacia delante ahora vamos a ver como vamos a trabajar con esos productos
// // aqui en el primero voy a almacenar cada uno

// const carritoObjeto =[]



// // aqui seriala funcion de agregar al carrito

// const agregarAlCarrito =(e)=>{
//     // con el dataset  entramos en el nombre que viene despues de data- en el html
//     console.log(e.target.dataset.fruta)
//     // Que tenemos que ahcer ahora? agregarlo al carrito
//     // una manera sencialla es hacer una constante de lo que va a venir a dentro
//     const producto = {
//         titulo: e.target.dataset.fruta,
//         id: e.target.dataset.fruta,
//         cantidad: 1
//     }
// //    Aqui creamos una constante con el indice que nos da el valor si e xiste dicho elemento dentro del array y -1 si no existe  nos da el numero del array es decir si hay 3 elementos nos dara el 0 si hay 1 elemento el 1 si es el segundo elemento y el 2 si es el tercer elmento, luego ya le metemos el sumatoria de ++ cada vez que le sumamos a su propiedad!!
// // recordatorio: findindex buscara dicho item dentro del array y tendra que ser igual ese id a la constante producto que en nuestro caso es la que hayamos clickado que esta aqui encima, si existe ya en el carrito se sumara ++1 a traves del else sino si es -1 empujara el producto al array
//     const indice = carritoObjeto.findIndex(
//         (item) => item.id === producto.id)
//         console.log(indice)
    
//         if(indice === -1){
//             carritoObjeto.push(producto)
//         } else{
//             carritoObjeto[indice].cantidad++
//         }
    
//     console.log(carritoObjeto)

//     pintarCarrito(carritoObjeto)
   
// }
// // ahora haremos otra funcion que seria pintar carrito, que sea un array que ya lo hemos metido en pintarcarrito el carrito objeto ese parametro.
// const pintarCarrito =(array) =>{
   
//     carrito.textContent = ""
// // En este caso podemos usar el forEach directamente ya que tengo un array y este itera sobre array
//     array.forEach((item) =>{
//         // clonamos el template
//         const clone = template.content.firstElementChild.cloneNode(true)
//         // ahora a traves del clone buscanemos los elementos por ejemplo frutilla etc para eso jhacemos que el lead se modifique a la fruta que queremos.
//         // los items representa los elementos que metimos en el array del for each
//         clone.querySelector(".lead").textContent = item.titulo
//         clone.querySelector(".badge").textContent =item.cantidad
//         // una vez que teniamos el clone usabamos el fragment para evitar el reflow
//         fragment.appendChild(clone)
//     })
//     carrito.appendChild(fragment)
// }

// // otra funcion que va a ser el recorrido y vamos a recorrer los Botones

// btnesBotones.forEach((btn)=> btn.addEventListener("click", agregarAlCarrito))

// primero capturamos los elementos
const padre = document.querySelector(".border-primary")
const hijo = document.querySelector(".border-secondary")
const nieto = document.querySelector(".border-danger")
// luego le agregamos un avento
// del elemento que esta mas anidado se propaga hacia arriba de descendencia a ascendencia, se llama burbujeo, se puede hacer al reves del elemento apdre al hijo,para esto ultimo le metemos un true despues del corchete y seria al reves osea si clickamos en el nieto nos saldria primero me diste click padre, hijo y abajo el nieto.
padre.addEventListener("click",() =>{
    console.log("me diste click padre")
},true)
hijo.addEventListener("click",() =>{
    console.log("me diste click hijo")
},true)
nieto.addEventListener("click",() =>{
    console.log("me diste click nieto")
},true)