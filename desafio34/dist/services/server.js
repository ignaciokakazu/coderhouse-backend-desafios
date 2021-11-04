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
var express_session_1 = __importDefault(require("express-session"));
//import MongoStore from 'connect-mongo';
var authFB_1 = __importDefault(require("../middleware/authFB"));
// const advancedOptions:Object = { useNewUrlParser: true, useUnifiedTopology: true };
var app = express_1.default();
/*Desde acá, passport */
app.use(express_1.default.json());
//cookies
// app.use(cookieParser());
// const StoreOptions = {
//   store: MongoStore.create({
//     mongoUrl: config.MONGO_ATLAS_URL,
//     mongoOptions: advancedOptions,
//   }),
//   secret: 'miFirma',
//   resave: false,
//   saveUninitialized: false,
//   // cookie: {
//   //     maxAge: 500 //10000
//   // },
// };
// app.use(cookieParser());
// app.use(session(StoreOptions));
app.use(express_session_1.default({
    secret: 'miFirma',
    resave: true,
    saveUninitialized: false
}));
app.use(authFB_1.default.initialize());
app.use(authFB_1.default.session());
app.use(function (req, res, next) {
    //esto sirve para el logueo correcto
    next();
});
app.use(express_1.default.urlencoded({ extended: true }));
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
