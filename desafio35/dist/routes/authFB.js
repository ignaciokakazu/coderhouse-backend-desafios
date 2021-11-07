"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var authFB_1 = __importDefault(require("../middleware/authFB"));
var mongodb_1 = require("../services/mongodb");
var email_1 = __importDefault(require("../services/email"));
var router = express_1.default.Router();
//autenticación
router.get('/facebook', authFB_1.default.authenticate('facebook', { scope: ['email'] }));
//callback. Redirige
router.get('/facebook/callback', authFB_1.default.authenticate('facebook', {
    successRedirect: 'http://localhost:8080/auth/facebook/success',
    failureRedirect: 'http://localhost:8080/auth/facebook/fail',
}));
//endpoint de fail
router.get('/facebook/fail', function (req, res) {
    res.render('login-error');
});
//endpoint de success
router.get('/facebook/success', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var foto, email, userData, data, EmailEthereal, EmailGmail;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                foto = "";
                email = "";
                if (!req.isAuthenticated()) return [3 /*break*/, 4];
                userData = req.user;
                if (userData.photos) {
                    foto = userData.photos[0].value;
                }
                if (userData.emails) {
                    email = userData.emails[0].value;
                }
                data = {
                    id: userData.id,
                    name: userData.displayName,
                    picture: foto,
                    email: email
                };
                return [4 /*yield*/, mongodb_1.UserModel.create(data)];
            case 1:
                _a.sent();
                console.log('Ethereal');
                EmailEthereal = new email_1.default('Ethereal');
                return [4 /*yield*/, EmailEthereal.sendEmail(email, "Login", "<p>Se logui\u00F3 " + email + " y <img src='" + foto + "'> en " + new Date() + "\n                                        </p>")];
            case 2:
                _a.sent();
                console.log('Gmail');
                EmailGmail = new email_1.default('Gmail');
                return [4 /*yield*/, EmailGmail.sendEmail(email, "Login", "<p>Se logui\u00F3 " + email + " y <img src='" + foto + "'> en " + new Date() + "\n                                        </p>")];
            case 3:
                _a.sent();
                res.render('authFB', data);
                return [3 /*break*/, 5];
            case 4:
                res.redirect('/');
                _a.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); });
//endpoint de logout
router.get('/facebook/logout', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, userData, EmailEthereal, EmailGmail;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                email = '';
                if (req.isAuthenticated()) {
                    userData = req.user;
                    if (userData.emails) {
                        email = userData.emails[0].value;
                    }
                }
                // console.log(email);
                console.log('Ethereal');
                EmailEthereal = new email_1.default('Ethereal');
                return [4 /*yield*/, EmailEthereal.sendEmail(email, "Deslogueo", "<p>Se deslogueo " + email + " en " + new Date() + "\n    </p>")];
            case 1:
                _a.sent();
                console.log('Gmail');
                EmailGmail = new email_1.default('Gmail');
                return [4 /*yield*/, EmailGmail.sendEmail(email, "Deslogueo", "<p>Se deslogueo " + email + " en " + new Date() + "\n    </p>")];
            case 2:
                _a.sent();
                req.session = null;
                req.logout();
                res.redirect('/');
                return [2 /*return*/];
        }
    });
}); });
exports.default = router;
