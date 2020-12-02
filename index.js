const express = require('express');

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world! Session 3 git exercise');
});

app.listen(port, () => {
  console.log(`Hello world app listening on port ${port}`);
});
