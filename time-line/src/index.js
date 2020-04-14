const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

require('./controllers/AuthController')(app);

app.use(routes);

app.use(function(err, req, res, next) {
    res.status(500).send('Internal Server Error: ', err.stack);
});

app.listen(3333);
