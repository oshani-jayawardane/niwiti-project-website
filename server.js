dotenv = require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));

// routes
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
