"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
var classLogin = /** @class */ (function () {
    function classLogin() {
    }
    classLogin.prototype.set = function (req, res) {
        //const user = req.query.user;
        var user = req.query.user;
        if (user === 'admin') {
            console.log('hola');
            res.cookie('user', user, { expire: 5000 }).send({ msg: 'ok' });
        }
        else {
            res.json({ msg: "Usuario erróneo" });
        }
    };
    classLogin.prototype.control = function (req, res) {
        //const user = req.query.user;
        var cookies = req.cookies;
        console.log(cookies);
        if (cookies) {
            var keys = Object.keys(cookies);
            keys.forEach(function (aKey) { return res.clearCookie(aKey); });
        }
        res.render('main');
    };
    classLogin.prototype.clear = function (req, res) {
        var cookies = req.cookies;
        console.log(cookies);
        var user = cookies.user;
        var keys = Object.keys(cookies);
        keys.forEach(function (aKey) { return res.clearCookie(aKey); });
        res.send({ msg: 'ok', user: user });
    };
    return classLogin;
}());
exports.Login = new classLogin();
