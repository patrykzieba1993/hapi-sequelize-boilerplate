const fs = require('fs');
const path = require('path');

module.exports = server =>
  server.route([
    {
      method: 'GET',
      path: '/favicon.ico',
      handler: (request, reply) =>
        reply(null, fs.createReadStream(path.join(__dirname, '../../..', '/favicon.ico'))).type('image/x-icon'),
    },
    {
      method: 'GET',
      path: '/robots.txt',
      handler: (request, reply) =>
        reply(null, fs.createReadStream(path.join(__dirname, '../../..', '/robots.txt'))),
    },
  ]);
