"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Productos = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _db = require("../db/db.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ClassProductos {
  async readProducto() {
    try {
      this.lista = await _db.db.read("productos");
      return this.lista;
    } catch (error) {
      return {
        error: error.message
      };
    }
  }

  async addProducto(req) {
    try {
      this.lista = await _db.db.read("productos");
      const prodId = this.generarId(this.lista);

      if (!prodId) {
        throw new Error('Problema para generar el ID. Comuniquese con el administrador');
      }

      if (this.validacion(req) != "") {
        throw new Error(this.validacion(req));
      }

      ;
      const prod = {
        id: prodId,
        timestamp: (0, _moment.default)().format('yy-MM-DD HH:mm:ss'),
        nombre: req.nombre,
        descripcion: req.descripcion,
        codigo: req.codigo,
        foto: req.foto,
        precio: req.precio,
        stock: req.stock
      };
      this.lista.push(prod);
      await _db.db.write("productos", this.lista);
      const obj = {
        msg: "Producto agregado",
        id: prodId
      };
      return obj;
    } catch (error) {
      return {
        error: error.message
      };
    }
  }

  generarId(productos) {
    const largo = productos.length;
    let max = 0;

    for (let i = 0; i < largo; i++) {
      if (parseInt(productos[i].id) > max) {
        max = productos[i].id;
      }
    }

    console.log(parseInt(max) + 1);
    return parseInt(max) + 1;
  }

  async deleteProducto(id) {
    try {
      this.lista = await _db.db.read("productos");
      const productos = this.lista.filter(prod => prod.id == id);

      if (!productos.length) {
        throw new Error('Id no disponible');
      }

      const filtrada = this.lista.filter(prod => prod.id != id);
      await _db.db.write("productos", filtrada);
      return {
        msg: "Producto eliminado"
      };
    } catch (error) {
      return {
        error: error.message
      };
    }
  }

  async getProductoById(id) {
    try {
      this.lista = await _db.db.read("productos");
      const prod = this.lista.filter(prod => prod.id == id);

      if (prod.length) {
        return prod;
      } else {
        throw new Error('Producto no se encuentra');
      }
    } catch (error) {
      return {
        error: error.message
      };
    }
  }

  async updateProducto(id, req) {
    try {
      this.lista = await _db.db.read("productos");
      let productos = this.lista.filter(prod => prod.id == id);

      if (!productos.length) {
        throw new Error('No se encuentra el ID de producto');
      }

      ;

      if (this.validacion(req) != "") {
        throw new Error(this.validacion(req));
      }

      ; //console.log(prod)

      let obj = {
        id: id,
        nombre: req.nombre,
        descripcion: req.descripcion,
        codigo: req.codigo,
        foto: req.foto,
        precio: req.precio,
        stock: req.stock
      };
      console.log(obj);
      productos = this.lista.filter(prod => prod.id != id);
      productos.push(obj);
      this.lista = productos;
      console.log(this.lista);
      await _db.db.write("productos", this.lista);
      return {
        msg: "Actualizado",
        prod: obj
      };
    } catch (error) {
      return {
        error: error.message
      };
    }
  }

  validacion(req) {
    let msg = "";

    if (typeof req.nombre != 'string') {
      msg += `Nombre debe ser texto. Nombre ${req.nombre}. `;
    }

    ;

    if (!req.nombre) {
      msg += `Nombre es un dato requerido.`;
    }

    ;

    if (typeof req.descripcion != 'string') {
      msg += `Descripción debe ser texto. Descripción ${req.descripcion}. `;
    }

    ;

    if (!req.descripcion) {
      msg += `Descripción es un dato requerido. `;
    }

    ;

    if (!req.codigo) {
      msg += `Código es un dato requerido. `;
    }

    ;

    if (!req.foto) {
      msg += `Foto es un dato requerido. `;
    }

    ;

    if (typeof req.foto != 'string') {
      msg += `Foto debe ser texto. Foto ${req.foto}. `;
    }

    ;

    if (isNaN(req.precio)) {
      msg += `Precio debe ser numérico. Precio ${req.precio}. `;
    }

    ;

    if (!req.precio) {
      msg += `Precio es un dato requerido. `;
    }

    ;

    if (!req.stock) {
      msg += `Stock es un dato requerido. `;
    }

    ;

    if (req.precio < 0) {
      msg += 'Precio no puede ser negativo. ';
    }

    if (isNaN(req.stock)) {
      msg += `Stock debe ser numérico. Stock ${req.stock}. `;
    }

    ;

    if (req.stock < 0) {
      msg += 'Stock no puede ser negativo. ';
    }

    return msg;
  }
  /* Para la próxima
  async search(palabra) {
      const lista = await fs.readFile(this.url, 'utf-8');
      lista? this.lista = JSON.parse(lista) : this.lista = [];
      const filtrada = lista.filter((prod)=> prod.nombre.toUpperCase().indexOf(palabra.toUpperCase())>-1 ||
                                             prod.descripcion.toUpperCase().indexOf(palabra.toUpperCase()>-1))
      return filtrada;
  }
  */


}
/*
{
    "user": {"user": "admin",
    "password": "1234"},
        "product": {"nombre": "nombre2",
    "descripcion": "descripcion2",
                "codigo": "codigo",
            "foto": "req.foto",
            "precio": 1234,
            "stock": 10}
}

*/


const Productos = new ClassProductos();
exports.Productos = Productos;