const fs = require("fs");
const express = require("express");
const apiRoute = require("./routes/apiRoute");
const htmlRoute = require("./routes/htmlRoute");

const PORT = 3001;
const app = express();

app.use(express.static("public"));
app.use("/api", apiRoute);
app.use("/", htmlRoute);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
