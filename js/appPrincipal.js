const lista =document.querySelector("#lista")
const fragment = document.createDocumentFragment();
const liTemplate = document.querySelector('#liTemplate')
const arrayPaises =["peru","bolivia","colombia"]

arrayPaises.forEach((pais)=>{

    const clone =liTemplate.content.cloneNode(true)
    clone.querySelector('span').textContent = pais

    fragment.appendChild(clone)
})
lista.appendChild(fragment)
// const clone = liTemplate.content.cloneNode(true)

// clone.querySelector(".text-primary").textContent = "agregue a atraves de un template"


// lista.appendChild(clone)