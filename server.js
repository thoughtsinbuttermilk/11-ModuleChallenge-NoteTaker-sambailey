const express = require('express');

// returns an object containing the user environment
const PORT = process.env.PORT || 3001;
// creates a new express app
const app = express();
// const routes require('./routes');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// app.use(require('./routes'));

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});