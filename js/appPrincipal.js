const lista =document.querySelector("#lista")
const fragment = document.createDocumentFragment();
const liTemplate = document.querySelector('#liTemplate')
const arrayPaises =["peru","bolivia","colombia"]
// si le ponemos la variable e y luego ponemos e.target nos da el valor de cada uno de los paises en consola, se puede hacer como que alk hacer clck agrego ese producto al carrito de compra posteriormente
const clickPaises =(e)=> console.log("me diste click", e.target)
arrayPaises.forEach((pais)=>{
// En este caso para que funcione la constante click es necesario ponerle el firstElementChild soluciona el problema si vamos a agregar un addeventListener a nuestra constante clone en este caso 
    const clone =liTemplate.content.firstElementChild.cloneNode(true)
    clone.querySelector('span').textContent = pais
    clone.addEventListener("click", clickPaises)
    fragment.appendChild(clone)
})
lista.appendChild(fragment)
// const clone = liTemplate.content.cloneNode(true)

// clone.querySelector(".text-primary").textContent = "agregue a atraves de un template"


// lista.appendChild(clone)