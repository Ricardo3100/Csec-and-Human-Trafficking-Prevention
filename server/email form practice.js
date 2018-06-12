var express = require('express');

var cors = require('cors');

var bodyParser = require('body-parser');

var nodemailer = require('nodemailer');

var hbs = require('nodemailer-express-handlebars');

const app= express();

app.get('/', (req, res) => {

    res.send('hello');

});


app.listen(3000,() => console.log('server started));'))