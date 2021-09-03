"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _ClassLogin = require("../models/ClassLogin.js");

var _ClassProductos = require("../models/ClassProductos.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import {middleAdm} from './middleware.js';
const router = _express.default.Router();

let admin = false;
/*hacer mensajes de error*/

router.get('/listar', async (req, res) => {
  res.json(await _ClassProductos.Productos.readProducto());
});
router.get('/listar/:search', async (req, res) => {
  res.json(await _ClassProductos.Productos.search(req.params.search));
}); // const adm = (user, password) => {
//     admin = Login.validacion(user, password);
// }

router.post('/login', (req, res) => {
  admin = _ClassLogin.Login.validacion(req.body);
  console.log(admin);
  admin ? res.json({
    url: "http://localhost:8080/admin/index"
  }) : res.json({
    url: "http://localhost:8080/admin/error"
  });
});

const middleAdmin = (request, response, next) => {
  console.log("middleware admin");
  console.log(admin);
  admin ? next() : response.status(403).json({
    error: "Error de autenticación"
  });
};

router.use(middleAdmin); //lo de acá abajo es afectado por el middleWare

router.post('/agregar', async (req, res) => {
  //solo administradores
  console.log("Admin del agregar");
  console.log(admin);
  res.json(await _ClassProductos.Productos.addProducto(req.body));
});
router.put('/actualizar/:id', async (req, res) => {
  //solo administradores
  console.log("Admin del actualizar");
  console.log(admin);
  res.json(await _ClassProductos.Productos.updateProducto(req.params.id, req.body));
});
router.delete('/borrar/:id', async (req, res) => {
  //solo administradores
  console.log("Admin del delete");
  console.log(admin);
  res.json(await _ClassProductos.Productos.deleteProducto(req.params.id));
});
/*
{
    "product": {"nombre": "nombre1",
    "descripcion": "descripcion2",
                "codigo": "codigo",
            "foto": "req.foto",
            "precio": 1234,
            "stock": 10}
}

{
    "user": {"user": "admin",
    "password": "1234"}
}

*/

/*
{
    "user": {"user": "admin1234",
    "password": "1234"},
        "product": {"nombre": "nombre1",
    "descripcion": "descripcion2",
                "codigo": "codigo",
            "foto": "req.foto",
            "precio": 1234,
            "stock": 10}
}

*/

var _default = router;
exports.default = _default;