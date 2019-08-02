"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var fs = _interopRequireWildcard(require("fs"));

var path = _interopRequireWildcard(require("path"));

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || 'development';

var config = require(path.resolve("".concat(__dirname, "./../config/config.json")))[env];

var db = null;

if (!db) {
  db = {};
  var options = {
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  config = Object.assign(options, config);
  var sequelize = new _sequelize["default"](config.database, config.username, config.password, config);
  fs.readdirSync(__dirname).filter(function (file) {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
  }).forEach(function (file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model['name']] = model;
  });
  Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
  db['sequelize'] = sequelize;
}

var _default = db;
exports["default"] = _default;