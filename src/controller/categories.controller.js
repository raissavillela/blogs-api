const { Category } = require('../models');

async function createCategory(req, res) {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const newCategory = await Category.create({ name });
  return res.status(201).json(newCategory);
}

async function getCategories(req, res) {
  const categorias = await Category.findAll({
    attributes: ['id', 'name'],
  });
  return res.status(200).json(categorias);
}

module.exports = { createCategory, getCategories };