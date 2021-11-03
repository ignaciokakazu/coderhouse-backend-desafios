"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var classProductos_1 = require("./../models/classProductos");
var compression_1 = __importDefault(require("compression"));
var router = express_1.default.Router();
router.use(compression_1.default());
router.get('/productos/listar', classProductos_1.Productos.getListaProductos);
router.get('/productos/listar/:id', classProductos_1.Productos.getProducto);
router.post('/productos/guardar', classProductos_1.Productos.addProducto);
router.delete('/productos/borrar/:id', classProductos_1.Productos.deleteProducto);
router.put('/productos/actualizar/:id', classProductos_1.Productos.updateProducto);
router.post('/productos/vista-test', classProductos_1.Productos.testProducto);
exports.default = router;
