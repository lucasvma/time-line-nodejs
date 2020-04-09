const { Router } = require('express');
const PostController = require('./controllers/PostController');
const UserController = require('./controllers/UserController');

const routes = Router();

routes.get('/posts', PostController.index);
routes.post('/posts', PostController.store);
//TODO routes.post('/post/:id', PostController.update);
//TODO routes.delete('/post/:id', PostController.destroy);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
//TODO routes.post('/users/:id', UserController.update);
//TODO routes.delete('/users/:id', UserController.destroy);

module.exports = routes;