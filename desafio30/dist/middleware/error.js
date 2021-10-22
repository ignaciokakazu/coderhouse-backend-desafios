"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var errorHandler = function (err, req, res, next) {
    console.log(err.message);
    console.log(err.stack);
    //return res.status(err.statusCode || 500).send(err.message)
    next();
};
exports.errorHandler = errorHandler;
