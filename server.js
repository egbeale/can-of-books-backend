'use strict';
// --------- REQUIRES ------
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// ---------- USE --------
const app = express();
app.use(cors());

// ------ define PORT validate env is working -----
const PORT = process.env.PORT || 3002;

// ---------- ROUTES ----------
app.get('/', (request, response) => {
  response.status(200).send('Hello from the server.');
});

// --------- ERROR ----------
app.get('*', (request, response) => {
  response.status(404).send('Looks like you\'re trying to go somewhere that doesn\'t exist.');
});

// --------- LISTEN ----------
app.listen(PORT, () => console.log(`listening on ${PORT}`));
