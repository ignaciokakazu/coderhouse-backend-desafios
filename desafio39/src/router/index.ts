import express from 'express';
import routerProductos from './productos';
import routerCarrito from './carrito';
//import routerHB from './hb';
import routerLogin from './login';
import { isLoggedIn } from '../middleware/passportLocal';
import {Views} from './views-hb';

const mainRouter = express.Router();
/*
  La ruta de GraphQl está en services/server
*/

mainRouter.use('/api/productos', routerProductos);
//mainRouter.use('/', routerHB);
mainRouter.use('/api/login', routerLogin);
mainRouter.use('/api/carrito', isLoggedIn, routerCarrito);

mainRouter.use('/', Views.getMainController);
mainRouter.use('/admin', Views.getAdminController);

mainRouter.use('/admin/error', Views.getAdminErrorController);
mainRouter.use('/register', Views.getRegisterController);

mainRouter.get('*', (req, res) => {
    res.status(404).json({error: 'Ruta no implementada'});
  });



//   router.get('/', (req,res)=> {
//     res.render('main');
// })

// router.get('/', pruebaFuncionamiento, isLoggedIn, (req,res)=> {
//     res.render('main');
// })

// router.get('/admin', (req,res)=> {
//     res.render('login');
// })

// router.get('/admin/error', (req, res)=> {
//      res.render('error');
// })

// router.get('/register', (req, res)=> {
//     res.render('register');
// })

// router.get('/admin/index', async (req, res)=> {
//      const prod = await Productos.getProductosAll(req, res);
//      const datos = {
//          prod: prod //solo se puede mandar un objeto, no arrays
//      }
//      res.render('crud', datos);
//  })

//  router.get('/checkout', async (req, res)=> {
//     //  const carrito = await Carrito.getCarritoById(req.body._id);
//     //  const datos = {
//     //      carrito: carrito
//     //  }
//      res.render('checkout'); //, datos);
//  })




// export default router;

export default mainRouter;
