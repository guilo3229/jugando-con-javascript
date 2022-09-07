const inputColor = document.querySelector("#inputColor")
const btnVisualizar = document.querySelector("#btnVisualizar")
const parrafoExa = document.querySelector("#parrafoExa")
const cardColor = document.querySelector("#cardColor")

// console.log(inputColor)
// console.log(btnVisualizar)
// console.log(parrafoExa)
// console.log(cardColor)

btnVisualizar.addEventListener("click", ()=>{
    console.log("me diste click")
    // como es un InputDeviceInfo,tenemos una propiedad y la llamamos
    console.log(inputColor.value)
    // una vez que tenemos ese color vemos como interferir en esos elementos del HTML
    parrafoExa.textContent= inputColor.value
    
    cardColor.style.backgroundColor = inputColor.value
    
})