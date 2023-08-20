const  router = require('express').Router();
const  routeNotes = require('./notes');

router.use('/notes', routeNotes);

module.exports = {router};