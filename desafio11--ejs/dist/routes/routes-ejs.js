"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _classProductos = _interopRequireDefault(require("../models/classProductos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/productos/vista', async (request, response) => {
  const productos = new _classProductos.default("./productos.txt");
  await productos.getListaProductos();
  const datos = {
    productos: productos.listaProductos
  };
  response.render('vista.ejs', datos);
});
router.get('/', (request, response) => {
  response.render('index.ejs');
});
var _default = router;
exports.default = _default;