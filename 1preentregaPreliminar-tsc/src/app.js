import express from 'express';
import mainRouter from './router/index.js';
import handlebars from 'express-handlebars';
import path from 'path';

const app = express();

const port = process.env.port || 8080;
app.listen(port, ()=> {console.log(`SERVER UP ${port}`)});

app.use(express.json())
app.use(express.urlencoded({extended: true}))

/*public*/
const publicFolderPath = path.resolve(__dirname, '../public');
app.use(express.static(publicFolderPath))

/* Handlebars */
app.set('view engine', 'handlebars');
const layoutsPath = path.resolve(__dirname, '../views/layouts');
const defaultPath = path.resolve(__dirname, '../views/layouts/index.handlebars');

app.engine(
    'handlebars',
    handlebars({
      layoutsDir: layoutsPath,
      defaultLayout: defaultPath,
    })
  );

app.use('/', mainRouter);

