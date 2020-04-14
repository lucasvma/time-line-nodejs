const User = require('../models/User');

module.exports = {
    async index (request, response) {
        const users = await User.find();

        return response.send(users);
    },
    // async update (request, response) {},
    // async destroy (request, response) {}
};