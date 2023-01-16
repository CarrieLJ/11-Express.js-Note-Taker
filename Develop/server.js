const fs = require('fs');
const express = require('express');

// Require the JSON file and assign it to a variable
const notesDb = require('./public/notes.html');
const PORT = 3001;

// Initialize our app variable by setting it to the value of express()
const app = express();

app.get('/', (req, res) => res.send('Visit http://localhost:3001/api'));

// res.json() allows us to return JSON instead of a buffer, string, or static file
app.get('/api', (req, res) => res.json(notesDb));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


