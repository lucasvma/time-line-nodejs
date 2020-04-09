const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user_id: Number,
    description: String,
    img_url: String,
    created: Date,
    edited: Date
});

module.exports = mongoose.model('Post', PostSchema);