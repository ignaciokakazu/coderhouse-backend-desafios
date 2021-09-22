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
exports.ProductosFSDAO = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var moment_1 = __importDefault(require("moment"));
var ProductosFSDAO = /** @class */ (function () {
    function ProductosFSDAO() {
        // this.urls = {
        //     carrito: "./carrito.txt",
        //     productos: "./productos.txt",
        // };
        var filePath = path_1.default.resolve(__dirname, './productos.txt');
        console.log(filePath);
        this.url = filePath;
        //Acá hay que mockear los datos y crear el archivo
    }
    ProductosFSDAO.prototype.getProductosAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lista, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (!fs_1.default.existsSync(this.url)) {
                            throw new Error("El archivo " + this.url + " no existe. Comuniquese con el administrador");
                        }
                        return [4 /*yield*/, fs_1.default.promises.readFile(this.url, 'utf-8')];
                    case 1:
                        lista = _a.sent();
                        response = void 0;
                        lista ? response = JSON.parse(lista) : response = [];
                        return [2 /*return*/, response];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, { error: error_1.message }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductosFSDAO.prototype.getProductosById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var productosAll, productoById, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getProductosAll()];
                    case 1:
                        productosAll = _a.sent();
                        productoById = productosAll.filter(function (prod) { return prod.id == id; });
                        return [2 /*return*/, productoById];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, { error: error_2.message }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductosFSDAO.prototype.write = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fs_1.default.promises.writeFile(this.url, JSON.stringify(data), 'utf-8')];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, error_3.message];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductosFSDAO.prototype.insertProducto = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var newId, productoObj, productos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.generarId()];
                    case 1:
                        newId = _a.sent();
                        productoObj = {
                            id: newId,
                            timestamp: moment_1.default().format('yy-MM-DD HH:mm:ss'),
                            nombre: data.nombre,
                            descripcion: data.descripcion,
                            codigo: data.codigo,
                            foto: data.foto,
                            precio: data.precio,
                            stock: data.stock
                        };
                        return [4 /*yield*/, this.getProductosAll()];
                    case 2:
                        productos = _a.sent();
                        productos.push(productoObj);
                        this.write(productos);
                        return [2 /*return*/, productoObj];
                }
            });
        });
    };
    ProductosFSDAO.prototype.generarId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var productos, largo, max, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProductosAll()];
                    case 1:
                        productos = _a.sent();
                        largo = productos.length;
                        max = 0;
                        for (i = 0; i < largo; i++) {
                            if (parseInt(productos[i].id) > max) {
                                max = parseInt(productos[i].id);
                            }
                        }
                        return [2 /*return*/, max + 1];
                }
            });
        });
    };
    ProductosFSDAO.prototype.deleteProducto = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var productos, productosTemp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProductosAll()];
                    case 1:
                        productos = _a.sent();
                        productosTemp = productos.filter(function (prod) { return prod.id != id; });
                        this.write(productosTemp);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductosFSDAO.prototype.updateProducto = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var productos, productosTemp, productosFilter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProductosAll()];
                    case 1:
                        productos = _a.sent();
                        productosTemp = {
                            id: id,
                            nombre: data.nombre,
                            descripcion: data.descripcion,
                            codigo: data.codigo,
                            foto: data.foto,
                            precio: data.precio,
                            stock: data.stock
                        };
                        productosFilter = productos.filter(function (prod) { return prod.id == id; });
                        productosFilter.push(productosTemp);
                        this.write(productosFilter);
                        return [2 /*return*/];
                }
            });
        });
    };
    return ProductosFSDAO;
}());
exports.ProductosFSDAO = ProductosFSDAO;
