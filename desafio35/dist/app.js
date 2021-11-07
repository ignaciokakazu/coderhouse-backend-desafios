"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var socket_1 = require("./services/socket"); //socket io
var server_1 = __importDefault(require("./services/server"));
var socket_io_1 = require("socket.io");
var minimist_1 = __importDefault(require("minimist"));
var cluster_1 = __importDefault(require("cluster"));
var os_1 = __importDefault(require("os"));
var config_1 = require("./config/config");
var logger_1 = __importDefault(require("./utils/logger"));
var io = new socket_io_1.Server(server_1.default);
socket_1.socketProducts(io);
/* FORK O CLUSTER */
var argv = minimist_1.default(process.argv.slice(2));
var modo = argv.server || "CLUSTER";
// export const PORT = argv.puerto || 8080;
console.log(modo);
// myServer.listen(PORT, ()=> console.log(`server up ${PORT}`));
if (modo === 'FORK') {
    server_1.default.listen(config_1.PORT, function () { return logger_1.default.info("Server Up port " + config_1.PORT); });
    logger_1.default.info(process.pid);
    process.on('exit', function (code) {
        logger_1.default.info("C\u00F3digo de salida: " + code);
    });
}
else {
    if (cluster_1.default.isMaster) {
        var numCPU = os_1.default.cpus().length;
        logger_1.default.info("N\u00DAMERO DE CPUS => " + numCPU);
        logger_1.default.info("PID MASTER => " + process.pid);
        for (var i = 0; i < numCPU; i++) {
            cluster_1.default.fork();
        }
        cluster_1.default.on('exit', function (worker) {
            logger_1.default.info("Worker " + worker.process.pid + " died at " + new Date());
            cluster_1.default.fork();
        });
    }
    server_1.default.listen(config_1.PORT, function () { return logger_1.default.info("Server Up port " + config_1.PORT + " - PID WORKER " + process.pid); });
}
