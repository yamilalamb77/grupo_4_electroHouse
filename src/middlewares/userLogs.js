const fs = require('fs'); 
const userLog = (req, res, next) =>{
fs.appendFileSync('src/logs/userLogs.txt', `El usuario ingreso a la ruta: ${req.url}\n`)/*   requiero de fs, el metodo appenFindSYNC el 1er parametro recibe EL ARCHIVO QUE TENGO QUE ESCRIBIR, quiero que haga algo
el 2do parametro lo que tiene que escribir, la ruta varia el valor con template string (``)  para escribir el mjs y pasamos un valor variable con req.url capturamos la ruta*/
next()/* una vez que cumple y hace lo que tiene que hacer, se pone next*/
} /*creo la funcion --con fs siempre se parte de la raiz*/


/*exporto la funcion*/


module.exports = userLog /* aca lo aplicamos a nivel app, todos los middlewares que van a nivel aplicacion, van en el entry point*/