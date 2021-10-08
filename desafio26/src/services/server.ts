import config from '../config/config';
import express from 'express'
import path from 'path'
import mainRouter from '../routes/index';
import handlebars from 'express-handlebars';
import * as http from 'http';
//import cookieParser from 'cookie-parser';
import session from 'express-session';
//import MongoStore from 'connect-mongo';
import passport from '../middleware/auth';
//import { nextTick } from 'process';

// const advancedOptions:Object = { useNewUrlParser: true, useUnifiedTopology: true };

const app = express();

/*Desde acá, passport */
app.use(express.json())
//cookies
// app.use(cookieParser());
// const StoreOptions = {
//   store: MongoStore.create({
//     mongoUrl: config.MONGO_ATLAS_URL,
//     mongoOptions: advancedOptions,
//   }),
//   secret: 'miFirma',
//   resave: false,
//   saveUninitialized: false,
//   // cookie: {
//   //     maxAge: 500 //10000
//   // },
// };

// app.use(cookieParser());
// app.use(session(StoreOptions));
app.use(
  session({
    secret: 'miFirma',
    resave: true,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  //esto sirve para el logueo correcto
  next();
});

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

