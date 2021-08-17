const express = require('express'); //requiero express
const app = express();   // genero instancia app
const path = require('path');
const router = express.Router();
let port = 3030;



/* VIEWS */
app.set('views', path.join(__dirname, 'views/product'));
app.set('view engine', 'ejs');

/* Middlewares */
app.use(express.static('public'));
app.use(express.urlencoded({ extended : false }));
app.use(express.json())


/*enrutadores*/
/* headerRouter = require('./routes/product/headerRouter'); */
loginRouter = require('./routes/product/loginRouter');
registerRouter = require('./routes/product/registerRouter'); 
 
/*Rutas*/
app.use('/register',registerRouter); 
app.use('/login', loginRouter);
/* app.use('/header', headerRouter);  */


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