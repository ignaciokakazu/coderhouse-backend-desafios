import express from "express";
import classProductos from "../models/classProductos"

const router = express.Router();

router.get('/productos/vista', async (request, response) => {
    const productos = new classProductos("./productos.txt")
    await productos.getListaProductos();
    
    const datos = {
      productos: productos.listaProductos,
    }
  
    response.render('main', datos)
  })

export default router