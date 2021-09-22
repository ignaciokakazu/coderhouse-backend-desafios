"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.middleAdm = void 0;

var _ClassLogin = require("../models/ClassLogin");

//logea a través de middleware
const middleAdm = (req, res, next) => {
  const body = req.body;
  console.log(body.user);
  console.log(body.password);

  const admin = _ClassLogin.Login.validacion(body);

  admin ? next() : res.status(403).redirect("http://localhost:8080/admin/error");
};

exports.middleAdm = middleAdm;