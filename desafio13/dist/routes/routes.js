"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _classProductos = _interopRequireDefault(require("../models/classProductos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const productos = new _classProductos.default("./productos.txt");
router.get('/productos/listar', async (request, response) => {
  await productos.getListaProductos(); //controller getProductos

  response.json(productos.listaProductos);
});
router.get('/productos/listar/:id', async (request, response) => {
  await productos.getListaProductos();
  const id = request.params.id;
  const msg = productos.getProducto(id); //controller getProductoById

  response.json(msg);
});
router.post('/productos/guardar', async (req, res) => {
  const productoNuevo = req.body;
  await productos.getListaProductos();
  const msg = await productos.addProducto(productoNuevo); //controller addProducto

  res.redirect("/"); // res.json({
  //     msg
  // });
});
router.delete('/productos/borrar/:id', async (req, res) => {
  const id = req.params.id;
  await productos.getListaProductos();
  const deleted = productos.deleteProducto(id); //controller deleteProducto

  res.json({
    producto: deleted
  });
});
router.put('/productos/actualizar/:id', async (req, res) => {
  const id = req.params.id;
  const producto = req.body;
  await productos.getListaProductos();
  const msg = await productos.updateProducto(id, producto); //controller updateProducto

  res.json({
    producto: msg
  });
});
var _default = router;
exports.default = _default;