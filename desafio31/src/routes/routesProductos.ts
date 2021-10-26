import express from 'express';
import {Productos} from "./../models/classProductos";
import compression from 'compression';

const router = express.Router();

router.use(compression());

router.get('/productos/listar', Productos.getListaProductos);

router.get('/productos/listar/:id', Productos.getProducto);

router.post('/productos/guardar', Productos.addProducto);

router.delete('/productos/borrar/:id', Productos.deleteProducto);

router.put('/productos/actualizar/:id', Productos.updateProducto);

router.post('/productos/vista-test', Productos.testProducto);

export default router