'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const Book = require('./models/books.js');

async function seed() {
  await Book.create({
    title: 'Americanah',
    author: 'Chimamanda Ngozi Adichie',
    description: 'Ifemelu and Obinze are young and in love when they depart military-ruled Nigeria for the West. Beautiful, self-assured Ifemelu heads for America, where despite her academic success, she is forced to grapple with what it means to be black for the first time. Quiet, thoughtful Obinze had hoped to join her, but with post-9/11 America closed to him, he instead plunges into a dangerous, undocumented life in London. Fifteen years later, they reunite in a newly democratic Nigeria, and reignite their passion—for each other and for their homeland. ',
    status: true
  });
  console.log('Book 1 was added.');

  await Book.create({
    title: 'The Wind-Up Bird Chronicle',
    author: 'Haruki Murakami',
    description: 'In a Tokyo suburb, a young man searches for his wife’s missing cat—and then for his wife as well—in a netherworld beneath the city’s placid surface. As these searches intersect, peculiar events and strange coincidences abound. Part detective story, part history lesson, part metaphysical speculation, part satire ——  this is one of Murakami’s most acclaimed and beloved novels.',
    status: true
  });
  console.log('Book 2 was added.');


  await Book.create({
    title: 'Calypso',
    author: 'David Sedaris',
    description: 'Make no mistake: this collection of semi-autobiographical stories will make you laugh til you snort. Sedaris\'s powers of observation have never been sharper, and his ability to shock readers into laughter unparalleled. Narrated in his quintiessential tongue-in-cheek fashion, he shares disarmingly frank descriptions of his family’s collective idiosyncrasies, vulgarities and charms. Calypso is simultaneously Sedaris\'s darkest and warmest book yet--and it just might be his very best.',
    status: true
  });
  console.log('Book 3 was added.');

  mongoose.disconnect();
}

seed();
