const request = require('supertest');
const server = require('./server');

describe('Server tests', () => {
  afterAll((done) => {
    server.close();
    done();
  });
  test('GET /todos', async () => {
    const response = await request(server).get('/todos').send();
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(null);
    expect(response.body.data.length).toBe(3);
    expect(response.body.data[0]).toBe('This is a task');
    expect(response.body.data[1]).toBe('This is another task');
    expect(response.body.data[2]).toBe('Again another task');
  });
});
