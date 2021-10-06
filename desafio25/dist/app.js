"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("./config/config"));
var socket_1 = require("./services/socket"); //socket io
var server_1 = __importDefault(require("./services/server"));
var socket_io_1 = require("socket.io");
var io = new socket_io_1.Server(server_1.default);
socket_1.socketProducts(io);
server_1.default.listen(config_1.default.PORT, function () { return console.log("Server Up port " + config_1.default.PORT); });
