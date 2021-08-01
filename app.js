const express = require('express'); //requiero express
const app = express();   // genero instancia app
const path = require('path');
const router = express.Router();
let port = 3030;

app.use(express.static('public'));

/*ROUTERS*/
headerRouter = require('.routes/headerRouter');
loginRouter = require('.routes/loginRouter');
registerRouter = require('.routes/registerRouter');



/*ROUTES*/
app.use('/register',registerRouter);
app.use('/login', loginRouter);
app.use('/header', headerRouter);





app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}\n http://localhost:${port}`));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'));
})

/* app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/productDetail.html'));
})

app.get('/productCar', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/productCar.html'));
})
 */