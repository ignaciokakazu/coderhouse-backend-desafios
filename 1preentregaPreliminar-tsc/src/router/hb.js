import express from 'express';
import {Productos} from '../models/ClassProductos';

const router = express.Router();

router.get('/', (req,res)=> {
    res.render('main');
})

router.get('/admin', (req,res)=> {
    res.render('login');
})

router.get('/admin/error', (req, res)=> {
     res.render('error');
})

router.get('/admin/index', async (req, res)=> {
     const prod = await Productos.readProducto();
     const datos = {
         prod: prod //solo se puede mandar un objeto, no arrays
     }
     res.render('crud', datos);
 })


export default router;