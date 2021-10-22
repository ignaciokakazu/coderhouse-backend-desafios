"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var minimist_1 = __importDefault(require("minimist"));
dotenv_1.default.config();
var argv = minimist_1.default(process.argv.slice(2));
// console.log(argv._);
// console.log(argv._[0].replace('FACEBOOK_APP_ID=', ''));
// console.log(argv._[1].replace('FACEBOOK_APP_SECRET=', ''));
// const facebookId = argv._[0] ? argv._[0].replace('FACEBOOK_APP_ID=', '') : "";
// const facebookSecret = argv._[1] ? argv._[0].replace('FACEBOOK_APP_SECRET=', '') : "";
var facebookId = argv.FACEBOOK_APP_ID;
var facebookSecret = argv.FACEBOOK_APP_SECRET;
exports.default = {
    MONGO_ATLAS_URL: process.env.MONGO_ATLAS_SRV || 'mongoSRV',
    PORT: process.env.PORT || 8080,
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID || facebookId,
    FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET || facebookSecret,
};
