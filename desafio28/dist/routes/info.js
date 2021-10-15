"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var child_process_1 = require("child_process");
var path_1 = __importDefault(require("path"));
var router = express_1.default.Router();
/* DESAFIO 28 */
router.get('/', function (req, res) {
    res.json({
        argv: process.argv.slice(2),
        pid: process.pid,
        node: process.version,
        title: process.title,
        platform: process.platform,
        path: process.cwd(),
        memoryUsage: process.memoryUsage()
    });
});
//no olvidar esta parte
var scriptPath = path_1.default.resolve(__dirname, '../utils/procesoFork.js');
router.get('/random', function (req, res) {
    var cantidad = req.query.cantidad || 1000000;
    //acá ejecuta en fork
    var procesoFork = child_process_1.fork(scriptPath, [cantidad]);
    procesoFork.send('start');
    procesoFork.on('message', function (resultado) {
        res.json(resultado);
    });
});
exports.default = router;
