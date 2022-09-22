console.log("funcionando")

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

// callback usa una funcion como argumento de otra funcion
// Lo que quiero logarar es que cuando ponga 1-2-3 me mande las propiedades del objeto 
const findPostById = (id, callback) =>{
    const post = posts.find(item=>item.id ===id)
    if(post){
        callback(null,post)
    }else{
        callback("no se encontro el post con id " + id)

    }
   

    
}
findPostById(2,(err,post) =>{
    if (err) return console.log(err)
    
    console.log(post)
        findPostById(1,(err,post)=>{
            if (err) return console.log(err)
    
            console.log(post)
            console.log(post)
            findPostById(3,(err,post)=>{
                if (err) return console.log(err)
    
             console.log(post)
         })
        })
})