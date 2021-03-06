"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var index_1 = __importDefault(require("../routes/index"));
var express_handlebars_1 = __importDefault(require("express-handlebars"));
var http = __importStar(require("http"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// //conexion a MongoDB 
// mongoose.connect('mongodb://localhost:27017/test', 
//   { useNewUrlParser: true, useUnifiedTopology:true })
//   .then(()=> console.log("todo bien"))
//   .catch(e => console.log(e));
//ruta del public
var publicPath = path_1.default.resolve(__dirname, "../../public");
app.use(express_1.default.static(publicPath));
//configuración handlebars
app.set('view engine', 'handlebars');
var layoutDirPath = path_1.default.resolve(__dirname, '../../views/layouts');
var defaultLayerPth = path_1.default.resolve(__dirname, '../../views/layouts/index.handlebars');
app.engine('handlebars', express_handlebars_1.default({
    layoutsDir: layoutDirPath,
    defaultLayout: defaultLayerPth,
}));
app.use('/', index_1.default);
var myServer = new http.Server(app);
myServer.on('error', function (err) {
    console.log("Error: " + err);
});
exports.default = myServer;
