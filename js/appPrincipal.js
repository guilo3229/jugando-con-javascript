// 1-que tenemos que capturar es el carrito donde se van a pintar los elementos,entonces ahremos una constante que se llame carrito y pudemos usar getElementById o queryselector.
// multiplico estas lineas porque tambien necesito el template y el fragment posterior para evitar el reflow

const carrito = document.getElementById("carrito")
const template = document.getElementById("template")
const footer = document.getElementById("footer")
const templateFooter = document.getElementById("templateFooter")
const fragment = document.createDocumentFragment() 
// hacemos un addeventlistener de click apra todo el documento y luego posteriormente delegaremos el click donde nos interese
document.addEventListener("click", e =>{

// console.log(e.target.matches(".card .btn-outline-primary"))
    if(e.target.matches(".card .btn-outline-primary")){
    // lo probamos
    // console.log("ejecutar agregar al carro")
    agregarAlCarrito(e)
    }
    // console.log(e.target.matches(".list-group-item .btn-success"))
    // se puede poner carrito porque lo metemos en el html de forma dinamica dentro del ul
    if(e.target.matches("#carrito .list-group-item .btn-success")){
        btnAumentar(e)
    }
    if(e.target.matches("#carrito .list-group-item .btn-danger")){
        btnDisminuir(e)
    }
    if(e.target.matches("footer .lead .btn-outline-info")){
        btnFinalizarCompra()
    }
    if(e.target.matches("#ultimo")){
        btnSeguirComprando()
    }
})
    

// y ahora vamos a seleccionar todos los botones que tienen su data, en este caso usamos queryselector all porque queremos todos y ponemos sus clases del HTML
 

// lo probamos a ver si nos lo muestra una vez probado seguimos hacia delante ahora vamos a ver como vamos a trabajar con esos productos
// aqui en el primero voy a almacenar cada uno

let carritoObjeto =[]



// aqui seriala funcion de agregar al carrito

const agregarAlCarrito =(e)=>{
    // con el dataset  entramos en el nombre que viene despues de data- en el html
    // console.log(e.target.dataset.fruta)
    // Que tenemos que ahcer ahora? agregarlo al carrito
    // una manera sencialla es hacer una constante de lo que va a venir a dentro
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        // el precio debe ser un numero lo pasaremos con parse int
        precio: parseInt(e.target.dataset.precio)
        // Le añadimos el precio
    }
    // console.log(producto)
//    Aqui creamos una constante con el indice que nos da el valor si e xiste dicho elemento dentro del array y -1 si no existe  nos da el numero del array es decir si hay 3 elementos nos dara el 0 si hay 1 elemento el 1 si es el segundo elemento y el 2 si es el tercer elmento, luego ya le metemos el sumatoria de ++ cada vez que le sumamos a su propiedad!!
// recordatorio: findindex buscara dicho item dentro del array y tendra que ser igual ese id a la constante producto que en nuestro caso es la que hayamos clickado que esta aqui encima, si existe ya en el carrito se sumara ++1 a traves del else sino si es -1 empujara el producto al array
    const indice = carritoObjeto.findIndex(
        (item) => item.id === producto.id)
    //     console.log(indice)
    
        if(indice === -1){
            carritoObjeto.push(producto)
        } else{
            carritoObjeto[indice].cantidad++
            // multiplicar el precio por la cantidad es mejor hacerlo en el clone al final porque asi se puede quitar o poner dicho precio y no modifica la propiedad  precio en si que es lo importante
            // carritoObjeto[indice].precio = carritoObjeto[indice].cantidad * producto.precio
        }
    
    console.log(carritoObjeto)

    pintarCarrito()
   
}
// ahora haremos otra funcion que seria pintar carrito, que sea un array que ya lo hemos metido en pintarcarrito el carrito objeto ese parametro.
const pintarCarrito =() =>{
   
    carrito.textContent = ""
// En este caso podemos usar el forEach directamente ya que tengo un array y este itera sobre array
    carritoObjeto.forEach((item) =>{
        // clonamos el template
        // El firstElementchild en este caso no es recomendable ya que al haber mas de 1 li lo revienta entoneces hay que quitarlo(estarioa despues desl content de aqui abajo mirar la diferencia del v2 carrito
        const clone = template.content.cloneNode(true)
        // ahora a traves del clone buscanemos los elementos por ejemplo frutilla etc para eso jhacemos que el lead se modifique a la fruta que queremos.
        // los items representa los elementos que metimos en el array del for each
        // si hay varios query selector cogera el primero que esta en el html sino especificamos con otra clase para especificar
        clone.querySelector(".text-white .lead").textContent = item.titulo
        clone.querySelector(".badge").textContent =item.cantidad
        // una vez que teniamos el clone usabamos el fragment para evitar el reflow
        // aqui multiplicaremos la cantidad por el precio en el clone,para que sea dinamico en nuestro sitio web no en el array osea dentro de la propiedad del objeto.
        clone.querySelector("div .lead span").textContent =item.precio * item.cantidad
        // ahora toca los botoncitosde cada uno, para eso necesitamos saber cual es para cada fruta y decirle de forma dinamica cual es.
        // Aqui estamos agregandoo de forma dinamica y no de forma estatica parecido a cuando cogemos de la base de precio
        clone.querySelector(".btn-danger").dataset.id =item.id
        clone.querySelector(".btn-success").dataset.id =item.id
        fragment.appendChild(clone)
    })
    carrito.appendChild(fragment)
    pintarFooter()
    
}
const pintarFooter =() => {
    
    footer.textContent=""
// otra aplicacion del reduce, aparte de hacer la funcion de callback de la suma, tambien le podemos decirle que va a devolver(un array ,un numero o lo que SafeArray, si le decimos 0 nos devuelve un numero)
    const total= carritoObjeto.reduce(
        (acc, current) => acc + current.cantidad * current.precio, 0
    )
   
    // una vez que tenemos el total tenemos que pintarlo, para eso no debemos modificar el tempalte directamente(podemos tener varios template en neustra pagina web y colnes tambien) como siempre clonacion y posterior fragment siempre y  cuando sea un ciclo como anteriormente el forEach para estudiar la constante carrito objeto y al no necesitar hacer ciclos no hace falta usar fragmente en estecaso con el footer se puede usar fragment pero no ahce falta se puede empujar directamente el clone al footer!
    const clone = templateFooter.content.cloneNode(true)
    clone.querySelector("span").textContent = total

    footer.appendChild(clone)
}
// ahora hay que hacer la funcionaldiad de agregar y de quitar
// primero creamos una constante que le pasamos la variable del evento
const btnAumentar = (e) => {

    console.log("me miste click ", e.target.dataset.id)
    // En este caso como voy a sobreescribir tenemos que cambiar la constante carritoObjeto por un let, el map tenia que retornar algo.
    carritoObjeto = carritoObjeto.map(item =>{
        // en este caso esta iterando por cada elemento que tenga un id en especifico, por lo tanto si eso es igual al e.target.dataset.id que tenga el boton puedes aumentarle la cantidad y luego retorna el item conincida o nocoincida si conincide pues con un +1 en cantidad y si no pues con la misma cantidad.
        if(item.id === e.target.dataset.id){
            item.cantidad ++

         }
         return item
        //  y este neuvoa rray se va a remplazar en nneustro carrito objeto, una vez que lo tenemos que tenemos que hacer neuvamente?? pintar el carrito

    })
    pintarCarrito()
}

const btnDisminuir = (e) => {

    console.log("me miste click ", e.target.dataset.id)
    // En este caso como voy a sobreescribir tenemos que cambiar la constante carritoObjeto por un let, el map tenia que retornar algo.
    carritoObjeto = carritoObjeto.filter(item =>{
        // en este caso esta iterando por cada elemento que tenga un id en especifico, por lo tanto si eso es igual al e.target.dataset.id que tenga el boton puedes aumentarle la cantidad y luego retorna el item conincida o nocoincida si conincide pues con un +1 en cantidad y si no pues con la misma cantidad.
        // Cuando llegue a 0 item en disminuir se elimine de nuestro array,por eso podemos usar el filter
        if(item.id === e.target.dataset.id){
            if(item.cantidad>0){
               item.cantidad--
            //    aqui en el if aparece return pero solo eso significa que no devuelve el item ya que es igual a 0 despues de restarle justo encima, sino seria lo que esta debajo return item que devolveria el nuevo item
               if(item.cantidad=== 0) return
               return item
            }
            
            // Este else es para los otros objetos que no coincida el id para que los devuelva tal cual al array CarritoObjeto es decir solo iteractuara con el objeto dentro del array que coincida su id con el targeteado en el button
         } else {return item} 
        //  y este neuvoa rray se va a remplazar en nneustro carrito objeto, una vez que lo tenemos que tenemos que hacer neuvamente?? pintar el carrito

    })
    pintarCarrito()
}
const btnFinalizarCompra =() =>{
    const total= carritoObjeto.reduce(
        (acc, current) => acc + current.cantidad * current.precio, 0
    )
    if (total > 0){
        footer.textContent=" "
        const clone = footerFinalizar.content.cloneNode(true)
        clone.querySelector("span").textContent = ("el total es de" + total + "$")
       
        clone.querySelector(".btn-outline-info").textContent = "quieres seguir comprando?"
        footer.appendChild(clone)
       
    }
    
    // const clone = footer.content.cloneNode(true)
    
}
const btnSeguirComprando =()=> {

    
    footer.textContent =""
   
    const total= carritoObjeto.reduce(
        (acc, current) => acc + current.cantidad * current.precio, 0
    )
   
    // una vez que tenemos el total tenemos que pintarlo, para eso no debemos modificar el tempalte directamente(podemos tener varios template en neustra pagina web y colnes tambien) como siempre clonacion y posterior fragment siempre y  cuando sea un ciclo como anteriormente el forEach para estudiar la constante carrito objeto y al no necesitar hacer ciclos no hace falta usar fragmente en estecaso con el footer se puede usar fragment pero no ahce falta se puede empujar directamente el clone al footer!
    const clone = templateFooter.content.cloneNode(true)
    clone.querySelector("span").textContent = total

    footer.appendChild(clone)
}


