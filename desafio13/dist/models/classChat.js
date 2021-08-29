"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class classChat {
  constructor() {
    this.url = "./chat.txt";
  }

  async setChat() {
    try {
      let chat;

      if (_fs.default.existsSync(this.url)) {
        chat = await _fs.default.promises.readFile(this.url, 'utf-8');
      }

      chat ? this.messages = JSON.parse(chat) : this.messages = [];
    } catch (err) {
      console.log(err.message);
    }
  }

  getChat() {
    return this.messages;
  }

  async connect(name) {
    try {
      const obj = {
        name: name,
        time: (0, _moment.default)().format('DD/MM/YYYY, h:mm:ss a'),
        msg: `Bienvenido/a ${name}`
      };
      await this.setMessage(obj);
      return this.messages;
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  }

  async disconnect(name) {
    const obj = {
      name: name,
      time: (0, _moment.default)().format('DD/MM/YYYY, h:mm:ss a'),
      msg: `${name} se ha desconectado`
    };
    await this.setMessage(obj);
    return obj;
  }

  async setMessage(data) {
    const obj = {
      name: data.name,
      time: (0, _moment.default)().format('DD/MM/YYYY, h:mm:ss a'),
      msg: data.msg
    };
    this.messages.push(obj);
    await _fs.default.promises.writeFile(this.url, JSON.stringify(this.messages), 'UTF-8');
    return obj;
  }

}

exports.default = classChat;