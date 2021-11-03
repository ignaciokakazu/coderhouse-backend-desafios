"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
var logger_1 = __importDefault(require("../utils/logger"));
var classLogin = /** @class */ (function () {
    function classLogin() {
    }
    classLogin.prototype.getContador = function (req, res) {
        logger_1.default.info("getContador");
        if (req.session.contador) {
            req.session.contador++;
            console.log(req.session.contador);
            res.send("Ud ha visitado el sitio " + req.session.contador + " veces.");
        }
        else {
            req.session.contador = 1;
            console.log(req.session.contador);
            res.send('Bienvenido!');
        }
    };
    classLogin.prototype.getInfo = function (req, res) {
        res.send({
            session: req.session,
            sessionId: req.sessionID,
            cookies: req.cookies,
        });
    };
    ;
    // set(req, res) {
    //     console.log('setea')
    //     const user = req.body.user;
    //     console.log(user);
    //     if (user === 'admin') {
    //         console.log('hola')
    //         req.session.user = user;
    //         console.log(req.session.user);
    //         res.send({msg: 'ok'});
    //     } else {
    //         res.send({msg: "Usuario erróneo"});
    //     }
    // }
    classLogin.prototype.get = function (req, res) {
        console.log('controla');
        //const user = req.query.user;
        console.log(req.session.user);
        if (!req.session.user) {
            req.session.destroy(function (err) {
                console.log('destroy');
                if (!err)
                    res.send({ msg: 'no hay log' });
                else
                    res.send({ msg: 'err' });
            });
        }
    };
    classLogin.prototype.clear = function (req, res) {
        req.session.destroy(function (err) {
            if (!err)
                res.send({ msg: 'ok' });
            else
                res.send({ msg: 'err' });
        });
    };
    return classLogin;
}());
exports.Login = new classLogin();
