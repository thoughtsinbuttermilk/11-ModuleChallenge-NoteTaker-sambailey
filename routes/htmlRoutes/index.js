// DEPENDENCIES
const path = require('path');
const router = require('express').Router();

// IROUTER GET, IROUTER MATCHER
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

module.exports = router;