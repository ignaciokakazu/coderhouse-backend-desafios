"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var classLogin_1 = require("../models/classLogin");
var auth_1 = __importDefault(require("../middleware/auth"));
var auth_2 = require("../middleware/auth");
//import passport from 'passport';
var router = express_1.default.Router();
router.get('/contador', classLogin_1.Login.getContador);
router.get('/info', classLogin_1.Login.getInfo);
router.get('/set', auth_1.default.authenticate('login'), function (req, res) {
    res.json({ msg: 'ok', user: req.body.user });
});
router.get('/clear', classLogin_1.Login.clear);
//router.get('/get', Login.get);
router.get('/', auth_2.isLoggedIn, function (request, response) {
    response.render('login');
});
exports.default = router;
