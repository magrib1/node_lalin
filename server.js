var express = require('express'),
    app = express(),
    port = process.env.port || 3000;
    bodyParser = require('body-parser'),
    controller = require('./controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

app.listen(port, () => {
      console.log(`Server is running on port ${port}.`);
    });
console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);
