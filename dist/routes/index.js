"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _models = require("./../models");

var _controller = _interopRequireDefault(require("./../controllers/controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

var controller = new _controller["default"](_models.Test);
router.post('/test', function (req, res) {
  return controller["function"](req, res);
});
var _default = router;
exports["default"] = _default;