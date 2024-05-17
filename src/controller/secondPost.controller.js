const { BlogPost, User, Category } = require('../models');

const getAllPosts = async (req, res) => { 
  const allPosts = await BlogPost.findAll({
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
  return res.status(200).json(allPosts); 
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const postUnico = await BlogPost.findOne({
    where: { id },
    include: [
      {
        model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'],
      },
      {
        model: Category, as: 'categories', through: { attributes: [] }, attributes: ['id', 'name'],
      },
    ],
  });

  const existePost = await BlogPost.findOne({ where: { id } });
  if (!existePost) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(postUnico);
};

module.exports = { getAllPosts, getPostById };