// reference: https://nodejs.org/api/fs.html
const fs = require("fs");

// reference: https://nodejs.org/api/path.html
const path = require("path");

// a function to create a new note and write it to the db.json file
function createNewNote(body, notes) {
  const note = body;
  notes.push(note);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({notes}, null, 2)
  );

  return note;
}

// exports the createNote function
module.exports = {createNewNote};