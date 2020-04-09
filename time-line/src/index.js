const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://luketfake:546879@note-rest-shop-jsk5w.mongodb.net/timeline?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( response => console.log('Connected successful!'))
.catch( error => console.log('Connection Error: ', error.message));;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3333');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json());
app.use(routes);

app.use(function(err, req, res, next) {
    res.status(500).send('Internal Server Error: ', err.stack);
});

app.listen(3333);
