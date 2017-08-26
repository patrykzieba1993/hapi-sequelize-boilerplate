module.exports = (server) => {
  const { db } = server.plugins['hapi-sequelize'];

  const sync = () => db.sequelize.sync({ force: true });
  const clear = () => db.sequelize.drop({ force: true });

  const createTestValue = ({ value }) => db.models.Test.create({ value });

  return { sync, clear, createTestValue };
};
