"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./services/server"));
const config_1 = __importDefault(require("./config/config"));
const logger_1 = require("./services/logger");
const port = config_1.default.PORT;
// apiLogin.get('ignaciokakazu1@gmail.com')
//     .then((result) => {console.log(result)})
// apiLogin.getByEmail('ignaciokakazu1@gmail.com')
//     .then((result) => {console.log(result)})
server_1.default.listen(port, () => { logger_1.infoLogger.info(`SERVER UP ${port}`); });
server_1.default.on('error', (err) => { logger_1.peligroLogger.warn(`Error en server ${err.message}`); });
