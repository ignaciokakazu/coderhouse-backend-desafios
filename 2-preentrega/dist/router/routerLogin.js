"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import {Login} from '../models/ClassLogin.js';
const router = _express.default.Router(); // router.post('/validacion', (req, res)=> {
//     //console.log(req);
//     const body = req.body
//     console.log('login')
//     console.log(req.body);
//     //const admin = Login.validacion(body);
//     const admin=false;
//     admin? res.json({url: "http://localhost:8080/admin/index"}) : res.json({url: "http://localhost:8080/admin/error"})
//     //intenté usar el redirect. Probandolo con POSTMAN va, con el javascript desde el front, ni ahí
// })


router.post('/validacion', (req, res) => {
  console.log(req.body);
  /*await productos.getListaProductos()
  const msg = await productos.addProducto(productoNuevo)
   res.json({
       msg
   });*/

  res.json({
    msg: req.body
  });
});
var _default = router;
exports.default = _default;