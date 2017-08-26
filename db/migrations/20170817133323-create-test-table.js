const { TEST } = require('./../const/tableNames');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const TestTable = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      value: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    };

    await queryInterface.createTable(TEST, TestTable);
    return queryInterface.bulkInsert(TEST, [{ value: 'Hello Hapi!', createdAt: new Date(), updatedAt: new Date() }]);
  },

  down: queryInterface => queryInterface.dropTable(TEST),
};
