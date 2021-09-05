"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_hb_1 = __importDefault(require("./routes-hb"));
var mainRouter = express_1.default.Router();
mainRouter.use('/', routes_hb_1.default);
exports.default = mainRouter;
