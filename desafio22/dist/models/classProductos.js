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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Productos = void 0;
//import {DBService} from '../persistencia/productos';
//import { Request, Response } from 'express';
var mongoProductos_1 = require("../persistencia/mongoProductos");
var faker_1 = __importDefault(require("faker"));
var classProductos = /** @class */ (function () {
    function classProductos() {
    }
    classProductos.prototype.getListaProductosHB = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, mongoProductos_1.DBService.getAll()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, { error: err_1.message }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    classProductos.prototype.getListaProductos = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, err_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = (_a = res).json;
                        return [4 /*yield*/, mongoProductos_1.DBService.getAll()];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _c.sent();
                        res.json({ error: err_2.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    classProductos.prototype.getProducto = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, _b, err_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        id = Number(req.params.id);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        _b = (_a = res).json;
                        return [4 /*yield*/, mongoProductos_1.DBService.getProductById(id)];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _c.sent();
                        res.json({ error: err_3.message });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    classProductos.prototype.addProducto = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var requestBody, nombre, price, thumbnail, stock, descripcion, category_id, id, prodTemp, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestBody = req.body;
                        nombre = requestBody.nombre;
                        price = Number(requestBody.price);
                        thumbnail = requestBody.thumbnail;
                        stock = Number(requestBody.stock);
                        descripcion = requestBody.descripcion;
                        category_id = Number(requestBody.category_id);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        if (typeof nombre !== "string")
                            throw new Error("Título debe ser string");
                        if (isNaN(price))
                            throw new Error("Precio debe ser number");
                        if (typeof thumbnail !== "string")
                            throw new Error("Thumbnail debe ser string");
                        return [4 /*yield*/, mongoProductos_1.DBService.getCount()];
                    case 2:
                        id = (_a.sent()) + 1;
                        prodTemp = {
                            id: id,
                            nombre: nombre,
                            price: price,
                            thumbnail: thumbnail,
                            stock: stock,
                            descripcion: descripcion,
                            timestamp: new Date(),
                            category_id: category_id
                        };
                        return [4 /*yield*/, mongoProductos_1.DBService.insert(prodTemp)];
                    case 3:
                        _a.sent();
                        res.json(prodTemp);
                        return [3 /*break*/, 5];
                    case 4:
                        err_4 = _a.sent();
                        res.json({ error: err_4.message });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    classProductos.prototype.deleteProducto = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = Number(req.params.id);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, mongoProductos_1.DBService.delete(id)];
                    case 2:
                        _a.sent();
                        res.json({ msg: "eliminado " + id });
                        return [3 /*break*/, 4];
                    case 3:
                        err_5 = _a.sent();
                        res.json({ error: err_5.message });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    classProductos.prototype.testProducto = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var cant, productosTest, i, id, prodTemp, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        cant = void 0;
                        if (!req.query.cant) {
                            cant = 10;
                        }
                        else if (req.query.cant == 0) {
                            res.json({ error: "No hay cantidad" });
                            return [2 /*return*/];
                        }
                        else {
                            cant = req.query.cant;
                        }
                        productosTest = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < cant)) return [3 /*break*/, 5];
                        return [4 /*yield*/, mongoProductos_1.DBService.getCount()];
                    case 2:
                        id = (_a.sent()) + 1;
                        prodTemp = {
                            id: id,
                            nombre: faker_1.default.commerce.productName(),
                            price: faker_1.default.commerce.price(),
                            thumbnail: faker_1.default.image.imageUrl(),
                            stock: faker_1.default.datatype.number(),
                            descripcion: faker_1.default.commerce.productDescription(),
                            timestamp: new Date(),
                            category_id: faker_1.default.datatype.number()
                        };
                        return [4 /*yield*/, mongoProductos_1.DBService.insert(prodTemp)];
                    case 3:
                        _a.sent();
                        productosTest.push(prodTemp);
                        console.log(prodTemp);
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5:
                        res.json(productosTest);
                        return [3 /*break*/, 7];
                    case 6:
                        e_1 = _a.sent();
                        res.json({ error: e_1.message });
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    classProductos.prototype.updateProducto = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var requestBody, id, nombre, price, thumbnail, stock, descripcion, category_id, prodTemp, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestBody = req.body;
                        id = Number(req.params.id);
                        nombre = requestBody.nombre;
                        price = Number(requestBody.price);
                        thumbnail = requestBody.thumbnail;
                        stock = Number(requestBody.stock);
                        descripcion = requestBody.descripcion;
                        category_id = Number(requestBody.category_id);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        prodTemp = { nombre: nombre, price: price, thumbnail: thumbnail, stock: stock, descripcion: descripcion, category_id: category_id };
                        return [4 /*yield*/, mongoProductos_1.DBService.update(id, prodTemp)];
                    case 2:
                        _a.sent();
                        res.json(prodTemp);
                        return [3 /*break*/, 4];
                    case 3:
                        err_6 = _a.sent();
                        res.json({ error: err_6.message });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return classProductos;
}());
exports.Productos = new classProductos();
