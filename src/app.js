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


homeRouter = require('./routes/product/homeRouter');
loginRouter = require('./routes/product/loginRouter');
climatizacionRouter = require('./routes/user/climatizacionRouter');
electroRouter = require('./routes/user/electroRouter');
heladeraYLavadoRouter = require ('./routes/user/heladeraYLavadoRouter');
tvYSonidoRouter = require('./routes/user/tvYSonidoRouter');
registerRouter = require('./routes/product/registerRouter'); 
productDetailRouter = require('./routes/product/productDetailRouter');
enConstruccionRouter = require('./routes/product/enConstruccionRouter');
shoppingCartRouter = require ('./routes/product/shoppingCartRouter');


/*************************************/
/*------------ RUTAS ----------------*/
/*************************************/

app.use('/', homeRouter);
app.use('/login', loginRouter);
app.use('/climatizacion', climatizacionRouter);
app.use('/electro', electroRouter);
app.use('/heladeraYLavado', heladeraYLavadoRouter);
app.use('/tvYSonido', tvYSonidoRouter);
app.use('/register', registerRouter);
app.use('/productDetail', productDetailRouter);
app.use('/enConstruccion', enConstruccionRouter);
app.use('/shoppingCart', shoppingCartRouter); 


app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}\n http://localhost:${port}`)); 














/*

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'));
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname,'/src/views/home.html'));
})
app.get('/header', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/header.html'))
})


app.get('/shoppingCart', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/shoppingCart.html'))
})

app.get('/enConstrucion', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/enConstrucion.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/login.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/register.html'))
})

app.get('/footer', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/footer.html'))
})

app.get('/electro', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/electro.html'));
})

app.get('/heladeraYLavado', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/heladeraYLavado.html'));
})

app.get('/climatizacion', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/climatizacion.html'));
})

app.get('/productLoading', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/productLoading.html'));
})


app.get('/tvYSonido', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/tvYSonido.html'));
})

 app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/productDetail.html'));
})

app.get('/editProfile', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/editProfile.html'))
})

app.get('/productLoading', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/productLoading.html'))
})
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/404.html'))
})  
 */
