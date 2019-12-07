import app from './app';

const PORT = 80;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Listening to requests on http://localhost:${PORT}`);
});
