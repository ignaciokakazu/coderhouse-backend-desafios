"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_js_1 = __importDefault(require("./router/index.js"));
var express_handlebars_1 = __importDefault(require("express-handlebars"));
var path_1 = __importDefault(require("path"));
var config_1 = __importDefault(require("./config/config"));
var app = express_1.default();
var port = config_1.default.PORT;
app.listen(port, function () { console.log("SERVER UP " + port); });
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
/*public*/
var publicFolderPath = path_1.default.resolve(__dirname, '../public');
app.use(express_1.default.static(publicFolderPath));
/* Handlebars */
app.set('view engine', 'handlebars');
var layoutsPath = path_1.default.resolve(__dirname, '../views/layouts');
var defaultPath = path_1.default.resolve(__dirname, '../views/layouts/index.handlebars');
app.engine('handlebars', express_handlebars_1.default({
    layoutsDir: layoutsPath,
    defaultLayout: defaultPath,
}));
app.use('/', index_js_1.default);
