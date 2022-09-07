const lista =document.querySelector("#lista")
const arrayPaises =["peru","bolivia","colombia"]
// Es un metodo y por lo tanto lleva parentesis
const fragment = document.createDocumentFragment()

arrayPaises.forEach((pais)=>{
    const newNode =document.createElement("li")
    newNode.textContent = pais
    
    const referenceNode =fragment.firstChild
    fragment.insertBefore(newNode,referenceNode)
})

lista.appendChild(fragment)
// Se podra  hacer que la lista se lea de final ahacia atras?? si con insert Before