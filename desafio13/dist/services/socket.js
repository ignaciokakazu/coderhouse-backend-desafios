"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.socketProducts = void 0;

var _socket = _interopRequireDefault(require("socket.io"));

var _classProductos = _interopRequireDefault(require("../models/classProductos"));

var _classChat = _interopRequireDefault(require("../models/classChat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const socketProducts = server => {
  const io = (0, _socket.default)(server); //instancia el chat

  const chat = new _classChat.default();

  (async () => {
    await chat.setChat();
  })();

  io.on('connection', socket => {
    console.log('Nueva Conexion establecida!'); //Carga de productos

    socket.on('productoNuevo', async data => {
      const productos = new _classProductos.default();
      await productos.getListaProductos();
      productos.addProducto(data);
      io.emit('productos', productos.listaProductos);
    });
    /*  CHAT */
    //nueva conexión al chat

    socket.once('chatConnect', async data => {
      const msg = await chat.connect(data);
      io.emit('chatConnectMessage', msg);
    }); //nuevo mensaje

    socket.on('emitNewMessage', async data => {
      const msg = await chat.setMessage(data);
      io.emit('receiveNewMessage', msg);
    }); //desconexión del chat

    socket.once('chatDisconnect', async data => {
      const msg = await chat.disconnect(data);
      /*console.log(socket.client.id)*/
      //socket.emit('chatDisconnectMessage', msg)

      io.emit('chatDisconnectMessage', msg);
      socket.removeAllListeners('chatConnect');
      socket.removeAllListeners('emitMessage');
      socket.removeAllListeners('emitNewMessage');
      socket.removeAllListeners('chatDisconnect');
    });
  });
  return io;
};

exports.socketProducts = socketProducts;