const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://luketfake:546879@note-rest-shop-jsk5w.mongodb.net/timeline?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( response => console.log('Connected successful!'))
.catch( error => console.log('Connection Error: ', error.message));

mongoose.Promise = global.Promise;

module.exports = mongoose;
