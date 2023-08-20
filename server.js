const express = require('express');

// returns an object containing the user environment
const PORT = process.env.PORT || 3001;
// creates a new express app
const app = express();
// const routes require('./routes');
const apiRoutes = require('./routes/api/index.js');
const htmlRoutes = require('./routes/html/index.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('./api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});