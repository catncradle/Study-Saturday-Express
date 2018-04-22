//require our dependencies
const express = require('express');
const morgan = require("morgan");
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');

//create our express app
const app = express();

//middleware
app.use(morgan('dev'));

//error handling
app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

//routes
app.use('/',routes);

//listen on a port
app.listen(3000, () => console.log('Your server is running!')); 