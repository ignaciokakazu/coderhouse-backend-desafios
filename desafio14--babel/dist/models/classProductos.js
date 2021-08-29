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
var fs_1 = __importDefault(require("fs"));
var classProductos = /** @class */ (function () {
    function classProductos() {
        this.url = "./productos.txt";
    }
    classProductos.prototype.getListaProductos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!fs_1.default.existsSync(this.url)) return [3 /*break*/, 2];
                        return [4 /*yield*/, fs_1.default.promises.readFile(this.url, "utf-8")];
                    case 1:
                        data = _a.sent();
                        this.listaProductos = JSON.parse(data);
                        return [3 /*break*/, 3];
                    case 2:
                        this.listaProductos = [];
                        console.log("no hay elementos");
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    classProductos.prototype.getProducto = function (id) {
        var filtrado = this.listaProductos.filter(function (element) { return element.id == id; });
        var msg;
        if (filtrado.length != 0) {
            msg = filtrado;
        }
        else if (filtrado.length == 0) {
            msg = { error: 'no hay productos cargados' };
        }
        else {
            msg = { error: 'producto no encontrado' };
        }
        return msg;
    };
    classProductos.prototype.addProducto = function (productoObj) {
        var id = this.listaProductos.length;
        var title = productoObj.title;
        var price = productoObj.price;
        var thumbnail = productoObj.thumbnail;
        try {
            if (typeof title !== "string")
                throw new Error("Título debe ser string");
            if (isNaN(price))
                throw new Error("Precio debe ser number");
            if (typeof thumbnail !== "string")
                throw new Error("Thumbnail debe ser string");
            var prodTemp = { id: id, title: title, price: price, thumbnail: thumbnail };
            this.listaProductos.push(prodTemp);
            fs_1.default.promises.writeFile(this.url, JSON.stringify(this.listaProductos), "utf-8");
            return prodTemp;
        }
        catch (err) {
            return err.message;
        }
    };
    classProductos.prototype.deleteProducto = function (id) {
        var productoBorrado = this.listaProductos.filter(function (element) { return element.id == id; });
        try {
            if (productoBorrado.length == 0)
                throw new Error("No se encuentra el id del producto");
            //guardo la lista SIN el producto borrado
            var filtrado = this.listaProductos.filter(function (element) { return element.id != id; });
            this.listaProductos = filtrado;
            fs_1.default.promises.writeFile(this.url, JSON.stringify(this.listaProductos), "utf-8");
            return productoBorrado;
        }
        catch (err) {
            return err.message;
        }
    };
    classProductos.prototype.updateProducto = function (id, productoObj) {
        //id = parseInt(id)
        var title = productoObj.title;
        var price = parseInt(productoObj.price);
        var thumbnail = productoObj.thumbnail;
        try {
            if (isNaN(id))
                throw new Error("Id debe ser numérico");
            if (typeof title !== "string")
                throw new Error("Título debe ser string");
            if (isNaN(price))
                throw new Error("Precio debe ser number");
            if (typeof thumbnail !== "string")
                throw new Error("Thumbnail debe ser string");
            var filtrado = this.listaProductos.filter(function (element) { return element.id != id; });
            if (filtrado.length == this.listaProductos.length)
                throw new Error("No se encuentra el ID");
            var prodTemp = { id: id, title: title, price: price, thumbnail: thumbnail };
            filtrado.push(prodTemp);
            this.listaProductos = filtrado;
            fs_1.default.promises.writeFile(this.url, JSON.stringify(this.listaProductos), "utf-8");
            return prodTemp;
        }
        catch (err) {
            return err.message;
        }
    };
    return classProductos;
}());
exports.default = classProductos;
