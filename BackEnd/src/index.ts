import express from 'express';
const app = express();
const port = 3100;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`my own personal Express is listening at http://localhost:${port}`);
});

