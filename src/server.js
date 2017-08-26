require('dotenv').load({ silent: true });

const Hapi = require('hapi');

const appConfig = require('./../config/app');
const setupRouting = require('./routes');
const setupPlugins = require('./plugins');

const setupServer = async (options = {}) => {
  const config = Object.assign({}, appConfig, options);

  const { port } = config;

  const devEnv = ['development', 'test'].includes(process.env.NODE_ENV);

  const server = new Hapi.Server({ app: config, debug: devEnv ? { log: ['error'] } : false });

  server.connection({
    port,
    routes: {
      state: {
        parse: false,
        failAction: 'ignore',
      },
    },
  });

  await setupPlugins(server);
  setupRouting(server);

  server.start((err) => {
    if (err) {
      return console.log(err);
    }

    return console.log(`Server running at: ${port}`);
  });

  return server;
};

module.exports = setupServer;
