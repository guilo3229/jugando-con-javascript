


// De esta manera buscas el archivo con punta y barrita siempre con la extension de su archivo, esto es el export con nombre!!
// Ademas se puede invocar el export default poniendolo con los demas de un import pero fuera de las llaves
// Si tenemos esa variable o constante ya en nuestro archivo e importamos una constante con el mismo nombre podemos cambiar dicho nombre para que no haya conflicto para eso usamos el as
import pintarPlatano, {frutilla as fresa ,Fruta } from "./frutas.js"
// el export default es cualquier cosa que mandas que no este definido desde donde vienen es decir cualquier cosa que importes aqui con cualquier nombre te exportara el export por default y los renombre
// import melon from "./frutas.js"
// console.log(melon)
pintarPlatano()
fresa()
const guinda =new Fruta("🍒")
console.log (guinda)