// https://expressjs.com/en/4x/api.html#router
const router = require('express').Router();
// const fs = require('filesys');
const path = require('node:path');

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/notes', (req, res ) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = {router};
