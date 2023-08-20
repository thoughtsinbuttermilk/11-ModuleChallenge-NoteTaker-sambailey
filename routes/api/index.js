const  router = require('express').Router();
const  routeNotes = require('../../lib/notes.js');
const  {notes} = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString;
    console.log(notes);

    const newNote = (req.body, notes);
    res.json(newNote);
});

module.exports = router;