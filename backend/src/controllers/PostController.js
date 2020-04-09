const Post = require('../models/Post');

module.exports = {
    async index (request, response) {
        const posts = await Post.find();

        return response.json(posts);
    },
    async store (request, response) {
        const { user_id, description } = request.body;
    
        const post = await Post.create({
            user_id,
            description
        });
    
        return response.json(post);
    },
    // async update (request, response) {
    
    // },
    // async destroy (request, response) {

    // }
};