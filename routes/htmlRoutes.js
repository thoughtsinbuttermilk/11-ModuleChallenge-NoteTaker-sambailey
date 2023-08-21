// LOAD MODULES
const path = require("path");
const router = require("express").Router();

// HTML GET
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// HTML GET WITH API REQUEST
router.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;