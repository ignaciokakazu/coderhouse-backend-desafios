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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Productos = void 0;
// import { nextTick } from 'process';
var productos_1 = require("../apis/productos");
var ClassProductos = /** @class */ (function () {
    //private lista: ProductoInterface[];
    function ClassProductos() {
    }
    // checkProduct(req:Request, res:Response, next: NextFunction) {
    //     const msg:string = this.validacion(req.body);
    //     if (msg) {
    //         res.json({error: msg})
    //     } else {
    //         next()
    //     }
    // }
    ClassProductos.prototype.getProductosAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var lista, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, productos_1.productosAPI.getProductosAll()];
                    case 1:
                        lista = _a.sent();
                        res.json(lista);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1.message);
                        res.json({ error: error_1.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClassProductos.prototype.getProductosById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var lista, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, productos_1.productosAPI.getProductosById(Number(req.params.id))];
                    case 1:
                        lista = _a.sent();
                        if (lista.length) {
                            res.json(lista);
                        }
                        else {
                            res.json({ error: "No se encuentra el producto" });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        res.json({ error: error_2.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClassProductos.prototype.insertProducto = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, respuesta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = req.body;
                        return [4 /*yield*/, productos_1.productosAPI.insertProducto(obj)];
                    case 1:
                        respuesta = _a.sent();
                        res.json(respuesta);
                        return [2 /*return*/];
                }
            });
        });
    };
    ClassProductos.prototype.deleteProducto = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (isNaN(Number(req.params.id))) {
                            id = req.params.id;
                        }
                        else {
                            id = Number(req.params.id);
                        }
                        return [4 /*yield*/, productos_1.productosAPI.deleteProducto(id)];
                    case 1:
                        _a.sent();
                        res.json({ id: id });
                        return [2 /*return*/];
                }
            });
        });
    };
    ClassProductos.prototype.updateProducto = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = Number(req.params.id);
                        data = req.body;
                        //acá tengo que validar, antes de mandar
                        return [4 /*yield*/, productos_1.productosAPI.updateProducto(id, data)];
                    case 1:
                        //acá tengo que validar, antes de mandar
                        _a.sent();
                        res.json({ id: id });
                        return [2 /*return*/];
                }
            });
        });
    };
    // async addProducto(req: Request, res: Response) {
    //     try {
    //         this.lista = await db.read("productos")
    //         const prodId = this.generarId(this.lista);
    //         if (!prodId) {throw new Error('Problema para generar el ID. Comuniquese con el administrador')}
    //         if (this.validacion(req.body) != "") {throw new Error(this.validacion(req.body))};
    //         const prod = {
    //             id: prodId, 
    //             timestamp: moment().format('yy-MM-DD HH:mm:ss'),
    //             nombre: req.body.nombre,
    //             descripcion: req.body.descripcion,
    //             codigo: req.body.codigo,
    //             foto: req.body.foto,
    //             precio: req.body.precio,
    //             stock: req.body.stock
    //         }
    //         this.lista.push(prod);
    //         await db.write("productos", this.lista)
    //         const obj = {msg:"Producto agregado", id: prodId}
    //         res.json(obj);
    //     } catch(error: any) {
    //         res.json({error: error.message});
    //     }
    // }
    // generarId(productos:any) {
    //     const largo:number = productos.length;
    //     let max:number = 0;
    //     for (let i=0;i<largo;i++) {
    //         if (parseInt(productos[i].id) > max) {
    //             max = productos[i].id
    //         }
    //     }
    //     return max + 1;
    // }
    // async deleteProducto(req: Request, res: Response) {
    //     try {
    //         const id:number = parseInt(req.params.id);
    //         this.lista = await db.read("productos")
    //         const productos = this.lista.filter((prod:any)=>prod.id == id);
    //         if (!productos.length) { throw new Error('Id no disponible');} 
    //         const filtrada = this.lista.filter((prod:any)=> prod.id != id);
    //         await db.write("productos", filtrada);
    //         res.json({msg: "Producto eliminado"});
    //     } catch (error:any) {
    //         res.json({error: error.message});
    //     }
    // }
    // async getProductoById(req:Request, res:Response) {
    //     try {
    //         const id = req.params.id;
    //         this.lista = await db.read("productos");
    //         const prod = this.lista.filter((prod:any)=>prod.id == id);
    //         if (prod.length) {
    //             res.json(prod);
    //         } else {
    //             res.json({error: 'Producto no se encuentra'});
    //         }
    //     } catch (error:any) {
    //         res.json({error: error.message});
    //     }
    // }
    // async updateProducto(req:Request, res:Response) { //id:number, req: any
    //     try {
    //         const id: number = parseInt(req.params.id);
    //         this.lista = await db.read("productos");
    //         let productos = this.lista.filter((prod:any)=>prod.id == id);
    //         if (!productos.length) {throw new Error('No se encuentra el ID de producto')};
    //         if (this.validacion(req.body) != "") {throw new Error(this.validacion(req.body))};
    //         //console.log(prod)
    //         let obj: ProductoInterface = {
    //             id: id,
    //             nombre: req.body.nombre,
    //             descripcion: req.body.descripcion,
    //             codigo: req.body.codigo,
    //             foto: req.body.foto,
    //             precio: req.body.precio,
    //             stock: req.body.stock,
    //             timestamp: moment().format('yy-MM-DD HH:mm:ss')
    //         }
    //         productos = this.lista.filter((prod:any)=>prod.id != id);
    //         productos.push(obj);
    //         this.lista = productos;
    //         console.log(this.lista)
    //         await db.write("productos", this.lista);
    //         return {msg: "Actualizado", prod: obj};
    //     } catch (error:any) {
    //         return {error: error.message};
    //     }
    // }
    ClassProductos.prototype.validacion = function (req) {
        var msg = "";
        if (typeof (req.nombre) != 'string') {
            msg += "Nombre debe ser texto. Nombre " + req.nombre + ". ";
        }
        ;
        if (!req.nombre) {
            msg += "Nombre es un dato requerido.";
        }
        ;
        if (typeof (req.descripcion) != 'string') {
            msg += "Descripci\u00F3n debe ser texto. Descripci\u00F3n " + req.descripcion + ". ";
        }
        ;
        if (!req.descripcion) {
            msg += "Descripci\u00F3n es un dato requerido. ";
        }
        ;
        if (!req.codigo) {
            msg += "C\u00F3digo es un dato requerido. ";
        }
        ;
        if (!req.foto) {
            msg += "Foto es un dato requerido. ";
        }
        ;
        if (typeof (req.foto) != 'string') {
            msg += "Foto debe ser texto. Foto " + req.foto + ". ";
        }
        ;
        if (isNaN(req.precio)) {
            msg += "Precio debe ser num\u00E9rico. Precio " + req.precio + ". ";
        }
        ;
        if (!req.precio) {
            msg += "Precio es un dato requerido. ";
        }
        ;
        if (!req.stock) {
            msg += "Stock es un dato requerido. ";
        }
        ;
        if (req.precio < 0) {
            msg += 'Precio no puede ser negativo. ';
        }
        if (isNaN(req.stock)) {
            msg += "Stock debe ser num\u00E9rico. Stock " + req.stock + ". ";
        }
        ;
        if (req.stock < 0) {
            msg += 'Stock no puede ser negativo. ';
        }
        return msg;
    };
    return ClassProductos;
}());
/*
{
    "user": {"user": "admin",
    "password": "1234"},
        "product": {"nombre": "nombre2",
    "descripcion": "descripcion2",
                "codigo": "codigo",
            "foto": "req.foto",
            "precio": 1234,
            "stock": 10}
}

*/
exports.Productos = new ClassProductos();
