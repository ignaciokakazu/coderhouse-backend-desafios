"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Login = void 0;

class ClassLogin {
  validacion(body) {
    console.log(body);
    this.user = body.user;
    this.password = body.password;
    this.admin = false;

    if (this.user == "admin" && this.password == "1234") {
      this.admin = true;
      return this.admin;
    } else {
      return false;
    }
  }

}

const Login = new ClassLogin();
exports.Login = Login;