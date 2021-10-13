"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var authFB_1 = __importDefault(require("../middleware/authFB"));
var router = express_1.default.Router();
//autenticación
router.get('/facebook', authFB_1.default.authenticate('facebook', { scope: ['email'] }));
//callback. Redirige
router.get('/facebook/callback', authFB_1.default.authenticate('facebook', {
    successRedirect: 'http://localhost:8080/auth/facebook/success',
    failureRedirect: 'http://localhost:8080/auth/facebook/fail',
}));
//endpoint de fail
router.get('/facebook/fail', function (req, res) {
    res.render('login-error');
});
//endpoint de success
router.get('/facebook/success', function (req, res) {
    var foto = "";
    var email = "";
    console.log('successssssssssssssssssss');
    if (req.isAuthenticated()) {
        var userData = req.user;
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
    }
    else {
        res.redirect('http://localhost:8080');
    }
});
//endpoint de logout
router.get('/facebook/logout', function (req, res) {
    req.logout();
    res.redirect('login');
});
exports.default = router;
