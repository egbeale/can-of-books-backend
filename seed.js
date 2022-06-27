'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const Book = require('./models/books.js');

async function seed() {
  await Book.create({
    title: 'How to Think Like a Programmer',
    description: 'Lessons in problem-solving.',
    status: false
  });
  console.log('Book 1 was added.');

  await Book.create({
    title: 'Cracking the Code Interview',
    description: 'Programming questions and solutions.',
    status: false
  });
  console.log('Book 2 was added.');


  await Book.create({
    title: 'Python Crash Course',
    description: 'Project-based introduction to programming.',
    status: false
  });
  console.log('Book 3 was added.');

  mongoose.disconnect();
}

seed();