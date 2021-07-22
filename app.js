let express = require('express'); //requiero express
let app = express();   // genero instancia app
let port = 3030;
let path = require('path');

app.use(express.static('public'))

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}\n http://localhost:${port}`
));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'));
})

app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/productDetail.html'));
})

app.get('/productCar', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/productCar.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/login.html')); 
})