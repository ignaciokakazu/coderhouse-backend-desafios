"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.socketChat = void 0;

var _socket = _interopRequireDefault(require("socket.io"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const socketChat = server => {
  const io = (0, _socket.default)(server);
  io.on('connection', socket => {
    console.log('Nueva Conexion establecida! al chat');
  });
  return io;
};

exports.socketChat = socketChat;