"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var socket_1 = require("./services/socket"); //socket io
var server_1 = __importDefault(require("./services/server"));
var socket_io_1 = require("socket.io");
var minimist_1 = __importDefault(require("minimist"));
var config_1 = require("./config/config");
var io = new socket_io_1.Server(server_1.default);
socket_1.socketProducts(io);
/* FORK O CLUSTER */
var argv = minimist_1.default(process.argv.slice(2));
var modo = argv._[2] ? argv._[2].replace('SERVER=', '') : "CLUSTER";
// export const PORT = argv.puerto || 8080;
console.log(modo);
server_1.default.listen(config_1.PORT, function () { return console.log("server up " + config_1.PORT); });
// if (modo === 'FORK') {
//     myServer.listen(PORT, () => logger.info(`Server Up port ${PORT}`));
//     logger.info(process.pid);
//     process.on('exit', (code)=> {
//         logger.info(`Código de salida: ${code}`);
//     })
// } else {
//     if (cluster.isMaster) {
//         const numCPU = os.cpus().length
//         logger.info(`NÚMERO DE CPUS => ${numCPU}`);
//         logger.info(`PID MASTER => ${process.pid}`);
//         for (let i=0;i<numCPU;i++) {
//             cluster.fork();
//         }
//         cluster.on('exit', (worker)=> {
//             logger.info(`Worker ${worker.process.pid} died at ${new Date()}`);
//             cluster.fork();
//         })
//     }
//         myServer.listen(PORT, () => logger.info(`Server Up port ${PORT} - PID WORKER ${process.pid}`));
// }
