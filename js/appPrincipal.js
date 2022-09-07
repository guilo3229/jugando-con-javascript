const lista =document.querySelector("#lista")
const arrayPaises =["peru","bolivia","colombia"]
const fragment = document.createDocumentFragment();
{/* <li class="list">
            <b>Pais:</b>
            <span class= text-primary">Aqui va elpais</span>        
</li> */}

arrayPaises.forEach((pais) =>{

    const li = document.createElement("li")
    li.className = "lista"
    
    const b = document.createElement("b")
    b.textContent = "pais: "
    
    const span = document.createElement("span")
    span.className= "text-primary"
    span.textContent =pais

    li.appendChild(b)
    li.appendChild(span)
    fragment.appendChild(li)

})

lista.appendChild(fragment)