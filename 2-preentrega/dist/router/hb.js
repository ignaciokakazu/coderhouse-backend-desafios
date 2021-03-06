"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ClassProductos_1 = require("../controllers/ClassProductos");
const passportLocal_1 = require("../middleware/passportLocal");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.render('main');
});
router.get('/carrito', passportLocal_1.pruebaFuncionamiento, passportLocal_1.isLoggedIn, (req, res) => {
    res.render('register');
});
router.get('/admin', (req, res) => {
    res.render('login');
});
router.get('/admin/error', (req, res) => {
    res.render('error');
});
router.get('/register', (req, res) => {
    res.render('register');
});
router.get('/admin/index', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const prod = yield ClassProductos_1.Productos.getProductosAll(req, res);
    const datos = {
        prod: prod //solo se puede mandar un objeto, no arrays
    };
    res.render('crud', datos);
}));
exports.default = router;
