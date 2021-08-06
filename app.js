const express = require('express'); //requiero express
const app = express();   // genero instancia app
const path = require('path');
const router = express.Router();
let port = 3030;

app.use(express.static('public'));

/* ROUTERS
headerRouter = require('.routes/headerRouter');
/*ROUTERS*/
/*headerRouter = require('.routes/headerRouter');
loginRouter = require('.routes/loginRouter');
registerRouter = require('.routes/registerRouter');*/



/*ROUTES
app.use('/register',registerRouter);

/*ROUTES*/
/*app.use('/register',registerRouter);
app.use('/login', loginRouter);
app.use('/header', headerRouter); */

 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/header.html'))
})

app.get('/shoppingCart', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/shoppingCart.html'))
})

app.get('/enConstrucion', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/enConstrucion.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'));
})

 app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/productDetail.html'));
})
app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}\n http://localhost:${port}`));