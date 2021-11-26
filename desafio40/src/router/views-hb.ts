import express from 'express';
import {Productos} from '../controllers/ClassProductos';
import { isLoggedIn, pruebaFuncionamiento } from '../middleware/passportLocal';
import {Carrito} from '../controllers/ClassCarrito';
import {Request, Response, NextFunction} from 'express';

// const router = express.Router();

class ViewController {
    constructor(){

    }

    getMainController (req: Request, res:Response,next:NextFunction) {
        res.render('main');    
    }

    getAdminController (req: Request, res:Response,next:NextFunction) {
        res.render('login')
    }

    getAdminErrorController (req: Request, res:Response,next:NextFunction) {
        res.render('error')
    }

    getRegisterController (req: Request, res:Response,next:NextFunction) {
        res.render('register')
    }

    async getCrudController (req: Request, res:Response,next:NextFunction) {
        const prod = await Productos.getProductosAll(req, res);
        const datos = {
            prod: prod //solo se puede mandar un objeto, no arrays
        }
        res.render('crud', datos);
    }
}

export const Views = new ViewController();