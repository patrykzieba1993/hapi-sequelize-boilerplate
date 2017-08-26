const Test = (sequelize, DataTypes) => {
  const fields = {
    value: DataTypes.STRING,
  };

  const TestModel = sequelize.define('Test', fields, {
    freezeTableName: true,
  });

  return TestModel;
};

module.exports = Test;
