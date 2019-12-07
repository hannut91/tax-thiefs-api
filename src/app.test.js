import request from 'supertest';

import app from './app';

test('hello world', async () => {
  await request(app).get('/')
    .expect(200);
});

describe('GET /thiefs', () => {
  describe('without page', () => {
    it('responses page 1 thiefs', async () => {
      const { body } = await request(app).get('/thiefs')
        .expect(200);

      expect(body[0].name).toBe('홍영철');
    });
  });

  describe('with page', () => {
    it('responses thiefs in exact page', async () => {
      const { body } = await request(app).get('/thiefs')
        .query({page: 2})
        .expect(200);

      expect(body[0].name).toBe('유호수');
    });
  });
});