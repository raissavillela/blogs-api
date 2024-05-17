const { BlogPost, PostCategory, Category } = require('../models');

const verificacoesAlv = async (title, content, categoryIds) => {
  if (!title || !content || !categoryIds) {
    throw new Error('Some required fields are missing');
  }

  const categories = await Category.findAll({ where: { id: categoryIds } });
  if (categories.length !== categoryIds.length) {
    throw new Error('one or more "categoryIds" not found');
  }
};

const criarNovoPostAlv = async (title, content, categoryIds, userId) => {
  const newPost = await BlogPost.create({
    title, content, userId, updated: new Date(), published: new Date(),
  });

  await PostCategory.bulkCreate(categoryIds.map((categoryId) => ({
    postId: newPost.id,
    categoryId,
  })));

  return {
    id: newPost.id,
    title: newPost.title,
    content: newPost.content,
    userId: newPost.userId,
    updated: newPost.updated,
    published: newPost.published,
  };
};

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  try {
    await verificacoesAlv(title, content, categoryIds);

    const userId = req.user.id;
    const obj = await criarNovoPostAlv(title, content, categoryIds, userId);

    if (obj) {
      return res.status(201).json(obj);
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { createPost };