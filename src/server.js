import app from './app';

const PORT = 80;

app.listen(PORT, () => {
  console.log(`Listening to requests on http://localhost:${PORT}`);
});
