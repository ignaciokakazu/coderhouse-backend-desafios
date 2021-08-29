import express from 'express';
import classProductos from "../models/classProductos";

const router = express.Router();

const productos = new classProductos();
 
router.get('/productos/listar', async (request:any, response:any) => {
        await productos.getListaProductos();
        response.json(productos.listaProductos)
})

router.get('/productos/listar/:id', async (request:any, response:any) => {
        await productos.getListaProductos();
        const id:number = request.params.id
        const msg:any = productos.getProducto(id)
        response.json(msg)
})

router.post('/productos/guardar', async (req:any, res:any) => {
    const productoNuevo:any = req.body;
    await productos.getListaProductos()
    const msg:any = await productos.addProducto(productoNuevo)
     res.json({
         msg
     });
});

router.delete('/productos/borrar/:id', async (req:any, res:any) => {
    const id:number = req.params.id;
    await productos.getListaProductos()
    const deleted:any = productos.deleteProducto(id)
    res.json({
        producto: deleted
    });
});

router.put('/productos/actualizar/:id', async (req:any, res:any) => {
    const id:number = req.params.id
    const producto:any = req.body
    await productos.getListaProductos()
    const msg:any = await productos.updateProducto(id, producto)
    res.json({
        producto: msg
    })
})

export default router