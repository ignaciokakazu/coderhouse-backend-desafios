"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _routes = _interopRequireDefault(require("./routes/routes.js"));

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
}));

const publicPath = _path.default.resolve(__dirname, "../public");

app.use(_express.default.static(publicPath));
app.use("/api", _routes.default);