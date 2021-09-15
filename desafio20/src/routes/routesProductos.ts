import express from 'express';
import {Productos} from "./../models/classProductos";

const router = express.Router();
 
router.get('/productos/listar', Productos.getListaProductos);

router.get('/productos/listar/:id', Productos.getProducto);

router.post('/productos/guardar', Productos.addProducto);

router.delete('/productos/borrar/:id', Productos.deleteProducto);

router.put('/productos/actualizar/:id', Productos.updateProducto);


export default router