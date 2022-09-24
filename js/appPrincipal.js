// con query selector # para los id


// DOMContentLoadede esto espera a que carge todo el DOM
document.addEventListener("DOMContentLoaded",() => {
   fetchData()


})

const fetchData = async() => {
    // console.log("obteniendo")
    try{
        loadingData(true)
        const res = await fetch("https://rickandmortyapi.com/api/character")
        const data = await res.json()
        pintarCard(data)
    } catch (error) {
        console.log(error)


    } finally{
        loadingData(false)

    }
    
}


const pintarCard = data => {
    const cards = document.getElementById("card-dinamicas")
    const templateCard = document.getElementById("template-card").content
    // Fragment para evitar el reflow
    const fragment = document.createDocumentFragment()
     console.log(data)
     data.results.forEach(item => {
        // console.log(item)
        const clone = templateCard.cloneNode(true)
        clone.querySelector("h5").textContent = item.name
        clone.querySelector("p").textContent = item.species
        clone.querySelector(".card-img-top").setAttribute("src", item.image)
        fragment.appendChild(clone)
     });
     cards.appendChild(fragment)
}

const loadingData = (estado) =>{

    const loading = document.getElementById("loading")
    if(estado){
        
        loading.classList.remove("d-none")

    }else {
        loading.classList.add("d-none")
    }
}