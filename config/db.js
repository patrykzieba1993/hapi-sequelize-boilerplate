require('dotenv').load({ silent: true });

const { env } = process;

const config = {
  development: {
    url: env.DATABASE_URL,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  test: {
    url: env.DATABASE_TEST_URL,
    dialect: 'postgres',
  },
};

module.exports = config;
