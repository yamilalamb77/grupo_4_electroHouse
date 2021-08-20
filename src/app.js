const express = require('express'); //requiero express
const app = express();   // genero instancia app
const path = require('path');
/*const { heladeraYLavado } = require('./controllers/user/heladeraYLavadoController');*/
/*const { producDetail } = require('./controllers/product/productDetailController');*/
const router = express.Router();
let port = 3030;



/* VIEWS */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* Middlewares */
app.use(express.static('public'));
app.use(express.urlencoded({ extended : false }));
app.use(express.json())



/*************************************/
/*--------- ENRUTADORES -------------*/
/*************************************/



editProfileRouter = require('./routes/product/editProfileRouter');
enConstruccionRouter = require('./routes/product/enConstruccionRouter');
errorRouter = require ('./routes/product/errorRouter');
homeRouter = require('./routes/product/homeRouter');
loginRouter = require('./routes/product/loginRouter');
productDetailRouter = require('./routes/product/productDetailRouter');
productLoadingRouter = require('./routes/product/productLoadingRouter');
productDetailRouter = require('./routes/product/productDetailRouter');
productDetailRouter = require('./routes/product/productLoadingRouter');
registerRouter = require('./routes/product/registerRouter'); 
shoppingCartRouter = require ('./routes/product/shoppingCartRouter');



climatizacionRouter = require('./routes/user/climatizacionRouter');
electroRouter = require('./routes/user/electroRouter');
heladeraYLavadoRouter = require ('./routes/user/heladeraYLavadoRouter');
tvYSonidoRouter = require('./routes/user/tvYSonidoRouter');






/*************************************/
/*------------ RUTAS ----------------*/
/*************************************/

app.use('/', homeRouter);

app.use('/enConstruccion', enConstruccionRouter);
app.use('/editProfile', editProfileRouter);
app.use('/home', homeRouter);
app.use('/login', loginRouter);
app.use('/productDetail', productDetailRouter);
app.use('/register', registerRouter);
app.use('/shoppingCart', shoppingCartRouter); 
app.use('/productLoading', productLoadingRouter); 


app.use('/climatizacion', climatizacionRouter);
app.use('/electro', electroRouter);
app.use('/heladeraYLavado', heladeraYLavadoRouter);
app.use('/tvYSonido', tvYSonidoRouter);


app.use('*', errorRouter);

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}\n http://localhost:${port}`)); 












