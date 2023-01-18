const path = require('path');
const router = require('express').Router();

//getting notes and returning notes.html file
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

//getting all and returning index.html file
router.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router;
