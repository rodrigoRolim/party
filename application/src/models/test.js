
export default (sequelize, DataTypes) => {
  const Test = sequelize.define('Test', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  },{
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

  return Test
}