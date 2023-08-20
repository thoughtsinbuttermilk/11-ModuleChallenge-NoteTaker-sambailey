const  router = require('express').Router();
const  routeNotes = require('./noteRoutes');

router.use(routeNotes);

module.exports = router;