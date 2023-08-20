// https://expressjs.com/en/4x/api.html#router  

const router = require('express').Router();
const {createNewNote} = require('../../lib/notes.js');
const {notes} = require('../../db/db');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(result);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    console.log(notes);

    const note = (createNewNote)(req.body, notes);
    res.json(note);
});

module.exports = router;