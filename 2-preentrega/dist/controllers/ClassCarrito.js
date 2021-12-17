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
exports.Carrito = void 0;
const moment_1 = __importDefault(require("moment"));
const api_1 = require("../apis/api");
const logger_1 = require("../services/logger");
class ClassCarrito {
    constructor() {
    }
    getCarritoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const carrito = yield api_1.api.getCarritoById(id);
                res.json(carrito);
            }
            catch (error) {
                logger_1.peligroLogger.warn(error.message);
                res.json({ error: error.message });
            }
        });
    }
    getCarritoAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const carritoAll = yield api_1.api.getCarritoAll();
                res.json(carritoAll);
            }
            catch (error) {
                res.json({ error: error.message });
            }
        });
    }
    addCarritoPrueba(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cart = yield api_1.api.addCarritoPrueba();
            console.log('soy el carrito prueba');
            res.json(cart);
        });
    }
    deleteCarritoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield api_1.api.deleteCarritoById(req.body.id);
                res.json({ msg: `Eliminado ${req.body.id}` });
            }
            catch (err) {
                res.json({ error: err.message });
            }
        });
    }
    setCarritoNuevo(req, res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            logger_1.infoLogger.info(`seteo carrito nuevo para ${req.body.email}`);
            console.log(req.user);
            console.log(req.body.user);
            logger_1.infoLogger.info(req.user);
            logger_1.infoLogger.log(req.body);
            const obj = {
                timestamp: (0, moment_1.default)().format('YYYY mm DDDD'),
                user: id,
                producto: [],
            };
            const idCarrito = yield api_1.api.setCarritoNuevo(obj);
            return idCarrito;
        });
    }
    setCarrito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // try {
            //     if (!req.body.id) {
            //         const obj: CarritoInterface = {
            //                 timestamp: moment().format('YYYY mm dd'),
            //                 user: req.body.user,
            //                 producto: [{
            //                     id: req.body.producto.id,
            //                     nombre: req.body.producto.nombre,
            //                     descripcion: req.body.producto.descripcion,
            //                     codigo: req.body.producto.codigo,
            //                     foto: req.body.producto.foto,
            //                     precio: req.body.producto.precio,
            //                     cantidad: req.body.producto.cantidad,
            //                     timestamp: moment().format('YYYY mm dd')
            //                 }]
            //             }
            //             const id = await api.setCarritoNuevo(obj);
            //             res.json({msg:`abrí el carrito ${id}`})
            //         } else {
            //             //recibe un solo producto, así que hace un push al carrito viejo
            //             // const obj: CarritoInterface = {
            //             //     _id: req.body.id,
            //             //     timestamp: new Date(),
            //             //     user: req.body.user,
            //             //     producto: [{
            //             //         id: req.body.producto.id,
            //             //         nombre: req.body.producto.nombre,
            //             //         descripcion: req.body.producto.descripcion,
            //             //         codigo: req.body.producto.codigo,
            //             //         foto: req.body.producto.foto,
            //             //         precio: req.body.producto.precio,
            //             //         cantidad: req.body.producto.cantidad,
            //             //         timestramp: new Date()
            //             //     }]
            //             }
            // } catch(e:any) {
            //     res.json(e.message)
            // }
        });
    }
    addCarritoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //Productos
                const id = Number(req.params.body);
                const lista = yield api_1.api.getProductosById(id);
                console.log(lista);
                //if (!prod.length) { throw new Error('No hay productos disponibles. Comuniquese con el administrador')}
                //todo esto hay que adaptar para que funcione 
                //Productos del carrito
                // const carrito = await api.getCarritoAll();
                // const idCarrito:any = await this.generarId(this.carrito);
                // this.carrito.push({
                //     id: idCarrito,
                //     timestamp: moment().format('yy-MM-DD HH:mm:ss'),
                //     producto: prod
                // })
                // console.log(this.carrito)
                // await db.write("carrito", this.carrito)
                //    return this.carrito;  
            }
            catch (error) {
                return { error: error.message };
            }
        });
    }
}
exports.Carrito = new ClassCarrito();
