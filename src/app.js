const express = require('express');
const loginController = require('./controller/login.controller');
const userController = require('./controller/user.controller');
const categoriesController = require('./controller/categories.controller');
const postController = require('./controller/post.controller');
const secondPostController = require('./controller/secondPost.controller');
const thirdPostController = require('./controller/thirdPost.controller');
const { validateLogin } = require('./middleware/validator');
const authorizations = require('./middleware/authorizations');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

app.post('/login', loginController.loginFunction);

app.post('/user', validateLogin, userController.userFunction);

app.get('/user', authorizations, userController.getAllUsers);

app.get('/user/:id', authorizations, userController.getUserId);

app.post('/categories', authorizations, categoriesController.createCategory);

app.get('/categories', authorizations, categoriesController.getCategories);

app.post('/post', authorizations, postController.createPost);

app.get('/post', authorizations, secondPostController.getAllPosts);

app.get('/post/:id', authorizations, secondPostController.getPostById);

app.put('/post/:id', authorizations, thirdPostController.updatePostById);

module.exports = app;
