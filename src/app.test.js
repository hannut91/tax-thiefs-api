import request from 'supertest';

import app from './app';

test('hello world', async () => {
  await request(app).get('/')
    .expect(200);
});
