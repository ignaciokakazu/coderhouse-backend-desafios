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
exports.ProductosMemoryDAO = void 0;
var ProductosMemoryDAO = /** @class */ (function () {
    function ProductosMemoryDAO() {
        this.lista = [
            {
                id: 1,
                timestamp: new Date(),
                nombre: "Osobuco",
                descripcion: "Descripcion osobuco",
                codigo: "OSO",
                foto: "https://res.cloudinary.com/dfgfcd6ob/image/upload/v1619184247/osobuco_bv6hdd.jpg",
                precio: 100,
                stock: 8
            },
            {
                id: 2,
                timestamp: new Date(),
                nombre: "Cebolla de verdeo",
                descripcion: "Descripcion Cebolla verdeo",
                codigo: "CEV",
                foto: "https://res.cloudinary.com/dfgfcd6ob/image/upload/v1619390363/Cebolla-de-verdeo_y3bwhi.jpg",
                precio: 12,
                stock: 10
            },
            {
                id: 3,
                timestamp: new Date(),
                nombre: "Cebolla morada",
                descripcion: "Descripcion cebolla morada",
                codigo: "CEM",
                foto: "https://res.cloudinary.com/dfgfcd6ob/image/upload/v1619184230/verduras_szswkw.jpg",
                precio: 22,
                stock: 18
            }
        ];
    }
    ProductosMemoryDAO.prototype.getProductosAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.lista];
            });
        });
    };
    ProductosMemoryDAO.prototype.getProductosById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.lista.filter(function (producto) { return producto.id == id; })];
            });
        });
    };
    ProductosMemoryDAO.prototype.insertProducto = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var obj;
            return __generator(this, function (_a) {
                obj = {
                    id: this.lista.length,
                    timestamp: new Date(),
                    nombre: data.nombre,
                    descripcion: data.descripcion,
                    codigo: data.codigo,
                    foto: data.foto,
                    precio: data.precio,
                    stock: data.stock
                };
                this.lista.push(obj);
                return [2 /*return*/, obj];
            });
        });
    };
    ProductosMemoryDAO.prototype.deleteProducto = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.lista.filter(function (producto) { return producto.id != id; });
                return [2 /*return*/, id];
            });
        });
    };
    ProductosMemoryDAO.prototype.updateProducto = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var obj;
            return __generator(this, function (_a) {
                this.lista.filter(function (producto) { return producto.id != id; });
                obj = {
                    id: id,
                    timestamp: new Date(),
                    nombre: data.nombre,
                    descripcion: data.descripcion,
                    codigo: data.codigo,
                    foto: data.foto,
                    precio: data.precio,
                    stock: data.stock
                };
                this.lista.push(obj);
                return [2 /*return*/, obj];
            });
        });
    };
    return ProductosMemoryDAO;
}());
exports.ProductosMemoryDAO = ProductosMemoryDAO;
