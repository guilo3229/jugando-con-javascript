const lista =document.querySelector("#lista")
const arrayPaises =["peru","bolivia","colombia"]
// En este caso si se puede , se esta repitiendo el ciclo pero es una array
// arrayPaises.forEach(pais=>{
//     const li =document.createElement("li")
//     li.textContent = pais
//     lista.appendChild(li)
// })

// si no le pones un + antes del igual sobreescribe uno a uno en este caso
arrayPaises.forEach((pais) =>{
    lista.innerHTML += `<li>${pais}</li>`
})
// mucho cuidado porque con el innerHTML se crea un Reflow y hace que puede haber errores y hace que vaya mas lento y tiene problemas de seguridad y lo puede meterle codigo maliciosos