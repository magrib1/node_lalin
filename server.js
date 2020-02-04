var express = require('express'),
    app = express(),
    const PORT = process.env.PORT || 3000;
    bodyParser = require('body-parser'),
    controller = require('./controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);
