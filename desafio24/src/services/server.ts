import express from 'express'
import path from 'path'
import mainRouter from '../routes/index';
import handlebars from 'express-handlebars';
import * as http from 'http';
import cookieParser from 'cookie-parser';

const app = express();

// const mySecret = 'mySecret';
app.use(cookieParser());

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//ruta del public
const publicPath = path.resolve(__dirname, "../../public")
app.use(express.static(publicPath))

//configuración handlebars
app.set('view engine', 'handlebars');

const layoutDirPath = path.resolve(__dirname, '../../views/layouts');
const defaultLayerPth = path.resolve(__dirname, '../../views/layouts/index.handlebars');

app.engine(
  'handlebars',
  handlebars({
    layoutsDir: layoutDirPath,
    defaultLayout: defaultLayerPth,
  })
);

app.use('/', mainRouter);

const myServer = new http.Server(app);

myServer.on('error', (err) => {
    console.log(`Error: ${err}`);
})

export default myServer;

