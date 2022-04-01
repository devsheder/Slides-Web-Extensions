const express = require('express');

const app = express();
const port = 3000;

app.post('/logs', (req, res) => {
  res.send('');
});

app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`Listening on port ${port}. Go to http://localhost:3000`);
});
