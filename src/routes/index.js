const base = require('./base');
const test = require('./test');

const setupRouting = (server) => {
  try {
    [
      base,
      test,
    ].map(routes => routes(server));
  } catch (e) {
    console.log(e);
  }
};

module.exports = setupRouting;
