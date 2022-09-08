const lista =document.querySelector("#lista")
const arrayPaises =["peru","bolivia","colombia"]
const fragment = document.createDocumentFragment();
// Lo hacemos como un template para que de vueltas y luego lo listamos con el comando HTML
let template = ""
arrayPaises.forEach((pais) =>{
    template += `
    <li class="list">
    <b> Pais:</b>
    <span class="text-primary">${pais}</span>        
</li>`;

    // const li = document.createElement("li")
    // li.className = "lista"
    
    // const b = document.createElement("b")
    // b.textContent = "pais: "
    
    // const span = document.createElement("span")
    // span.className= "text-primary"
    // span.textContent =pais

    // li.appendChild(b)
    // li.appendChild(span)
    // fragment.appendChild(li)

})   
s
lista.innerHTML = template