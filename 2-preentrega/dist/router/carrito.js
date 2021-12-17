"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ClassCarrito_1 = require("../controllers/ClassCarrito");
const router = express_1.default.Router();
router.get('/listar', ClassCarrito_1.Carrito.getCarritoAll);
// async (req: Request,res: Response)=> {
//     res.json(await Carrito.getCarritoAll())
// })
router.get('/listar/:id', ClassCarrito_1.Carrito.getCarritoById);
// async (req: Request,res: Response)=> {
//     res.json(await Carrito.getCarritoById(Number(req.params.id)))
// })
router.post('/agregar/:id_producto', ClassCarrito_1.Carrito.addCarritoById);
// async (req: Request,res:Response)=> {
//     res.json(await Carrito.addCarritoById(Number(req.params.id_producto)))
// })
// router.delete('/borrar/producto/:id_producto', async (req,res)=> {
//     res.json(await Carrito.deleteCarritoByIdProducto(req.params.id_producto))
// })
router.post('/agregarPrueba', ClassCarrito_1.Carrito.addCarritoPrueba);
router.delete('/borrar/todo', ClassCarrito_1.Carrito.deleteCarritoById);
// async (req:Request, res:Response)=> {
//     res.json(await Carrito.deleteCarritoAll());
// })
//router.delete('/borrar/:id', Carrito.deleteCarritoById);
// async (req: Request,res:Response)=> {
//     res.json(await Carrito.deleteCarritoById(Number(req.params.id)))
// })
router.get('/', (req, res) => {
    res.render('crud');
});
exports.default = router;
