const HapiSequelize = require('hapi-sequelize');

const setupSequelize = require('./sequelize');

module.exports = async (server) => {
  const plugins = [
    {
      register: HapiSequelize,
      options: {
        name: 'db',
        models: ['./src/models/**/*.js'],
        sequelize: setupSequelize(),
      },
    },
  ];

  return server.register(plugins);
};
