"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _routesProductos = _interopRequireDefault(require("./routesProductos"));

var _routesHb = _interopRequireDefault(require("./routes-hb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mainRouter = _express.default.Router();

mainRouter.use('/api', _routesProductos.default);
mainRouter.use('/', _routesHb.default);
var _default = mainRouter;
exports.default = _default;