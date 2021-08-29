import express from 'express';
import routerProductos from './productos.js';
import routerCarrito from './carrito.js';
import routerHB from './hb.js';

const mainRouter = express.Router();

mainRouter.use('/api/productos', routerProductos);
mainRouter.use('/api/carrito', routerCarrito);
mainRouter.use('/', routerHB);
mainRouter.get('*', (req, res) => {
    res.status(404).json({error: 'Ruta no implementada'});
  });

export default mainRouter;
