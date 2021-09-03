"use strict";

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./router/index.js"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const port = process.env.port || 8080;
app.listen(port, () => {
  console.log(`SERVER UP ${port}`);
});
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
/*public*/

const publicFolderPath = _path.default.resolve(__dirname, '../public');

app.use(_express.default.static(publicFolderPath));
/* Handlebars */

app.set('view engine', 'handlebars');

const layoutsPath = _path.default.resolve(__dirname, '../views/layouts');

const defaultPath = _path.default.resolve(__dirname, '../views/layouts/index.handlebars');

app.engine('handlebars', (0, _expressHandlebars.default)({
  layoutsDir: layoutsPath,
  defaultLayout: defaultPath
}));
app.use('/', _index.default);