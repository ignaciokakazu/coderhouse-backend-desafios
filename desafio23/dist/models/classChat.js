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
//import { DBService } from '../persistencia/mensajes';
var fs_1 = __importDefault(require("fs"));
var mongoMensajes_1 = require("../persistencia/mongoMensajes");
var normalizr_1 = require("normalizr");
var author = new normalizr_1.schema.Entity('author', {}, { idAttribute: 'email' });
var msg = new normalizr_1.schema.Entity('message', {
    author: author,
}, { idAttribute: '_id' });
var msgesSchema = new normalizr_1.schema.Array(msg);
var classChat = /** @class */ (function () {
    function classChat() {
        //this.url = "./chat.txt";
        this.messages = [];
    }
    classChat.prototype.setChat = function () {
        return __awaiter(this, void 0, void 0, function () {
            var chat, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, mongoMensajes_1.DBService.getAll()];
                    case 1:
                        chat = _a.sent();
                        chat ? this.messages = JSON.parse(chat) : this.messages = [];
                        return [2 /*return*/, this.messages];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    classChat.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allMessagesMongo, allMessagesJS, normalizedMessages, chatVacio, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, mongoMensajes_1.DBService.getAll()];
                    case 1:
                        allMessagesMongo = _a.sent();
                        // acá normaliza
                        // se saca del objeto Mongo
                        console.log(allMessagesMongo);
                        if (!allMessagesMongo) return [3 /*break*/, 3];
                        allMessagesJS = allMessagesMongo.map(function (aMsg) { return ({
                            _id: aMsg._id,
                            author: aMsg.author,
                            message: aMsg.message,
                            timestamp: aMsg.timestamp
                        }); });
                        console.log('allMessagesJS');
                        console.log(allMessagesJS);
                        normalizedMessages = normalizr_1.normalize(allMessagesJS, msgesSchema);
                        console.log(normalizedMessages);
                        return [4 /*yield*/, fs_1.default.promises.writeFile('./chatNorm.txt', JSON.stringify(normalizedMessages, null, '\t'), 'utf-8')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, normalizedMessages]; //.entities.message;
                    case 3:
                        chatVacio = [];
                        return [2 /*return*/, chatVacio];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.log(e_1.stack);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    classChat.prototype.connect = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        obj = {
                            author: {
                                name: req.name,
                                surname: req.surname,
                                email: req.email,
                                age: req.age,
                                alias: req.alias,
                                avatar: req.avatar,
                            },
                            message: "Bienvenido/a " + req.name + " " + req.surname,
                            timestamp: new Date()
                        };
                        return [4 /*yield*/, mongoMensajes_1.DBService.insert(obj)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, obj];
                    case 2:
                        err_2 = _a.sent();
                        console.log("error en connect: " + err_2.message, err_2.stack);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    classChat.prototype.disconnect = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {
                            author: {
                                name: req.name,
                                surname: req.surname,
                                email: req.email,
                                age: req.age,
                                alias: req.alias,
                                avatar: req.avatar
                            },
                            message: req.name + " " + req.surname + " se ha desconectado",
                            timestamp: new Date()
                        };
                        return [4 /*yield*/, mongoMensajes_1.DBService.insert(obj)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, obj];
                }
            });
        });
    };
    classChat.prototype.setMessage = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('class setMessage:');
                        console.log(req);
                        obj = {
                            author: {
                                name: req.author.name,
                                surname: req.author.surname,
                                email: req.author.email,
                                age: req.author.age,
                                alias: req.author.alias,
                                avatar: req.author.avatar,
                            },
                            message: req.message,
                            timestamp: new Date()
                        };
                        console.log('setMessage');
                        console.log(obj);
                        return [4 /*yield*/, mongoMensajes_1.DBService.insert(obj)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, obj];
                }
            });
        });
    };
    return classChat;
}());
exports.default = classChat;
