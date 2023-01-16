const fs = require('fs');
const express = require('express');
const path = require('path');
const notesDb = require('./db/db.json');

const PORT = 3001;

// Initialize our app variable by setting it to the value of express()
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /notes'));

app.get('/api/notesDb', (req, res) => res.json(notesDb));

app.get('/index', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);


