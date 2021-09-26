import express from 'express';
import {Carrito} from '../controllers/ClassCarrito.js';
import {Request, Response} from 'express'

const router = express.Router();

router.get('/listar', Carrito.getCarritoAll);
// async (req: Request,res: Response)=> {
//     res.json(await Carrito.getCarritoAll())
// })

router.get('/listar/:id', Carrito.getCarritoById);
// async (req: Request,res: Response)=> {
//     res.json(await Carrito.getCarritoById(Number(req.params.id)))
// })

router.post('/agregar/:id_producto', Carrito.addCarritoById)
// async (req: Request,res:Response)=> {
//     res.json(await Carrito.addCarritoById(Number(req.params.id_producto)))
// })

// router.delete('/borrar/producto/:id_producto', async (req,res)=> {
//     res.json(await Carrito.deleteCarritoByIdProducto(req.params.id_producto))
// })

router.delete('/borrar/todo', Carrito.deleteCarritoAll);
// async (req:Request, res:Response)=> {
//     res.json(await Carrito.deleteCarritoAll());
// })

router.delete('/borrar/:id', Carrito.deleteCarritoById);
// async (req: Request,res:Response)=> {
//     res.json(await Carrito.deleteCarritoById(Number(req.params.id)))
// })



export default router;