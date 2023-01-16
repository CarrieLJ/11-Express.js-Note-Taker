const fs = require("fs");
const express = require("express");
const path = require("path");
const dbData = require("./db/db.json");
// const index = require('./public/assets/js/index.js');

const PORT = 3001;
const app = express();

app.use(express.static("public"));

//getting notes and returning notes.html file
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "public/notes.html"))
);

//getting all and returning index.html file
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

// app.get("/", (req, res) => res.send("Navigate to /notes"));

// app.get("/api/db", (req, res) => res.json(dbData));

//api/notes should read the db.json file and return all saved notes in json
app.get("/api/notes/:text", (req, res) => {
  const requestedNotesDb = req.params.text.toLowerCase();
  for (let i = 0; i < dbData.length; i++) {
    if (requestedNotesDb === dbData[i].text.toLowerCase()) {
      return res.json(dbData[i]);
    }
  }
  return res.json("Not found");
});

//POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
app.post('/api/notes', (req, res) => {

})





app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
