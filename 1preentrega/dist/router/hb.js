"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _ClassProductos = require("../models/ClassProductos");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/', (req, res) => {
  res.render('main');
});
router.get('/admin', (req, res) => {
  res.render('login');
});
router.get('/admin/error', (req, res) => {
  res.render('error');
});
router.get('/admin/index', async (req, res) => {
  const prod = await _ClassProductos.Productos.readProducto();
  const datos = {
    prod: prod //solo se puede mandar un objeto, no arrays

  };
  res.render('crud', datos);
});
var _default = router;
exports.default = _default;