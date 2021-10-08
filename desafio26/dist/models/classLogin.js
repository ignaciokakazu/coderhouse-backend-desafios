"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
var classLogin = /** @class */ (function () {
    function classLogin() {
    }
    classLogin.prototype.getContador = function (req, res) {
        console.log("getContador");
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
    classLogin.prototype.set = function (req, res) {
        console.log('setea');
        var user = req.query.user;
        console.log(user);
        if (user === 'admin') {
            console.log('hola');
            req.session.user = user;
            console.log(req.session.user);
            res.send({ msg: 'ok' });
        }
        else {
            res.send({ msg: "Usuario erróneo" });
        }
    };
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
