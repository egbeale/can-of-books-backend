'use strict';
// --------- REQUIRES ------
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/books.js');
// const seed = require('./seed.js');

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
app.use(express.json());

// ------ define PORT validate env is working -----
const PORT = process.env.PORT || 3002;

// ---------- ROUTES ----------
app.get('/', (req, res) => {
  res.status(200).send('Hello from the server.');
});

// Call Routes
app.get('/books', getBooks);
app.post('/books', postBooks);
app.delete('/books/:id', deleteBooks);
app.put('/books/:id', putBooks);


// Routes get Books
async function getBooks(req, res, next) {
  try {
    let results = await Book.find();
    res.status(200).send(results);
  } catch (error) {
    next(error);
  }
}

// Routes post Books
async function postBooks(req, res, next) {
  try {
    console.log(req.body);
    let createdBook = await Book.create(req.body);
    res.status(200).send(createdBook);
  } catch (error) {
    next(error);
  }
}

// Routes delete Books
async function deleteBooks(req, res, next) {
  let id = req.params.id;
  console.log(id);
  try {
    await Book.findByIdAndDelete(id);
    res.status(200).send('Book deleted');
  } catch (error) {
    next(error);
  }
}

// Routes Put Books
async function putBooks(req, res, next) {
  let id = req.params.id;
  try {
    let data = req.body;

    let updatedBook = await Book.findByIdAndUpdate(id, data, { new: true, overwrite: true });
    res.status(200).send(updatedBook);

  } catch (error) {
    next(error);
  }
}

// --------- ERROR ----------
app.get('*', (req, res) => {
  res.status(404).send('Looks like you\'re trying to go somewhere that doesn\'t exist.');
});

// --------- LISTEN ----------
app.listen(PORT, () => console.log(`listening on ${PORT}`));
