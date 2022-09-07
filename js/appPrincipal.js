// muchas veces los elmentos los guardabmos en una variable
const h1 = document.getElementById("tituloWeb")
// hacemos una constante del elemento para tener mas facilidad a la hora de trabajar con el
console.log(h1.id)
console.log(h1.style)
console.log(h1.tagName)
console.log(h1.textContent)
// todas son propiedades ya que no tienen corchetes
// tambien se puede modificar la propiedad del elemento, le ponen el antes del nombre
h1.textContent = "nuevo text desde js"
// modificando todo atraves de javascript
h1.style.backgroundColor = "red"
h1.style.color = "white"
un beneficio de capturarlo en una variable es que podemos modificar los elementos de manera facil.