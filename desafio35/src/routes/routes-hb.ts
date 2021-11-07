import express from "express";
import {Productos} from "../models/classProductos";
import {Request, Response } from "express";
import clearCookie from 'cookie-parser';
import {Login} from '../models/classLogin';

const router = express.Router();

router.get('/productos/vista', async (request: Request, response: Response) => {
    await Productos.getListaProductos();
    
    const datos = {
      productos: Productos.listaProductos,
    }
  
    response.render('vista', datos)
  })

router.get('/', async (request: Request, response: Response) => {
    const prods = await Productos.getListaProductosHB();
    const datos = {
      productos: prods
    }

    response.render('main', datos)
    
  })

router.get('/', (request:Request, response: Response) => {
    response.render('main');
})



export default router