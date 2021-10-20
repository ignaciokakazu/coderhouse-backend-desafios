"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("./config/config"));
var socket_1 = require("./services/socket"); //socket io
var server_1 = __importDefault(require("./services/server"));
var socket_io_1 = require("socket.io");
var minimist_1 = __importDefault(require("minimist"));
var io = new socket_io_1.Server(server_1.default);
socket_1.socketProducts(io);
/* FORK O CLUSTER */
var argv = minimist_1.default(process.argv.slice(2));
var modo = argv._[2] ? argv._[2].replace('SERVER=', '') : "FORK";
console.log(modo);
if (modo === 'FORK') {
    server_1.default.listen(config_1.default.PORT, function () { return console.log("Server Up port " + config_1.default.PORT); });
    console.log(process.pid);
    process.on('exit', function (code) {
        console.log("C\u00F3digo de salida: " + code);
    });
    // } else if (modo === 'CLUSTER') {
    //     if (cluster.isMaster) {
    //         const numCPU = os.cpus().length
    //         console.log(`NÚMERO DE CPUS => ${numCPU}`);
    //         console.log(`PID MASTER => ${process.pid}`);
    //         for (let i=0;i<numCPU;i++) {
    //             cluster.fork();
    //         }
    //         cluster.on('exit', (worker)=> {
    //             console.log(`Worker ${worker.process.pid} died at ${new Date()}`);
    //             cluster.fork();
    //         })
}
else {
    server_1.default.listen(config_1.default.PORT, function () { return console.log("Server Up port " + config_1.default.PORT + " - PID WORKER " + process.pid); });
}
