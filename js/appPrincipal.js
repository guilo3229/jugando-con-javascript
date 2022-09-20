// Esto nos ayuda a encontrar dicha palabra en la expresion de caracteres no comillas
// notacion literal:
const regExp = /bluuweb/i;
// puede instanciar un ojeto hacer una nueva instancia del objeto
// notacion de objeto, en este caso si que estaria entrecomillado aunque arriba son barritas:

// i Ignora mayúsculas y minúsculas. Se suele denominar insensible a mayús/minús.
// g Búsqueda global. Sigue buscando coincidencias en lugar de pararse al encontrar una.
// m Multilínea. Permite a ^ y $ tratar los finales de línea \r o \n
// la RegExp de dentro tiene que ser diferente aa la constante de arriba es en mayuscula la primera diferente constante ojo sino no funciona
const regExpObjeto = new RegExp("bluuweb", "i");

// como evaluar, si la enceuntra verdadero sino falso encuentra esa palabra en una string aunque sea una frase dira que existe osea las letras tienen que existir seguidamente aunque sea una palabra incluso mayor es decir si buscamos la palabra codo y no existe esa palabra sola pero existe codomania junto nos dara true
console.log(regExp.test("bl uuwebsdf"))