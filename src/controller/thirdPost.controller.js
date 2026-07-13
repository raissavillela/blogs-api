const { BlogPost, User, Category } = require('../models');

const validateFields = (title, content) => title && content;

const findPostById = (id) => BlogPost.findOne({
  where: { id },
  include: [
    {
      model: User,
      as: 'user',
      attributes: ['id', 'displayName', 'email', 'image'],
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
      attributes: ['id', 'name'],
    },
  ],
});

const isOwner = (post, userId) => post.userId === userId;

const updatePostById = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const userId = req.user.id; 

  if (!validateFields(title, content)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const post = await findPostById(id);
  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  if (!isOwner(post, userId)) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  post.title = title;
  post.content = content;
  await post.save();

  const updatedPost = await findPostById(id);
  return res.status(200).json(updatedPost);
};

module.exports = { updatePostById };