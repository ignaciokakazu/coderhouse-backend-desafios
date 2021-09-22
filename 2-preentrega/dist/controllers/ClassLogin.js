"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
var ClassLogin = /** @class */ (function () {
    function ClassLogin() {
        this.user = "";
        this.password = "";
        this.admin = false;
    }
    ClassLogin.prototype.validacion = function (body) {
        console.log(body);
        this.user = body.user;
        this.password = body.password;
        this.admin = false;
        if (this.user == "admin" && this.password == "1234") {
            this.admin = true;
            return this.admin;
        }
        else {
            return false;
        }
    };
    return ClassLogin;
}());
exports.Login = new ClassLogin();
