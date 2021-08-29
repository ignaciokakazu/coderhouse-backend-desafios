"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class classProductos {
  constructor(url) {
    this.url = url;
  }

  async getListaProductos() {
    try {
      if (_fs.default.existsSync(this.url)) {
        const data = await _fs.default.promises.readFile(this.url, "utf-8");
        this.listaProductos = JSON.parse(data);
      } else {
        this.listaProductos = [];
        console.log("no hay elementos");
        console.log(__dirname);
        console.log(__dirname, "../productos.txt");
        console.log(this.url);
      }
    } catch (err) {
      console.log(err);
    }
  }

  getProducto(id) {
    const filtrado = this.listaProductos.filter(element => element.id == id);
    return filtrado;
  }

  async addProducto(obj) {
    const id = this.listaProductos.length;
    const objTemp = {
      "title": obj.title,
      "price": obj.price,
      "thumbnail": obj.thumbnail,
      "id": id
    };
    this.listaProductos.push(objTemp);
    await _fs.default.promises.writeFile(this.url, JSON.stringify(this.listaProductos), "utf-8");
  }

}
/*
const productos = new classProductos("./productos.txt");

(async () => { //lo saqué de https://yashints.dev/blog/2019/08/17/js-async-await async IIFE
    await productos.setListaProductos();
    
    console.log(productos.url)
    console.log(productos.listaProductos)
  })();

*/


exports.default = classProductos;