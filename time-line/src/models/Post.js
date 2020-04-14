const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img_url: {
        type: String,
        required: false
    }
}, { 
    timestamps: true
});

module.exports = mongoose.model('Post', PostSchema);