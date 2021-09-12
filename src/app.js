const express = require('express'); //requiero express
const app = express();   // genero instancia app
const path = require('path');
const router = express.Router();
let cookieParser = require('cookie-parser')
let session = require('express-session');
let port = 3030;
let methodOverride = require('method-override');
 const userLogs = require('./middlewares/userLogs'); 

/*--------- ENRUTADORES ------------*/

userRouter = require ('./routes/userRouter'); //user
productRouter = require('./routes/productRouter');
indexRouter = require('./routes/indexRouter');
adminRouter = require('./routes/admin');


/* Middlewares */
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended : false }));
app.use(methodOverride('_method'));
app.use(cookieParser())
app.use(session({
    secret: "electroHouse",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30000 }
}))
app.use(userLogs);

 /* VIEWS */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


/*************************************/
/*------------ RUTAS ----------------*/
/*************************************/
app.use('/',indexRouter);
app.use('/user', userRouter);
app.use('/products', productRouter);
app.use('/admin',adminRouter);




app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}\n http://localhost:${port}`));












