const  router = require('express').Router();
const  routeNotes = require('../../lib/notes.js');

router.use(routeNotes);

module.exports = {router};