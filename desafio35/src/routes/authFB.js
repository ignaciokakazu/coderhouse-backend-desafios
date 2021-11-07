import express from 'express';
import passport from '../middleware/authFB';
import {isLoggedIn} from '../middleware/authFB';
import LoginRouter from './login';
import { UserModel } from '../services/mongodb';
import EmailService from '../services/email';
import EmailService from '../services/email';

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
        console.log('Ethereal')
        const EmailEthereal = new EmailService('Ethereal');
        await EmailEthereal.sendEmail(email, "Login", `<p>Se loguió ${email} y <img src='${foto}'> en ${new Date()}
                                        </p>`);
        console.log('Gmail')
        const EmailGmail = new EmailService('Gmail');
        await EmailGmail.sendEmail(email, "Login", `<p>Se loguió ${email} y <img src='${foto}'> en ${new Date()}
                                        </p>`);

        res.render('authFB', data);

    } else {
        res.redirect('/');
    }
})

//endpoint de logout
router.get('/facebook/logout', async (req,res)=> {
    let email = '';
    if (req.isAuthenticated()) {
        const userData = req.user;
        
        if (userData.emails) {
            email = userData.emails[0].value;
        }
    }
    
    // console.log(email);
    console.log('Ethereal')
    const EmailEthereal = new EmailService('Ethereal');
    await EmailEthereal.sendEmail(email, "Deslogueo", `<p>Se deslogueo ${email} en ${new Date()}
    </p>`);
    console.log('Gmail')
    const EmailGmail = new EmailService('Gmail');
    await EmailGmail.sendEmail(email, "Deslogueo", `<p>Se deslogueo ${email} en ${new Date()}
    </p>`);

    req.session = null;
    
    req.logout();
    res.redirect('/')
})


export default router;


