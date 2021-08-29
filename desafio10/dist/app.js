"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _routes = _interopRequireDefault(require("./routes/routes.js"));

var _routesHb = _interopRequireDefault(require("./routes/routes-hb.js"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const puerto = 8080;
const app = (0, _express.default)();
const server = app.listen(puerto, () => console.log('Server Up en puerto', puerto));
server.on('error', err => {
  console.log('ERROR =>', err);
});
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
})); //ruta del public

const publicPath = _path.default.resolve(__dirname, "../public");

app.use(_express.default.static(publicPath)); //router

app.use('/api', _routes.default); //configuración handlebars

app.set('view engine', 'handlebars');

const layoutDirPath = _path.default.resolve(__dirname, '../views/layouts');

const defaultLayerPth = _path.default.resolve(__dirname, '../views/layouts/index.handlebars'); //const partialDirPath = path.resolve(__dirname, '../views/partials');


app.engine('handlebars', (0, _expressHandlebars.default)({
  layoutsDir: layoutDirPath,
  defaultLayout: defaultLayerPth //partialsDir: partialDirPath,

}));
app.use('/', _routesHb.default);