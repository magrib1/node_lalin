var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    controller = require('./controller');

const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

app.listen(port, function() {
console.log('RESTful API server started on: ${port}');
});
