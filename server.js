const express = require('express');

// returns an object containing the user environment
const PORT = process.env.PORT || 3001;
// creates a new express app
const app = express();
// const routes require('./routes');
const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/html');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.use('./api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`app listening on PORT ${PORT}`);
    console.log('press ctrl+c to quit.');
});