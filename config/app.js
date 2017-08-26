require('dotenv').load({ silent: true });

const { env } = process;

module.exports = {
  port: env.PORT || 3000,
};
