"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routesProductos_1 = __importDefault(require("./routesProductos"));
// import routesHb from './routes-hb';
var error_1 = require("../middleware/error");
// import routesLogin from './login';
// import routesSignup from './signup';
var authFB_1 = __importDefault(require("./authFB"));
var info_1 = __importDefault(require("./info"));
var config_1 = __importDefault(require("../config/config"));
var mainRouter = express_1.default.Router();
mainRouter.use(error_1.errorHandler);
mainRouter.use('/auth', authFB_1.default);
// mainRouter.use('/login', routesLogin)
mainRouter.use('/api', routesProductos_1.default);
mainRouter.use('/info', info_1.default);
// mainRouter.use('/signup', routesSignup)
// mainRouter.use('/', routesHb)
mainRouter.get('/', function (req, res) {
    res.json({ process: process.pid, port: config_1.default.PORT });
});
exports.default = mainRouter;
