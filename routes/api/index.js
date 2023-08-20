const  router = require('express').Router();
const  routeNotes = require('../lib/notes.js');

router.use('../lib/notes.js', routeNotes);

module.exports = {router};