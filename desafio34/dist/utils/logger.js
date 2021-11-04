"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var log4js_1 = __importDefault(require("log4js"));
log4js_1.default.configure({
    appenders: {
        fileAppender: { type: 'file', filename: './logs/desafio31.log' },
        consola: { type: 'console' },
    },
    categories: {
        default: { appenders: ['fileAppender', 'consola'], level: 'error' },
        miLoggerPersonalizado: { appenders: ['consola'], level: 'info' },
    },
});
var logger = log4js_1.default.getLogger();
logger.level = 'info';
exports.default = logger;
