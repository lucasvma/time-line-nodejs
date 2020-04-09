const { Router } = require('express');
const PostController = require('./controllers/PostController');

const routes = Router();

routes.get('/posts', PostController.index);
routes.post('/posts', PostController.store);
//TODO routes.post('/post/:id', PostController.update);
//TODO routes.delete('/post/:id', PostController.destroy);

module.exports = routes;