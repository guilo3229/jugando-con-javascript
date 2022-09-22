

const posts = [
    {
        userId: 1,
        id: 1,
        title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
];

// promesa
// const findPostById = (id) => {
    
//     const post = posts.find(item=>item.id === id)
//     // En este caso retornamos una nueva promesa con 2 argumentos que le podemos poner el nombre que nos salga del pito,pero que es la 1º ->respuesta satisfactporia y una 2-> negativa
//     return new Promise((resolve,reject) =>{

//         if(post){
//             resolve(post)
//         }else{
//             reject("no se encontro id " + id)
//         }

//     })

// }
const findPostById = (id) => 
    new Promise((resolve,reject) => {
// vamos a simular que se lee de una base de datos muy grande y hacemos que se demore un poco
    setTimeout(()=>{
        const post = posts.find((item) => item.id === id)
        if(post){
        resolve(post)
        } else { 
        reject("no se encontro id " +id)
        }
        // esta en milisegundo le metemos 2k que son 2000ms y por lo tanto 2s
    },2000)
    })


// findPostById(2)
// // El then para sacar la parte posiiva de la promesa y el catch la negativa con su argumento de porque es negativa
//     .then((post) => console.log(post))
//     .catch((e) => console.log(e))
// regla de oro soloamentedentro del async puede haber un away, pero dentro del async puede tenerlo o no tenerlo, pero si lo tiene tendra que ser dentro del async, el await y async solamente se puede con promesas, async y away esta optimizado para guardar y ejecutar promesas
const buscar = async () =>{

    try{
        // se demora 4s egundos 1 por cada promesa, esta solucion es solo valida si el postdDos depende del postUno y antes de llegar a la console pasa la segunda constante await anidada, pero en javascript tenemos el promiseall por ello vamos a haccer una array de todas las promesas que vamos a hacer, en este caso ejecuta ambas en los 2 segundos y no suma los 2 segundos de la funcion promesa primera y luego de la segunda
        const resPost = await Promise.all([
            // Hay que tener cuidado con el PromiseAll siempre y cuando todas las promesas se cumplan sino no te mandara si una si y la otra no, puede ser que te venga bien y te sirva para programar algo
            findPostById(4),
            findPostById(2)
        ])
        console.log(resPost)
        // Si queremos especificar alguna parte de los objetos del array se haria:
        console.group(resPost[0].title, resPost[1].title)
    // const postUno = await findPostById(1)
    // const postDos = await findPostById(2)
    // console.log(postUno.title, postDos.title)
    } catch (error){
        console.log(error)
    } finally{
        console.log("se ejecuta si o si")

    }
}

buscar()
// no espera los 2 segundos porque se ejecuta el temporizardor de arriba pero java sigue
console.log("fin del codigo")