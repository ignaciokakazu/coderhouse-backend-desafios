"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _routes = _interopRequireDefault(require("./routes/routes.js"));

var _routesEjs = _interopRequireDefault(require("./routes/routes-ejs"));

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

app.use('/api', _routes.default); //configuración ejs

app.set('view engine', 'ejs');

const viewsPath = _path.default.resolve(__dirname, '../views');

app.set('views', viewsPath); //routerHB

app.use('/', _routesEjs.default);