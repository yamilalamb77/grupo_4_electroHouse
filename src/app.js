const express = require('express'); //requiero express
const app = express();   // genero instancia app
const path = require('path');
const router = express.Router();
let port = 3030;



/* VIEWS */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* Middlewares */
app.use(express.static('public'));
app.use(express.urlencoded({ extended : false }));
app.use(express.json())



/************************************/
/*--------- ENRUTADORES -------------/
/************************************/






/*productLoadingRouter = require('./product/productLoadingRouter');*/ //admin


userRouter = require ('./routes/userRouter'); //user


/*heladeraYLavadoRouter = require ('./routes/user/heladeraYLavadoRouter'); 
shoppingCartRouter = require ('./routes/product/shoppingCartRouter'); 
climatizacionRouter = require('./routes/user/climatizacionRouter'); 
tvYSonidoRouter = require('./routes/user/tvYSonidoRouter'); 
electroRouter = require('./routes/user/electroRouter'); */

homeRouter = require('./routes/homeRouter'); 
extraRouter = require('./routes/extraRouter')

/*************************************/
/*------------ RUTAS ----------------*/
/*************************************/

app.use('/', homeRouter);

app.use('/user', userRouter);
app.use('/product',productRouter)


app.use('/home', homeRouter);
app.use('/shoppingCart', shoppingCartRouter); 
/*app.use('/productLoading', productLoadingRouter); */


/*app.use('/climatizacion', climatizacionRouter);
app.use('/electro', electroRouter);
app.use('/heladeraYLavado', heladeraYLavadoRouter);
app.use('/tvYSonido', tvYSonidoRouter);*/


app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}\n http://localhost:${port}`));












