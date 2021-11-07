"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var minimist_1 = __importDefault(require("minimist"));
dotenv_1.default.config();
var argv = minimist_1.default(process.argv.slice(2));
// console.log(argv._);
// console.log(argv._[0].replace('FACEBOOK_APP_ID=', ''));
// console.log(argv._[1].replace('FACEBOOK_APP_SECRET=', ''));
var facebookId = argv._[0] ? argv._[0].replace('FACEBOOK_APP_ID=', '') : "";
var facebookSecret = argv._[1] ? argv._[0].replace('FACEBOOK_APP_SECRET=', '') : "";
exports.PORT = argv.puerto || 8080;
exports.default = {
    MONGO_ATLAS_URL: process.env.MONGO_ATLAS_SRV || 'mongoSRV',
    PORT: exports.PORT,
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID || facebookId,
    FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET || facebookSecret,
    ETHEREAL_USERNAME: process.env.ETHEREAL_USERNAME || '',
    ETHEREAL_HOST: process.env.ETHEREAL_HOST || '',
    ETHEREAL_PASS: process.env.ETHEREAL_PASS || '',
    ETHEREAL_PORT: process.env.ETHEREAL_PORT || '',
    ETHEREAL_NAME: process.env.ETHEREAL_NAME || '',
    GMAIL_NAME: process.env.GMAIL_NAME || '',
    GMAIL_USERNAME: process.env.GMAIL_USERNAME || '',
    GMAIL_PASS: process.env.GMAIL_PASS || '',
    GMAIL_PORT: process.env.GMAIL_PORT || '',
    GMAIL_HOST: process.env.GMAIL_HOST || '',
    TWILIO_ACCOUNT_ID: process.env.TWILIO_ACCOUNT_ID || '',
    TWILIO_TOKEN: process.env.TWILIO_TOKEN || '',
    TWILIO_CELLPHONE: process.env.TWILIO_CELLPHONE || '',
    TWILIO_ADMIN: process.env.TWILIO_ADMIN || ''
};
