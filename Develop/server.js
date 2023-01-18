const fs = require("fs");
const express = require("express");
const path = require("path");
const dbData = require("./db/db.json");
const api = require('./public/assets/js/index.js');
// const index = require('./public/assets/js/index.js');
//call out apiroute and htmlroute
const apiRoute = require('./routes/apiRoute');
const htmlRoute = require('./routes/htmlRoute');

const PORT = 3001;
const app = express();

app.use(express.static("public"));
app.use('/api', apiRoute);
app.use('/', htmlRoute);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.get("/", (req, res) => res.send("Navigate to /notes"));

// app.get("/api/db", (req, res) => res.json(dbData));

//api/notes should read the db.json file and return all saved notes in json
// app.get("/api/db.json/:text", (req, res) => {
//   const requestedNotesDb = req.params.text.toLowerCase();
//   const result = [];

//   for (let i = 0; i < dbData.length; i++) {
//     const addedNote = dbData[i].text;
//     if (requestedNotesDb === addedNote[i]) {
//       result.push(dbData);
//     }
//   }
//   return res.json(result);
// });



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
