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
exports.ProductosMongoDAO = exports.productsSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../../../config/config"));
exports.productsSchema = new mongoose_1.default.Schema({
    //   nombre: String,
    //   precio: Number,
    _id: String,
    nombre: String,
    descripcion: String,
    codigo: String,
    foto: String,
    precio: Number,
    stock: Number,
    timestamp: String
});
class ProductosMongoDAO {
    constructor(local = false) {
        if (local)
            this.srv = `mongodb://localhost:27017/${config_1.default.MONGO_LOCAL_DBNAME}`;
        else
            this.srv = `mongodb+srv://${config_1.default.MONGO_ATLAS_USER}:${config_1.default.MONGO_ATLAS_PASSWORD}@${config_1.default.MONGO_ATLAS_CLUSTER}/${config_1.default.MONGO_ATLAS_DBNAME}?retryWrites=true&w=majority`;
        mongoose_1.default.connect(this.srv);
        this.productos = mongoose_1.default.model('producto', exports.productsSchema);
    }
    getProductosAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productos.find();
        });
    }
    getProductosById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productos.find({ id: id });
        });
    }
    insertProducto(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const count = yield this.productos.count();
            const id = count + 1;
            const obj = {
                id: id,
                nombre: data.nombre,
                descripcion: data.descripcion,
                codigo: data.codigo,
                foto: data.foto,
                precio: data.precio,
                stock: data.stock,
                timestamp: new Date()
            };
            const newProduct = new this.productos(obj);
            yield newProduct.save();
            return obj;
        });
    }
    updateProducto(id, newProductData) {
        return __awaiter(this, void 0, void 0, function* () {
            //return this.productos.findByIdAndUpdate(id, newProductData);
            const filter = { id: id };
            return this.productos.findOneAndUpdate(filter, newProductData);
        });
    }
    deleteProducto(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = { id: id };
            yield this.productos.deleteOne(filter);
        });
    }
}
exports.ProductosMongoDAO = ProductosMongoDAO;
