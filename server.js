const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;

    bodyParser = require('body-parser'),
    controller = require('./controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/img'));

var routes = require('./routes');
routes(app);

app.listen(PORT, () => console.log(`app listening on port ${PORT}`))
