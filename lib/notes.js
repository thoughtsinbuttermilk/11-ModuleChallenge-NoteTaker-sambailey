// DEPENDENCIES
const fs = require('fs');
const path = require('path');

// ADD NEW NOTE TO NOTES ARRAY, SAVE TO DB.JSON
const createNewNote = (note, notesArray) => {
  notesArray.push(note)

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
};

// FIND NOTE BY ID
const findById = (id, notesArray) => {
  const result = notesArray.filter(note => note.id === id)[0];
  return result;
};

// EDIT PREEXISTING NOTE, BY INDEX
const editNote = (editedNote, notesArray) => {
  const index = notesArray.findIndex(note => note.id === editedNote.id);
  // GET INDEX OF EDITED NOTE
  notesArray.splice(index, 1);
  notesArray.splice(index, 0, editedNote);
  // WRITE TO DB.JSON 
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  )
};

// REMOVE NOTE, BY INDEX
const removeNote = (note, notesArray) => {
  // removes specific note from notes array
  const index = notesArray.indexOf(note);
  notesArray.splice(index, 1);

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
};

module.exports = { createNewNote, findById, editNote, removeNote };