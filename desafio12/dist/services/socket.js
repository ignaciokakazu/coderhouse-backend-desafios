"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initWsServer = void 0;

var _socket = _interopRequireDefault(require("socket.io"));

var _classProductos = _interopRequireDefault(require("../models/classProductos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const initWsServer = server => {
  const io = (0, _socket.default)(server);
  io.on('connection', socket => {
    console.log('Nueva Conexion establecida!'); //Carga de productos

    socket.on('productoNuevo', async data => {
      const productos = new _classProductos.default("./productos.txt");
      await productos.getListaProductos();
      console.log(productos.listaProductos);
      productos.addProducto(data);
      io.emit('productos', productos.listaProductos);
    });
  });
  return io;
};

exports.initWsServer = initWsServer;