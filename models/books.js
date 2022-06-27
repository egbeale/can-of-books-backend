// This is where we'l declare our schema. Declare waht the data should look like. (like header on a table... these are what datatypes need to be)

'use strict';

const mongoose = require('mongoose');

// extract schema property from mongoose object. 
const { Schema } = mongoose;

const bookSchema = new Schema ({
  title: {type: String, required: true},
  description: {type: String, required: true},
  status: {type: Boolean, required: true},
});

// Define our model (give our database functionality. It'll assign the predifined schema to shape our data. This method takes in two properties, a string, and a schema)
const BookModel = mongoose.model('Book', bookSchema);

module.exports = BookModel;
