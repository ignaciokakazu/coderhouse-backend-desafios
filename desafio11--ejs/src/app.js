import express from 'express'
import path from 'path'
import router from './routes/routes.js'
import routerEjs from './routes/routes-ejs'

const puerto = 8080;
const app = express();

const server = app.listen(puerto, () =>
  console.log('Server Up en puerto', puerto)
);

server.on('error', (err) => {
    console.log('ERROR =>', err);
});

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//ruta del public
const publicPath = path.resolve(__dirname, "../public")
app.use(express.static(publicPath))

//router
app.use('/api', router)

//configuración ejs
app.set('view engine', 'ejs');
const viewsPath = path.resolve(__dirname, '../views');
app.set('views', viewsPath);

//routerHB
app.use('/', routerEjs)