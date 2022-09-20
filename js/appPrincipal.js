

// [ ] Rango de carácteres. Cualquiera de los caracteres del interior de los corchetes.
// | Establece una alternativa: lo que está a la izquierda o lo que está a la derecha.
const regExp = /[A-Za-z0-9]/i;


// const regExpObjeto = new RegExp("bluweb|bluuweb", "i");


// busca el u y el e por separado esta encontrando la u y la e con los corchetes
console.log(regExp.test("*ñ5"))