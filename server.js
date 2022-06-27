'use strict';
// --------- REQUIRES ------
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// bring in schema to interact with that model.
const Book = require('./models/books.js');
// const seed = require('./seed.js');

//connect Mongoose to our MongoDB.
mongoose.connect(process.env.DB_URL);

// add validation to confirm we are wired up to our mongo DB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

// ---------- USE --------
const app = express();
app.use(cors());

// ------ define PORT validate env is working -----
const PORT = process.env.PORT || 3002;

// ---------- ROUTES ----------
app.get('/', (request, response) => {
  response.status(200).send('Hello from the server.');
});

app.get('/books', getBooks);

async function getBooks(req, res, next) {
  try {
    let results = await Book.find();
    res.status(200).send(results);
  } catch(error) {
    next(error);
  }
}

// --------- ERROR ----------
app.get('*', (request, response) => {
  response.status(404).send('Looks like you\'re trying to go somewhere that doesn\'t exist.');
});

// --------- LISTEN ----------
app.listen(PORT, () => console.log(`listening on ${PORT}`));
