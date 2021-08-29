"use strict";

var _classChat = _interopRequireDefault(require("../models/classChat"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class controllerChat {
  constructor() {
    this.url = "./chat.txt";
    this.classChat = new _classChat.default(this.url);
  }

  connect(name) {
    const obj = {
      name: name,
      time: Date.now(),
      msg: `Bienvenido ${name}`
    }; //this.classChat.setChat(obj)

    return obj;
  }

  disconnect(name) {
    const obj = {
      name: name,
      time: time,
      msg: `${name} se ha desconectado`
    }; //this.classChat.setChat(obj)
  }

  sendMessage(name, msg) {
    const obj = {
      name: name,
      time: time,
      msg: msg
    };
    /*this.classChat.messages = await this.classChat.getChat()
    this.classChat.messages.push(obj)
    this.classChat.setChat(obj)*/
  }

}