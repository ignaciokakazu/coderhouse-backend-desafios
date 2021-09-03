"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _productos = _interopRequireDefault(require("./productos.js"));

var _carrito = _interopRequireDefault(require("./carrito.js"));

var _hb = _interopRequireDefault(require("./hb.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mainRouter = _express.default.Router();

mainRouter.use('/api/productos', _productos.default);
mainRouter.use('/api/carrito', _carrito.default);
mainRouter.use('/', _hb.default);
mainRouter.get('*', (req, res) => {
  res.status(404).json({
    error: 'Ruta no implementada'
  });
});
var _default = mainRouter;
exports.default = _default;