// https://expressjs.com/en/4x/api.html#router  

const router = require('express').Router();
const {createNotes} = require('../lib/notes');
const {notes} = require('../../db/db.json');

router.get('/notes', (req, res) => {let result = notes; res.json(result);});

router.post('/notes', (req, res) => {
    const notes = (createNotes)(req.body.notes);
    res.json(notes);
});

module.exports = {router};