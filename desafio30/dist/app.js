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
var io = new socket_io_1.Server(server_1.default);
socket_1.socketProducts(io);
/* FORK O CLUSTER */
var argv = minimist_1.default(process.argv.slice(2));
var modo = argv._[2] ? argv._[2].replace('SERVER=', '') : "FORK";
// export const PORT = argv.puerto || 8080;
// myServer.listen(PORT, ()=> console.log(`server up ${PORT}`));
if (modo === 'FORK') {
    server_1.default.listen(config_1.PORT, function () { return console.log("Server Up port " + config_1.PORT); });
    console.log(process.pid);
    process.on('exit', function (code) {
        console.log("C\u00F3digo de salida: " + code);
    });
}
else {
    if (cluster_1.default.isMaster) {
        var numCPU = os_1.default.cpus().length;
        console.log("N\u00DAMERO DE CPUS => " + numCPU);
        console.log("PID MASTER => " + process.pid);
        for (var i = 0; i < numCPU; i++) {
            cluster_1.default.fork();
        }
        cluster_1.default.on('exit', function (worker) {
            console.log("Worker " + worker.process.pid + " died at " + new Date());
            cluster_1.default.fork();
        });
    }
    server_1.default.listen(config_1.PORT, function () { return console.log("Server Up port " + config_1.PORT + " - PID WORKER " + process.pid); });
}
