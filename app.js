const arrayDeObjetos= require ("./datos");

console.log ("Node corriendo por nuestro servidor");



/*FUNCION FILTER*/

const resultadoFilter = arrayDeObjetos.filter(iterador => iterador.id != 2);

console.log(resultadoFilter);

/*FUNCION FIND*/

const resultadoFind= arrayDeObjetos.find(iterador => iterador.id == 2)

console.log (resultadoFind);





