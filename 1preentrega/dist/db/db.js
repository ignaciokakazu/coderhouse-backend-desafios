"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const urls = {
  carrito: "./carrito.txt",
  productos: "./productos.txt"
};

class Db {
  async read(tipo) {
    try {
      this.url = urls[tipo];

      if (!_fs.default.existsSync(this.url)) {
        throw new Error(`El archivo ${this.url} no existe. Comuniquese con el administrador`);
      }

      const lista = await _fs.default.promises.readFile(this.url, 'utf-8');
      lista ? this.lista = JSON.parse(lista) : this.lista = [];
      return this.lista;
    } catch (error) {
      return {
        error: error.message
      };
    }
  }

  async write(tipo, data) {
    try {
      this.url = urls[tipo];

      if (!_fs.default.existsSync(this.url)) {
        throw new Error(`El archivo ${this.url} no existe. Comuniquese con el administrador`);
      } //si existe el archivo, sino tira error


      await _fs.default.promises.writeFile(this.url, JSON.stringify(data), 'utf-8');
    } catch (error) {
      return error.message;
    }
  }

}

const db = new Db();
exports.db = db;