const User = require('../models/User');

module.exports = {
    async index (request, response) {
        const users = await User.find();

        return response.json(users);
    },
    async store (request, response) {
        const { username, name, bio } = request.body;
    
        const user = await User.create({
            username,
            name,
            bio
        });
    
        return response.json(user);
    },
    // async update (request, response) {
    
    // },
    // async destroy (request, response) {

    // }
};