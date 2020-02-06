const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

    bodyParser = require('body-parser'),
    controller = require('./controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

app.listen(PORT, () => console.log(`app listening on port ${PORT}`))
