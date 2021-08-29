import express from 'express'
import path from 'path'
import mainRouter from './routes/index';
import handlebars from 'express-handlebars';
import * as http from 'http';
import io from 'socket.io'; //socket io
import { socketProducts } from './services/socket'; //socket io

//const puerto = 8080;
const app = express();

/*const server = app.listen(puerto, () =>
  console.log('Server Up en puerto', puerto)
);

server.on('error', (err) => {
    console.log('ERROR =>', err);
});*/

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//ruta del public
const publicPath = path.resolve(__dirname, "../public")
app.use(express.static(publicPath))

//configuración handlebars
app.set('view engine', 'handlebars');

const layoutDirPath = path.resolve(__dirname, '../views/layouts');
const defaultLayerPth = path.resolve(__dirname, '../views/layouts/index.handlebars');

app.engine(
  'handlebars',
  handlebars({
    layoutsDir: layoutDirPath,
    defaultLayout: defaultLayerPth,
  })
);

app.use('/', mainRouter)

const myServer = http.Server(app);

//configuración del socket.io
//Init SocketIo Server
socketProducts(myServer);
//socketChat(myServer);

// listening to port...
const port = 8080;
myServer.listen(port, () => console.log(`Server Up port ${port}`));

