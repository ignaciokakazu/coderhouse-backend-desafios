import express from 'express'
import path from 'path'
import router from './routes/routes.js'
import routerHb from './routes/routes-hb.js'
import handlebars from 'express-handlebars'


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

//configuración handlebars
app.set('view engine', 'handlebars');

const layoutDirPath = path.resolve(__dirname, '../views/layouts');
const defaultLayerPth = path.resolve(__dirname, '../views/layouts/index.handlebars');

//const partialDirPath = path.resolve(__dirname, '../views/partials');

app.engine(
  'handlebars',
  handlebars({
    layoutsDir: layoutDirPath,
    defaultLayout: defaultLayerPth,
    //partialsDir: partialDirPath,
  })
);

//routerHB
app.use('/', routerHb)