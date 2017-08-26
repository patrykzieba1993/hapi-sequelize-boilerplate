require('dotenv').load({ silent: true });

const Sequelize = require('sequelize');
const dbConfig = require('./../../config/db')[process.env.NODE_ENV];

const { env } = process;

module.exports = () => {
  const config = {
    logging: env.DB_LOGGING_ENABLED === 'true' ? log => console.log(log) : false,
    dialect: 'postgres',
    dialectOptions: { ssl: env.FORCE_DB_SSL === 'true' },
    pool: { max: env.DB_POOL || 3 },
  };

  return new Sequelize(dbConfig.url || '', config);
};
