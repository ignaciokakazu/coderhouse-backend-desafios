import express from 'express';
import {Carrito} from '../models/ClassCarrito.js';

const router = express.Router();

router.get('/listar', async (req,res)=> {
    res.json(await Carrito.getCarritoAll())
})

router.get('/listar/:id', async (req,res)=> {
    res.json(await Carrito.getCarritoById(req.params.id))
})

router.post('/agregar/:id_producto', async (req,res)=> {
    res.json(await Carrito.addCarritoById(req.params.id_producto))
})

// router.delete('/borrar/producto/:id_producto', async (req,res)=> {
//     res.json(await Carrito.deleteCarritoByIdProducto(req.params.id_producto))
// })

router.delete('/borrar/todo', async (req, res)=> {
    res.json(await Carrito.deleteCarritoAll());
})

router.delete('/borrar/:id', async (req,res)=> {
    res.json(await Carrito.deleteCarritoById(req.params.id))
})



export default router;