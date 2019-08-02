"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(sequelize, DataTypes) {
  var Test = sequelize.define('Test', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  }, {
    tableName: 'tests'
  });
  /* Test.associate = (models) => {
    Test.belongsTo(models.example, {
      foreignKey: {
        allowNull: false,
        field: 'post',
        name: 'post'
      }
    }) */
  //}

  return Test;
};

exports["default"] = _default;