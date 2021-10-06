"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
// router.get('/productos/vista', async (request: Request, response: Response) => {
//     const productos = new classProductos();
//     await productos.getListaProductos();
//     const datos = {
//       productos: productos.listaProductos,
//     }
//     response.render('vista', datos)
//   })
// router.get('/', async (request: Request, response: Response) => {
//     const prods = await Productos.getListaProductosHB();
//     console.log(typeof JSON.stringify(prods));
//     const datos = {
//       productos: prods
//     }
//     response.render('main', datos)
//   })
router.get('/', function (request, response) {
    response.render('main');
});
exports.default = router;
