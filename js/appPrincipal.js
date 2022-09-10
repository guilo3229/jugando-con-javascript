// // 1-que tenemos que capturar es el carrito donde se van a pintar los elementos,entonces ahremos una constante que se llame carrito y pudemos usar getElementById o queryselector.
// // multiplico estas lineas porque tambien necesito el template y el fragment posterior para evitar el reflow

// const carrito = document.getElementById("carrito")
// const template = document.getElementById("template")
// const fragment = document.createDocumentFragment() 

// // y ahora vamos a seleccionar todos los botones que tienen su data, en este caso usamos queryselector all porque queremos todos y ponemos sus clases del HTML

// const btnesBotones =document.querySelectorAll(".card .btn")  

// // lo probamos a ver si nos lo muestra una vez probado seguimos hacia delante ahora vamos a ver como vamos a trabajar con esos productos
// // aqui en el primero voy a almacenar cada uno

// const carritoObjeto ={

// }

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
//     if(carritoObjeto.hasOwnProperty(producto.titulo)){

//         producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
//     }

//     // ahora empujaremos este producto objeto dentro de nuestro carrito
//     carritoObjeto[producto.titulo] = producto
//     pintarCarrito()
//     // console.log(carritoObjeto)
// }
// // ahora haremos otra funcion que seria pintar carrito
// const pintarCarrito =() =>{
//     // como trasformavamos esto en un array para poder leerlo con un for each
//     // para que no se repita es decir que cuando pongas un segundo elemento diga el anterior y el siguiente por lo del forEach para eso decimos que nuestro carrito parta vacio cada vez que clickamos de nuevo y no guarde el anterior ciclo
//     carrito.textContent = ""

//     Object.values(carritoObjeto).forEach(item =>{
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

// // otra funcion que va a ser el recorrido y vamos a a recorrer los Botones

// btnesBotones.forEach((btn)=> btn.addEventListener("click", agregarAlCarrito))



// si quisieramos que no esten anidados sino que esten en un unico array
const arrayNumeros = [
    [0, 1],
    [2, 3],
    [4, 5],
];

const soloNumeros = arrayNumeros.reduce(
        (acc,current) => acc.concat(current)


)

console.log(soloNumeros)