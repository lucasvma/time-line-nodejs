const Post = require('../models/Post');

module.exports = {
    async index (request, response) {
        const posts = await Post.find();

        return response.send(posts);
    },
    async store (request, response) {
        const { description, image_url } = request.body;
        const user_id = request.userId;
    
        const post = await Post.create({
            user_id,
            description,
            image_url
        });
        
        return response.send(post);
    },
    // async update (request, response) {},
    // async destroy (request, response) {}
};