// reference: https://nodejs.org/api/fs.html
const fs = require("fs");

// reference: https://nodejs.org/api/path.html
const path = require("path");

// a function to create a new note and write it to the db.json file
function createNewNote(note, notesArray,) {
  // this isn't needed
  // const note = body;
  notesArray.push(note);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({notesArray}, null, 2)
  );

  return note;
}

// exports the createNote function
module.exports = {createNewNote};