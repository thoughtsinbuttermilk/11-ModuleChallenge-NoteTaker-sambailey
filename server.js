// DEPENDENCIES
const express = require('express');
const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/html');

// CREATE EXPRESS SERVER
const app = express();

// PORT
const PORT = process.env.PORT || 8080;

// USE STATIC FILES AND JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// ROUTERS
app.use('./api', apiRoutes);
app.use('/', htmlRoutes);

// LISTENER
app.listen(PORT, () => {
    console.log(`app listening on PORT ${PORT}`);
    console.log('press ctrl+c to quit.');
});