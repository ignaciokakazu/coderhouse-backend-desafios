import express from "express"
import classProductos from "../classProductos.js"

const router = express.Router();

const productos = new classProductos("./productos.txt");

router.get('/productos/listar', async (request, response) => {
        await productos.getListaProductos();
        response.json(productos.listaProductos)
})

router.get('/productos/listar/:id', async (request, response) => {
        await productos.getListaProductos();
        const id = request.params.id
        const msg = productos.getProducto(id)
        
        response.json(msg)

})

router.post('/productos/guardar', async (req, res) => {
    const productoNuevo = req.body;
    await productos.getListaProductos()
    const msg = await productos.addProducto(productoNuevo)
    res.json({
        msg
    });
});

router.delete('/productos/borrar/:id', async (req, res) => {
    const id = req.params.id;
    await productos.getListaProductos()
    const deleted = productos.deleteProducto(id)
    res.json({
        producto: deleted
    });
});

router.put('/productos/actualizar/:id', async (req, res) => {
    const id = req.params.id
    const producto = req.body
    await productos.getListaProductos()
    const msg = await productos.updateProducto(id, producto)
    res.json({
        producto: msg
    })
})

export default router