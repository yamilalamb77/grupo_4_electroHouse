const express = require('express'); //requiero express
const app = express();   // genero instancia app
const path = require('path');
const router = express.Router();
let port = 3030;

app.use(express.static('public'));


/*ROUTERS*/
/*headerRouter = require('.routes/headerRouter');
loginRouter = require('.routes/loginRouter');
registerRouter = require('.routes/registerRouter'); */

/*ROUTES*/
/*app.use('/register',registerRouter);
app.use('/login', loginRouter);
app.use('/header', headerRouter); */

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



app.get('/tvYSonido', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/tvYSonido.html'));
})

 app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/productDetail.html'));
})

app.get('/editProfile', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/editProfile.html'))
})
/*  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/404.html'))
})  
 */

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}\n http://localhost:${port}`)); 