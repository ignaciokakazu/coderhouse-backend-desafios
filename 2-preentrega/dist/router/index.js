"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var productos_js_1 = __importDefault(require("./productos.js"));
// import routerCarrito from './carrito.js';
var hb_js_1 = __importDefault(require("./hb.js"));
var mainRouter = express_1.default.Router();
mainRouter.use('/api/productos', productos_js_1.default);
// mainRouter.use('/api/carrito', routerCarrito);
mainRouter.use('/', hb_js_1.default);
mainRouter.get('*', function (req, res) {
    res.status(404).json({ error: 'Ruta no implementada' });
});
exports.default = mainRouter;
