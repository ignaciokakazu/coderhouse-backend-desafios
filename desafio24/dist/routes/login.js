"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var classLogin_1 = require("../models/classLogin");
var router = express_1.default.Router();
router.get('/set', classLogin_1.Login.set);
router.get('/clear', classLogin_1.Login.clear);
router.get('/', function (request, response) {
    response.render('login');
});
exports.default = router;
