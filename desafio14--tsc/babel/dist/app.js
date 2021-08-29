"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _index = _interopRequireDefault(require("./routes/index"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var http = _interopRequireWildcard(require("http"));

var _socket = _interopRequireDefault(require("socket.io"));

var _socket2 = require("./services/socket");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//socket io
//socket io
//const puerto = 8080;
const app = (0, _express.default)();
/*const server = app.listen(puerto, () =>
  console.log('Server Up en puerto', puerto)
);

server.on('error', (err) => {
    console.log('ERROR =>', err);
});*/

app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
})); //ruta del public

const publicPath = _path.default.resolve(__dirname, "../public");

app.use(_express.default.static(publicPath)); //configuración handlebars

app.set('view engine', 'handlebars');

const layoutDirPath = _path.default.resolve(__dirname, '../views/layouts');

const defaultLayerPth = _path.default.resolve(__dirname, '../views/layouts/index.handlebars');

app.engine('handlebars', (0, _expressHandlebars.default)({
  layoutsDir: layoutDirPath,
  defaultLayout: defaultLayerPth
}));
app.use('/', _index.default);
const myServer = http.Server(app); //configuración del socket.io
//Init SocketIo Server

(0, _socket2.socketProducts)(myServer); //socketChat(myServer);
// listening to port...

const port = 8080;
myServer.listen(port, () => console.log(`Server Up port ${port}`));