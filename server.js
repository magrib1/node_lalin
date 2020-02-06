var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    controller = require('./controller');

const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);
