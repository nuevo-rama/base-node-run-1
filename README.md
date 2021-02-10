## Base para correr Node
---------------------

1. `npm init`
2. Definimos como entry point app.js en el package.json
3. `npm install`
4. Crear el archivo app.js
5. Crear el archivo .gitignore

`node_modules/`

---------------------

1. Los datos se obtienen del array de objetos que está en datos.js
2. Armo el array de objetos en datos.js
3. Exporto el módulo

`module.exports = arrayDeObjetos;`

4. Hago un require en app.js que es desde donde voy a utilizar los datos

`const arrayDeObjetos= require ("./datos");`