const movies = require('./data/movies');
const tv = require('./data/tv');


const express = require('express');
const app = express();


const cors = require('cors');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());




app.get('/api/movies', (req, res) => {
  res.send(movies);
});
app.get('/api/tv', (req, res) => {
  res.send(tv);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
