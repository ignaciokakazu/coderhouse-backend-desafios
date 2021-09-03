"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _ClassCarrito = require("../models/ClassCarrito.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/listar', async (req, res) => {
  res.json(await _ClassCarrito.Carrito.getCarritoAll());
});
router.get('/listar/:id', async (req, res) => {
  res.json(await _ClassCarrito.Carrito.getCarritoById(req.params.id));
});
router.post('/agregar/:id_producto', async (req, res) => {
  res.json(await _ClassCarrito.Carrito.addCarritoById(req.params.id_producto));
}); // router.delete('/borrar/producto/:id_producto', async (req,res)=> {
//     res.json(await Carrito.deleteCarritoByIdProducto(req.params.id_producto))
// })

router.delete('/borrar/todo', async (req, res) => {
  res.json(await _ClassCarrito.Carrito.deleteCarritoAll());
});
router.delete('/borrar/:id', async (req, res) => {
  res.json(await _ClassCarrito.Carrito.deleteCarritoById(req.params.id));
});
var _default = router;
exports.default = _default;