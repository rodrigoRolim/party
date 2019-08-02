"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes"));

var _models = _interopRequireDefault(require("./models"));

var _dotenvSafe = _interopRequireDefault(require("dotenv-safe"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var configureExpress = function configureExpress() {
  _dotenvSafe["default"].config({
    allowEmptyValues: true
  });

  var app = (0, _express["default"])();
  app.use(_bodyParser["default"].json());
  app.use((0, _cors["default"])());
  app.use('/', _routes["default"]);
  return app;
};

var _default = function _default() {
  return _models["default"].sequelize.sync({
    force: false
  }).then(configureExpress);
};

exports["default"] = _default;