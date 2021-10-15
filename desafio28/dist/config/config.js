"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    MONGO_ATLAS_URL: process.env.MONGO_ATLAS_SRV || 'mongoSRV',
    PORT: process.env.PORT || 8080,
    FACEBOOK_APP_ID: process.argv[3] || process.env.FACEBOOK_APP_ID,
    FACEBOOK_APP_SECRET: process.argv[4] || process.env.FACEBOOK_APP_SECRET,
};
