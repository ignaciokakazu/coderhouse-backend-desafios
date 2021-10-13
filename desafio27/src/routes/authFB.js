import express from 'express';
import passport from '../middleware/authFB';
import {isLoggedIn} from '../middleware/authFB';
import LoginRouter from './login';

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
router.get('/facebook/success', (req, res)=> {
    let foto = "";
    let email = "";
    console.log('successssssssssssssssssss');
    if (req.isAuthenticated()) {
        const userData = req.user;
        
        if (userData.photos) {
            foto = userData.photos[0].value;
        }

        if (userData.emails) {
            email = userData.emails[0].value;
        }

        res.render('authFB', {
            nombre: userData.displayName,
            foto: foto,
            email: email
        });

    } else {
        res.redirect('http://localhost:8080');
    }
})

//endpoint de logout
router.get('/facebook/logout', (req,res)=> {
    req.logout();
    res.redirect('login')
})

export default router;


