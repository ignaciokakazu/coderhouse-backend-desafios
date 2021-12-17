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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Productos = void 0;
const api_1 = require("../apis/api");
class ClassProductos {
    //private lista: ProductoInterface[];
    constructor() {
    }
    // checkProduct(req:Request, res:Response, next: NextFunction) {
    //     const msg:string = this.validacion(req.body);
    //     if (msg) {
    //         res.json({error: msg})
    //     } else {
    //         next()
    //     }
    // }
    getProductosAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lista = yield api_1.api.getProductosAll();
                res.json(lista);
            }
            catch (error) {
                console.log(error.message);
                res.json({ error: error.message });
            }
        });
    }
    getProductosById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lista = yield api_1.api.getProductosById(Number(req.params.id));
                if (lista.length) {
                    res.json(lista);
                }
                else {
                    res.json({ error: "No se encuentra el producto" });
                }
            }
            catch (error) {
                res.json({ error: error.message });
            }
        });
    }
    insertProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //agregar try-catch;
            const obj = req.body;
            const respuesta = yield api_1.api.insertProducto(obj);
            res.json(respuesta);
        });
    }
    deleteProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //acá tengo que validar, antes de mandar
            let id;
            if (isNaN(Number(req.params.id))) {
                id = req.params.id;
            }
            else {
                id = Number(req.params.id);
            }
            yield api_1.api.deleteProducto(id);
            res.json({ id: id });
        });
    }
    updateProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id;
            id = Number(req.params.id);
            const data = req.body;
            //acá tengo que validar, antes de mandar
            yield api_1.api.updateProducto(id, data);
            res.json({ id: id });
        });
    }
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
    validacion(req) {
        let msg = "";
        if (typeof (req.nombre) != 'string') {
            msg += `Nombre debe ser texto. Nombre ${req.nombre}. `;
        }
        ;
        if (!req.nombre) {
            msg += `Nombre es un dato requerido.`;
        }
        ;
        if (typeof (req.descripcion) != 'string') {
            msg += `Descripción debe ser texto. Descripción ${req.descripcion}. `;
        }
        ;
        if (!req.descripcion) {
            msg += `Descripción es un dato requerido. `;
        }
        ;
        if (!req.codigo) {
            msg += `Código es un dato requerido. `;
        }
        ;
        if (!req.foto) {
            msg += `Foto es un dato requerido. `;
        }
        ;
        if (typeof (req.foto) != 'string') {
            msg += `Foto debe ser texto. Foto ${req.foto}. `;
        }
        ;
        if (isNaN(req.precio)) {
            msg += `Precio debe ser numérico. Precio ${req.precio}. `;
        }
        ;
        if (!req.precio) {
            msg += `Precio es un dato requerido. `;
        }
        ;
        if (!req.stock) {
            msg += `Stock es un dato requerido. `;
        }
        ;
        if (req.precio < 0) {
            msg += 'Precio no puede ser negativo. ';
        }
        if (isNaN(req.stock)) {
            msg += `Stock debe ser numérico. Stock ${req.stock}. `;
        }
        ;
        if (req.stock < 0) {
            msg += 'Stock no puede ser negativo. ';
        }
        return msg;
    }
}
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
