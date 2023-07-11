const express = require('express');
const app = express();

app.use(express.json());

let planets = [
  {
    id: 1,
    name: 'Earth',
  },
  {
    id: 2,
    name: 'Mars',
  },
];

app.get('/planets', (req, res) => {
  res.json(planets);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});