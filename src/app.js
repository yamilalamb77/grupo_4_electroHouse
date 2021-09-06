const express = require('express'); //requiero express
const app = express();   // genero instancia app
const path = require('path');
const router = express.Router();
let port = 3030;
let methodOverride = require('method-override');
 const userLogs = require('./middlewares/userLogs'); 





/************************************/
/*--------- ENRUTADORES ------------*/
/************************************/
userRouter = require ('./routes/userRouter'); //user
extraRouter = require('./routes/extraRouter');
productRouter = require('./routes/productRouter');
indexRouter = require('./routes/indexRouter');
adminRouter = require('./routes/admin');


/* Middlewares */
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended : false }));
app.use(methodOverride('_method'));
app.use(userLogs);

 /* VIEWS */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


/*************************************/
/*------------ RUTAS ----------------*/
/*************************************/
app.use('/',indexRouter);
app.use('/', userRouter);
app.use('/products', productRouter);
app.use('/admin',adminRouter);
app.use('/',extraRouter);



app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}\n http://localhost:${port}`));












