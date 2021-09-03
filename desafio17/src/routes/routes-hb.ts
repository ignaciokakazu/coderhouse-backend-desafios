import express from "express";
import {Productos} from "../models/classProductos";
import {Request, Response } from "express";

const router = express.Router();

// router.get('/productos/vista', async (request: Request, response: Response) => {
//     const productos = new classProductos();
//     await productos.getListaProductos();
    
//     const datos = {
//       productos: productos.listaProductos,
//     }
  
//     response.render('vista', datos)
//   })

router.get('/', async (request: Request, response: Response) => {
    const datos = {
      productos: await Productos.getListaProductosHB(),
    }
  
    response.render('main', datos)
  })


export default router