import express from 'express';
import {Login} from '../controllers/ClassLogin';
import passport from '../middleware/passportLocal';
import {Carrito} from '../controllers/ClassCarrito';
import {Request, Response, NextFunction} from 'express';

const router = express.Router();

router.post('/register', Login.addUser);

router.post('/auth', (req:Request, res:Response, next:NextFunction) => {
    // passport.authenticate('login', {successRedirect: '/register', failureRedirect: '/auth'});
    passport.authenticate('login', async function (err,data,info) {

    if (err) {
        console.log('route, linea 12')
        res.json({msg: 'error', success: false});
        return next(err)
    } 
    console.log(data)//esto lo cambié para que funcione, no estoy seguro que sea así
    if(!data) {
        console.log('route, linea 17')
        return res.status(401).json({msg: 'error', success:false});
    }
    console.log('route, linea 20')
    
    const id:string = await Login.getIdByEmail(req.body.email);
    const idCarrito:string = await Carrito.setCarritoNuevo(req,res, id);
    console.log(req.body)
    //console.log(req.user);
    res.json({msg: 'ok', success:true, carrito: idCarrito});
    // console.log(req);
    // console.log(req.user);
    // res.redirect('/carrito')
    })(req,res,next);
});

router.get('/logout');

export default router;