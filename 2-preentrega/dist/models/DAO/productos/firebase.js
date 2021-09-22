"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.ProductosFirebaseDAO = void 0;
var admin = __importStar(require("firebase-admin"));
var serviceAccount = __importStar(require("./firebase.json"));
var ProductosFirebaseDAO = /** @class */ (function () {
    function ProductosFirebaseDAO() {
        var params = {
            type: serviceAccount.type,
            projectId: serviceAccount.project_id,
            privateKeyId: serviceAccount.private_key_id,
            privateKey: serviceAccount.private_key,
            clientEmail: serviceAccount.client_email,
            clientId: serviceAccount.client_id,
            authUri: serviceAccount.auth_uri,
            tokenUri: serviceAccount.token_uri,
            authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
            clientC509CertUrl: serviceAccount.client_x509_cert_url
        };
        admin.initializeApp({
            credential: admin.credential.cert(params)
        });
        this.db = admin.firestore();
    }
    ProductosFirebaseDAO.prototype.getProductosAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resultado, docs, output;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.collection('productos').get()];
                    case 1:
                        resultado = _a.sent();
                        docs = resultado.docs;
                        output = docs.map(function (aDoc) { return ({
                            id: aDoc.data().id,
                            nombre: aDoc.data().nombre,
                            precio: aDoc.data().precio,
                            stock: aDoc.data().stock,
                            descripcion: aDoc.data().descripcion,
                            foto: aDoc.data().foto,
                            thumbnail: aDoc.data().thumbnail,
                            timestamp: aDoc.data().timestamp
                        }); });
                        return [2 /*return*/, output];
                }
            });
        });
    };
    ProductosFirebaseDAO.prototype.getProductosById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var docs, producto;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.collection('productos').where('id', '==', id).get()];
                    case 1:
                        docs = _a.sent();
                        docs.forEach(function (doc) {
                            // console.log(doc.id, ' => ', doc.data());
                            producto = doc.data();
                        });
                        console.log(producto);
                        if (docs.empty) {
                            return [2 /*return*/, ({ error: "No hay documentos de id " + id })];
                        }
                        else {
                            return [2 /*return*/, (producto)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductosFirebaseDAO.prototype.insertProducto = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var size, id, obj, userDocument;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        size = 0;
                        id = 0;
                        this.db.collection('productos').get().then(function (snap) {
                            id = snap.length;
                            console.log(id);
                            id = snap.size;
                            console.log(id);
                        });
                        console.log(id);
                        obj = {
                            id: id,
                            nombre: data.nombre,
                            descripcion: data.descripcion,
                            codigo: data.codigo,
                            foto: data.foto,
                            precio: data.precio,
                            stock: data.stock,
                            timestamp: new Date()
                        };
                        userDocument = this.db.collection('productos').doc();
                        return [4 /*yield*/, userDocument.create(obj)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, obj];
                }
            });
        });
    };
    ProductosFirebaseDAO.prototype.updateProducto = function (id, newProductData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //return this.productos.findByIdAndUpdate(id, newProductData);
                // const miDoc = this.db.collection('productos').doc(id);
                // return this.productos.findOneAndUpdate(filter, newProductData);
                return [2 /*return*/, id];
            });
        });
    };
    ProductosFirebaseDAO.prototype.deleteProducto = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //   const filter = {id:id}
                // await this.productos.deleteOne(filter);
                return [2 /*return*/, id];
            });
        });
    };
    return ProductosFirebaseDAO;
}());
exports.ProductosFirebaseDAO = ProductosFirebaseDAO;
