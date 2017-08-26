const expect = require('expect');
const setupServer = require('./../../utils/server');
const DBHelpers = require('./../../utils/dbHelpers');
const mockedTestData = require('./../../mocks/test/value');

describe('GET test value', () => {
  let server;
  let dbHelpers;

  const defaultOptions = { method: 'GET', url: '/test' };

  beforeEach(async () => {
    server = await setupServer();
    dbHelpers = DBHelpers(server);
    await dbHelpers.sync();
    return dbHelpers.createTestValue(mockedTestData);
  });

  afterEach(() => dbHelpers.clear());

  it('should returns 200 HTTP status code and test value', async () => {
    const { result: { count, rows }, statusCode } = await server.inject(defaultOptions);

    expect(statusCode).toBe(200);

    expect(count).toBe(1);
    expect(rows[0].value).toBe(mockedTestData.value);
  });
});
