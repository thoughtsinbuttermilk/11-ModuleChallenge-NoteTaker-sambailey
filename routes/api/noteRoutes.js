// https://expressjs.com/en/4x/api.html#router  

const router = require('express').Router();
const {createNotes} = require('../../lib/notes.js');
const {notes} = require('../../db/db.json');

router.get('../../lib/notes.js', (req, res) => {let result = notes; res.json(result);});

router.post('../../lib/notes.js', (req, res) => {
    const notes = (createNotes)(req.body.notes);
    res.json(notes);
});

module.exports = {router};