import express from 'express';

import { getThiefs } from './services/thiefs.service';

const app = express();

app.get('/', (req, res) => {
  res.json('Hello World');
});

app.get('/thiefs', async (req, res) => {
  const { query } = req;
  const thiefs = await getThiefs(query);

  res.json(thiefs);
});

export default app;
