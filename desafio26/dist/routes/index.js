"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routesProductos_1 = __importDefault(require("./routesProductos"));
var routes_hb_1 = __importDefault(require("./routes-hb"));
var error_1 = require("../middleware/error");
var login_1 = __importDefault(require("./login"));
var signup_1 = __importDefault(require("./signup"));
var mainRouter = express_1.default.Router();
mainRouter.use(error_1.errorHandler);
mainRouter.use('/login', login_1.default);
mainRouter.use('/api', routesProductos_1.default);
mainRouter.use('/signup', signup_1.default);
mainRouter.use('/', routes_hb_1.default);
exports.default = mainRouter;
