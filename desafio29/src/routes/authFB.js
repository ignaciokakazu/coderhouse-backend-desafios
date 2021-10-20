import express from 'express';
import passport from '../middleware/authFB';
import {isLoggedIn} from '../middleware/authFB';
import LoginRouter from './login';
import { UserModel } from '../services/mongodb';

const router = express.Router();

//autenticación
router.get('/facebook', passport.authenticate('facebook', {scope: ['email']}));

//callback. Redirige
router.get('/facebook/callback', 
            passport.authenticate('facebook', {
                successRedirect: 'http://localhost:8080/auth/facebook/success',
                failureRedirect: 'http://localhost:8080/auth/facebook/fail',
            })
);

//endpoint de fail
router.get('/facebook/fail', (req, res)=> {
    res.render('login-error');
})

//endpoint de success
router.get('/facebook/success', async (req, res)=> {
    let foto = "";
    let email = "";
    
    if (req.isAuthenticated()) {
        const userData = req.user;
        
        if (userData.photos) {
            foto = userData.photos[0].value;
        }

        if (userData.emails) {
            email = userData.emails[0].value;
        }

        const data = {
            id: userData.id,
            name: userData.displayName,
            picture: foto,
            email: email
        }

        await UserModel.create(data);

        res.render('authFB', data);

    } else {
        res.redirect('http://localhost:8080');
    }
})

//endpoint de logout
router.get('/facebook/logout', (req,res)=> {
    req.session = null;
    req.logout();
    res.redirect('http://localhost:8080/')
})


export default router;


