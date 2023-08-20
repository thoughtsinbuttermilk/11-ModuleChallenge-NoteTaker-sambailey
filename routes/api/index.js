const  router = require('express').Router();
const  routeNotes = require('../api/noteRoutes');

router.use(routeNotes);

module.exports = router;