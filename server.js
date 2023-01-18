const fs = require("fs");
const express = require("express");
// const path = require("path");
// const dbData = require("./db/db.json");
// const api = require('./public/assets/js/index.js');
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

// apiRoute(app);
// htmlRoute(app);



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
