"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = process.env.PORT || 3000;
(0, _app["default"])().then(function (app) {
  return app.listen(port, function () {
    return console.log("app running on port ".concat(port));
  });
})["catch"](function (error) {
  console.error(error);
  process.exit(1);
});