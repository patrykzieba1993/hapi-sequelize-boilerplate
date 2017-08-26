const TestController = require('./../../controllers/test');
const TestRepository = require('./../../repositories/test');

module.exports = (server) => {
  const { db } = server.plugins['hapi-sequelize'];

  const testController = TestController(TestRepository(db));

  return server.route([
    {
      method: 'GET',
      path: '/test',
      handler: testController.getTest,
    },
  ]);
};
