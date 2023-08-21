// DEPENDENCIES
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// CREATE EXPRESS SERVER
const app = express();

// PORT
const PORT = process.env.PORT || 8080;

// USE STATIC FILES AND JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// ROUTERS
app.use('./apiRoutes', apiRoutes);
app.use('./htmlRoutes', htmlRoutes);

// LISTENER
app.listen(PORT, () => {
    console.log(`app listening on PORT ${PORT}`);
    console.log('press ctrl+c to quit.');
});