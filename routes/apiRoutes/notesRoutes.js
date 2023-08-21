const router = require('express').Router();
// use uuid to generate unique ids for each note
const {v4: uuidv4} = require('uuid');
const {notes} = require('../../db/db');
const {createNewNote, findById, editNote, removeNote} = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(notes);
});

// after many fits and starts, resolved routes and errors in previous commit:
// https://github.com/thoughtsinbuttermilk/11-ModuleChallenge-NoteTaker-sambailey/commit/9d35c89c3f7dfdbd3fcaf29e254c988e337a8624
// implement posting a new note
router.post('/notes', (req, res) => {

    // creates new note if id exists, otherwise edits existing note
    if (!req.body.id) {
        req.body.id = uuidv4();
        createNewNote(req.body, notes);
    } else {
        editNote(req.body, notes);
    }

    res.json(req.body);
});

router.delete('/notes/:id', (req, res) => {
    const note = findById(req.params.id, notes);

    removeNote(note, notes);
    res.json();
});

// router.delete('/notes/:id', (req, res) => {
//     const note = findById(req.params.id, notes);

//     removeNote(note, notes);
//     res.json();
// });

module.exports = router;