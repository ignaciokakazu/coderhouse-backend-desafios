"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var argv = require('minimist')(process.argv.slice(2));
console.log(argv._);
console.log(argv._[0].replace('FACEBOOK_APP_ID=', ''));
console.log(argv._[1].replace('FACEBOOK_APP_SECRET=', ''));
exports.default = {
    MONGO_ATLAS_URL: process.env.MONGO_ATLAS_SRV || 'mongoSRV',
    PORT: process.env.PORT || 8080,
    FACEBOOK_APP_ID: argv._[0].replace('FACEBOOK_APP_ID=', '') || process.env.FACEBOOK_APP_ID,
    FACEBOOK_APP_SECRET: argv._[1].replace('FACEBOOK_APP_SECRET=', '') || process.env.FACEBOOK_APP_SECRET,
};
