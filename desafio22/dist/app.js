"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var socket_1 = require("./services/socket"); //socket io
var server_1 = __importDefault(require("./services/server"));
var socket_io_1 = require("socket.io");
//import { DBService } from './services/db';
var io = new socket_io_1.Server(server_1.default);
var port = 8080;
socket_1.socketProducts(io);
server_1.default.listen(port, function () { return console.log("Server Up port " + port); });
