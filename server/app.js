var express = require('express');

var cors = require('cors');

var bodyParser = require('body-parser');

var nodemailer = require('nodemailer');

var hbs = require('nodemailer-express-handlebars');

const app= express();
const path= require('path')

//  view engine set up 


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())


app.use('/public', express.static(path.join(__dirname,)));



app.get('/', (req, res) => {

    res.send('hello');

});


app.listen(3000,() => console.log('server started));app.js'))