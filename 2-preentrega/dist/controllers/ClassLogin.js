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
exports.Login = void 0;
const login_1 = require("../apis/login");
const bcrypt_1 = __importDefault(require("bcrypt"));
const logger_1 = require("../services/logger");
class ClassLogin {
    constructor() {
        this.user = "";
        this.password = "";
        this.admin = false;
        this.saltRounds = 10;
    }
    addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const password = req.body.password;
                const passwordConfirmation = req.body.passwordConfirmation;
                const flagPassword = password === passwordConfirmation ? true : false;
                if (!flagPassword) {
                    throw new Error("Error en confirmación de password");
                }
                //acá tiene que usar joi
                const userArr = yield login_1.apiLogin.getByEmail(req.body.email);
                if (userArr) {
                    throw new Error("Error. Usuario existente");
                }
                ;
                bcrypt_1.default.genSalt(10, function (err, salt) {
                    bcrypt_1.default.hash(req.body.password, salt, function (err, hash) {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (!err) {
                                //guarda en la BD
                                yield login_1.apiLogin.addUser({
                                    name: req.body.name,
                                    email: req.body.email,
                                    password: hash,
                                    avatar: req.body.avatar,
                                    direction: req.body.direction,
                                    tel: req.body.tel,
                                    age: req.body.age,
                                });
                            }
                        });
                    });
                });
                logger_1.infoLogger.info(`Usuario ${req.body.email} dado de alta ${new Date()}`);
                res.json({ msg: `Usuario ${req.body.email} dado de alta ${new Date()}`, success: true });
            }
            catch (e) {
                logger_1.infoLogger.info(`${e.message}`);
                res.json({ msg: e.message, success: false });
            }
        });
    }
    auth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //auth por Mongo
            const email = req.body.email;
            const password = req.body.password;
            // buscar en Mongo
            const userMongo = yield login_1.apiLogin.getByEmail(req.body.email);
            const validate = yield login_1.apiLogin.validatePassword(email, password);
            console.log(validate);
            if (validate) {
                res.redirect('/carrito');
                // res.json({msg: 'ok', success:true});
            }
            else {
                res.json({ msg: 'no', success: false });
            }
            // bcrypt.compare(password, userMongo.password, function(err, isMatch) {
            //     if (err) {
            //       peligroLogger.error('Error. Vuelva a intentarlo más tarde')
            //       throw new Error('Error. Vuelva a intentarlo más tarde')
            //     } else if (!isMatch) {
            //       peligroLogger.warn("Error en usuario y/o contraseña");
            //       infoLogger.info("Error en usuario y/o contraseña");
            //       res.json({msg: 'Error en usuario y/o contraseña', success:false})
            //     } else {
            //       res.json({msg: 'ok', success:true});
            //       //graba el ingreso
            //       //devuelve la redirección
            //     }
            //   })
            // } catch (e:any) {
            //     peligroLogger.log(e.message);
            //     res.json({msg: e.message, success:false});
            // }
        });
    }
    getIdByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const userMongo = yield login_1.apiLogin.getByEmail(email);
            return userMongo._id;
        });
    }
}
// async fbAuth() {
// }
// async fbLogout() {
// }
exports.Login = new ClassLogin();
