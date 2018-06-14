var express = require('express');
var exphbs  = require('express-handlebars');
var cors = require('cors');
var http = require('http');
var fs = require("fs");
var bodyParser = require('body-parser');

var nodemailer = require('nodemailer');


var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app= express();
const path= require('path')
app.engine('hbs', require('exphbs'));
app.set('view engine', 'hbs');

//  view engine set up 


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())


app.use('/public', express.static(path.join(__dirname,)));


app.get('/', (req, res) => {

    res.send('home');

});
app.post('/signup'), function (req, res) {res.render}
app.listen(3100,() => console.log('server started));app.js'))
http.createServer(function(request, response) {
}).listen(3000);