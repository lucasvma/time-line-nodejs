const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user_id: {
        type: Number,
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